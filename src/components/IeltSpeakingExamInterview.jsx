import React, { useState, useRef, useEffect } from 'react';

export default function IeltsSpeakingSandbox() {
  const SPEAKING_EXAM = {
    part1: {
      title: "Part 1: Introduction & Familiar Topics",
      description: "The examiner asks general questions about your life, home, work, studies, or interests. Aim for 2-4 sentences per answer.",
      sections: [
        {
          category: "Work & Studies",
          questions: [
            "Do you work or are you a student?",
            "What subjects are you studying, or what are your main responsibilities at work?",
            "Why did you choose this particular field or subject?",
            "Is there anything you dislike about your current work or studies?"
          ]
        },
        {
          category: "Hometown & Accommodation",
          questions: [
            "Where is your hometown located?",
            "What do you like most about the place where you live?",
            "Do you live in a house or an apartment?",
            "How would you improve your local residential area if you could?"
          ]
        }
      ]
    },
    part2: {
      title: "Part 2: Long Turn (Cue Card)",
      description: "You will be given a topic cue card. You have exactly 1 minute to prepare notes and must speak continuously for 1 to 2 minutes.",
      sections: [
        {
          category: "Cue Card Challenge",
          questions: [
            "Describe a time when you had to solve a difficult problem under pressure. You should say: when it occurred, what the problem was, how you approached solving it, and explain how you felt after the situation was resolved."
          ]
        }
      ]
    },
    part3: {
      title: "Part 3: Two-Way Analytical Discussion",
      description: "The examiner will ask deep, abstract questions connected to the Part 2 topic. Expect to justify opinions and analyze broader societal trends.",
      sections: [
        {
          category: "Technology & Problem Solving",
          questions: [
            "How has modern digital technology altered the way humans approach everyday problem-solving?",
            "Do you believe children should be explicitly taught abstract logic and problem-solving skills in primary schools?",
            "In what ways might artificial intelligence change the responsibilities of human workers in the future?"
          ]
        },
        {
          category: "Societal Pressures & Decision Making",
          questions: [
            "Why do some individuals perform exceptionally well under immense pressure while others struggle?",
            "To what extent should governments rely on public opinion when making major long-term infrastructure decisions?",
            "How do generational differences impact the way people make critical financial choices?"
          ]
        }
      ]
    }
  };

  // State Management
  const [currentPart, setCurrentPart] = useState('part1'); // 'part1' | 'part2' | 'part3'
  const [sectionIndex, setSectionIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  
  // Timer States for Part 2 Preparation
  const [prepTime, setPrepTime] = useState(60);
  const [isPrepActive, setIsPrepActive] = useState(false);

  // Audio Recording Refs
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const streamRef = useRef(null);
  const timerIntervalRef = useRef(null);

  // Extract current question context dynamically
  const currentPartData = SPEAKING_EXAM[currentPart];
  const currentSection = currentPartData.sections[sectionIndex] || currentPartData.sections[0];
  const currentQuestion = currentSection ? currentSection.questions[questionIndex] : "";

  // Handle Prep Countdown Timer via robust React useEffect hook
  useEffect(() => {
    if (isPrepActive && prepTime > 0) {
      timerIntervalRef.current = setInterval(() => {
        setPrepTime((prev) => prev - 1);
      }, 1000);
    } else if (prepTime === 0) {
      setIsPrepActive(false);
      clearInterval(timerIntervalRef.current);
    }

    return () => clearInterval(timerIntervalRef.current);
  }, [isPrepActive, prepTime]);

  // Reset indices securely when manually shifting parts
  const handlePartChange = (part) => {
    if (isRecording) stopRecording();
    setIsPrepActive(false);
    setPrepTime(60);
    setCurrentPart(part);
    setSectionIndex(0);
    setQuestionIndex(0);
    setAudioUrl(null);
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  };

  // 1. Text-to-Speech: Virtual Examiner
  const handleAskQuestion = () => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      
      // Split the cue card into distinct phrases to prevent longer passages from clipping
      const cleanText = currentQuestion.replace(/:/g, '.').replace(/\?/g, '? ');
      const utterance = new SpeechSynthesisUtterance(cleanText);
      
      utterance.lang = 'en-GB'; 
      utterance.rate = 0.88;    
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Text-to-speech infrastructure is not supported by your current browser environment.");
    }
  };

  // 2. Audio Capture: Record Response
  const startRecording = async () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      alert("Audio recording infrastructure is not accessible in this browser configuration.");
      return;
    }
    try {
      setAudioUrl(null);
      audioChunksRef.current = [];
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      
      mediaRecorderRef.current = new MediaRecorder(stream);
      
      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (err) {
      console.error("Microphone hardware connection failure:", err);
      alert("Failed to initialize microphone connection. Please grant permissions.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    }
  };

  // 3. Part 2 Countdown Timer Control Trigger
  const startPrepTimer = () => {
    setPrepTime(60);
    setIsPrepActive(true);
  };

  // 4. Test Navigation Engine Fixes
  const advanceNavigation = () => {
    if (isRecording) stopRecording();
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    
    setAudioUrl(null);
    setIsPrepActive(false);
    setPrepTime(60);

    const maxQuestions = currentSection ? currentSection.questions.length : 0;
    if (questionIndex + 1 < maxQuestions) {
      setQuestionIndex(prev => prev + 1);
    } else {
      const maxSections = currentPartData.sections.length;
      if (sectionIndex + 1 < maxSections) {
        setSectionIndex(prev => prev + 1);
        setQuestionIndex(0);
      } else {
        // Transition securely between distinct Exam Parts
        if (currentPart === 'part1') {
          setCurrentPart('part2');
          setSectionIndex(0);
          setQuestionIndex(0);
        } else if (currentPart === 'part2') {
          setCurrentPart('part3');
          setSectionIndex(0);
          setQuestionIndex(0);
        } else {
          // Restart Entire Exam System Flow cleanly
          setCurrentPart('part1');
          setSectionIndex(0);
          setQuestionIndex(0);
        }
      }
    }
  };

  return (
    <div style={{
      fontFamily: 'Segoe UI, Roboto, Helvetica, Arial, sans-serif',
      maxWidth: '700px',
      margin: '40px auto',
      padding: '30px',
      borderRadius: '16px',
      background: '#ffffff',
      boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
      color: '#1e293b',
      boxSizing: 'border-box'
    }}>
      {/* Exam Header */}
      <div style={{ borderBottom: '2px solid #f1f5f9', paddingBottom: '20px', marginBottom: '25px' }}>
        <span style={{ fontSize: '11px', background: '#dcfce7', color: '#15803d', padding: '4px 10px', borderRadius: '20px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Live Interview Simulation
        </span>
        <h2 style={{ margin: '10px 0 6px 0', color: '#0f172a' }}>🎙️ IELTS Speaking Examiner Suite</h2>
        <p style={{ margin: '0', fontSize: '14px', color: '#64748b' }}>Simulate real exam components, monitor timing logic, and record voice responses for fluency reviews.</p>
      </div>

      {/* Part Selection Navigation Tabs */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '25px', background: '#f8fafc', padding: '6px', borderRadius: '10px' }}>
        {['part1', 'part2', 'part3'].map((part) => (
          <button
            key={part}
            onClick={() => handlePartChange(part)}
            style={{
              flex: 1,
              padding: '10px',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '14px',
              transition: 'all 0.2s',
              background: currentPart === part ? '#2563eb' : 'transparent',
              color: currentPart === part ? '#ffffff' : '#64748b',
              boxShadow: currentPart === part ? '0 4px 12px rgba(37,99,235,0.2)' : 'none'

            }}
          >
            {SPEAKING_EXAM[part].title}
          </button>
        ))}
      </div>

      {/* Current Part Description */}
      <div style={{ marginBottom: '20px', padding: '15px', background: '#f1f5f9', borderRadius: '10px', borderLeft: '4px solid #2563eb' }}>
        <p style={{ margin: '0', fontSize: '14px', color: '#334155' }}>{currentPartData.description}</p>
      </div>

      {/* Current Question Display */}
      <div style={{ marginBottom: '20px', padding: '20px', background: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
        <h4 style={{ marginTop: '0', color: '#1e40af' }}>📌 {currentSection.category}</h4>
        <p style={{ fontSize: '15px', color: '#334155', lineHeight: '1.6' }}>{currentQuestion}</p>
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
        <button onClick={handleAskQuestion} style={{ flex: 1, padding: '10px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>
          🔊 Ask Question
        </button>
        {currentPart === 'part2' && (
          <button onClick={startPrepTimer} disabled={isPrepActive} style={{ flex: 1, padding: '10px', background: isPrepActive ? '#94a3b8' : '#16a34a', color: '#fff', border: 'none', borderRadius: '8px', cursor: isPrepActive ? 'not-allowed' : 'pointer', fontWeight: '600' }}>
            ⏱️ {isPrepActive ? `Preparing... ${prepTime}s` : 'Start Prep Timer'}
          </button>
        )}
      </div>

      {/* Recording Controls */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
        <button onClick={startRecording} disabled={isRecording} style={{ flex: 1, padding: '10px', background: isRecording ? '#94a3b8' : '#f97316', color: '#fff', border: 'none', borderRadius: '8px', cursor: isRecording ? 'not-allowed' : 'pointer', fontWeight: '600' }}>
          🎤 {isRecording ? 'Recording...' : 'Start Recording'}
        </button>
        <button onClick={stopRecording} disabled={!isRecording} style={{ flex: 1, padding: '10px', background: !isRecording ? '#94a3b8' : '#ef4444', color: '#fff', border: 'none', borderRadius: '8px', cursor: !isRecording ? 'not-allowed' : 'pointer', fontWeight: '600' }}>
          ⏹️ Stop Recording
        </button>
      </div>

      {/* Audio Playback */}
      {audioUrl && (
        <div style={{ marginBottom: '20px', padding: '15px', background: '#f1f5f9', borderRadius: '10px', borderLeft: '4px solid #16a34a' }}>
          <p style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#334155' }}>🎧 Playback your response:</p>
          <audio controls src={audioUrl} style={{ width: '100%' }} />
        </div>
      )}

      {/* Navigation to Next Question */}
      <div style={{ textAlign: 'right' }}>
        <button onClick={advanceNavigation} style={{ padding: '10px 20px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>
          ➡️ Next Question
        </button>
      </div>
    </div>
  );
}   