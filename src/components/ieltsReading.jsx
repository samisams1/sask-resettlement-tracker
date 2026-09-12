import React, { useState } from 'react';

export default function IeltsReadingSandbox() {
  const READING_EXAM = [
    {
      topic: "Environmental Science",
      passage: "The massive acceleration of global urbanization has created microclimates known as 'Urban Heat Islands' (UHIs). Densely packed concrete structures and asphalt pavements absorb solar radiation during the day and release it at night. This prevents cities from cooling down naturally, causing urban temperatures to sit up to 5°C higher than surrounding rural areas.",
      question: "What primary structural materials are responsible for creating Urban Heat Islands?",
      answer: "concrete and asphalt"
    },
    {
      topic: "History & Architecture",
      passage: "The construction of the Great Pyramid of Giza remains an engineering marvel. Recent archeological evidence suggests that the workforce was not comprised of enslaved individuals, as previously popularized by ancient historians, but rather a highly organized hierarchy of skilled laborers who were compensated with rations of bread, beer, and tax exemptions.",
      question: "What three forms of compensation did the skilled pyramid laborers receive?",
      answer: "bread, beer, and tax exemptions"
    },
    {
      topic: "Marine Biology",
      passage: "Hydrothermal vents found along ocean ridges support unique ecosystems entirely independent of sunlight. Instead of utilizing photosynthesis, deep-sea bacteria rely on chemosynthesis, converting toxic hydrogen sulfide gas streaming out of the Earth's crust into organic energy that sustains complex food webs.",
      question: "What specific biochemical process do deep-sea bacteria use instead of photosynthesis?",
      answer: "chemosynthesis"
    },
    {
      topic: "Cognitive Psychology",
      passage: "Neuroplasticity refers to the human brain's ability to reorganize itself by forming new neural connections throughout life. While highly pronounced during childhood development, structural alterations in gray matter density have been observed in mature adults acquiring complex motor talents, such as juggling or learning a new language.",
      question: "What term describes the brain's capacity to structurally reorganize its neural connections?",
      answer: "neuroplasticity"
    },
    {
      topic: "Space Exploration",
      passage: "NASA's Artemis program aims to establish a sustainable human presence on the lunar surface by the end of the decade. A foundational element of this long-term mission is the Lunar Gateway, a small spaceship orbiting the Moon that will serve as a communication hub, science laboratory, and short-term habitation module for astronauts.",
      question: "What orbital spaceship will act as a communication hub and laboratory for the Artemis missions?",
      answer: "lunar gateway"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  
  const [stats, setStats] = useState({ correct: 0, wrong: 0 });
  const [errorLog, setErrorLog] = useState([]);

  const currentModule = READING_EXAM[currentIndex];

  const handleReadPassage = () => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel(); 
      const utterance = new SpeechSynthesisUtterance(currentModule.passage);
      utterance.lang = 'en-GB'; 
      utterance.rate = 0.9;     
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleVerifyAnswer = (e) => {
    e.preventDefault();
    if (!userAnswer.trim()) return;

    const cleanUser = userAnswer.trim().toLowerCase();
    const cleanCorrect = currentModule.answer.toLowerCase();

    if (cleanUser === cleanCorrect || cleanUser.includes(cleanCorrect)) {
      setFeedback("Excellent! Your comprehension matches the passage parameters. 🟢");
      setIsCorrect(true);
      setStats(prev => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      setFeedback(`Incorrect 🔴. Expected phrase framework: "${currentModule.answer}"`);
      setIsCorrect(false);
      setStats(prev => ({ ...prev, wrong: prev.wrong + 1 }));
      setErrorLog(prev => [...prev, {
        question: currentModule.question,
        yourAnswer: userAnswer.trim(),
        correctAnswer: currentModule.answer
      }]);
    }
  };

  const handleNextSection = () => {
    setUserAnswer("");
    setFeedback("");
    setIsCorrect(null);
    setCurrentIndex((prev) => (prev + 1) % READING_EXAM.length);
  };

  return (
    <div style={{
      fontFamily: 'Segoe UI, Roboto, Helvetica, Arial, sans-serif',
      maxWidth: '650px',
      margin: '40px auto',
      padding: '25px',
      borderRadius: '12px',
      background: '#ffffff',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      color: '#333'
    }}>
      <div style={{ borderBottom: '2px solid #eef2f5', paddingBottom: '15px', marginBottom: '20px' }}>
        <span style={{ fontSize: '11px', background: '#e0f2fe', color: '#0369a1', padding: '4px 8px', borderRadius: '4px', fontWeight: 'bold', textTransform: 'uppercase' }}>
          IELTS Academic Prep
        </span>
        <h2 style={{ margin: '8px 0 4px 0', color: '#0f172a' }}>📖 High-Tier Reading Sandbox</h2>
        <p style={{ margin: '0', fontSize: '14px', color: '#64748b' }}>Analyze textual constraints, extract precise phrases, and audit errors.</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc', padding: '12px 16px', borderRadius: '8px', marginBottom: '20px', fontSize: '14px' }}>
        <div>Passage: <strong>{currentIndex + 1} of {READING_EXAM.length}</strong></div>
        <div style={{ display: 'flex', gap: '15px' }}>
          <span style={{ color: '#16a34a' }}>🟢 Correct: <strong>{stats.correct}</strong></span>
          <span style={{ color: '#dc2626' }}>🔴 Flagged: <strong>{stats.wrong}</strong></span>
        </div>
      </div>

      <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <h4 style={{ margin: '0', color: '#2563eb' }}>Topic: {currentModule.topic}</h4>
          <button 
            type="button" 
            onClick={handleReadPassage}
            style={{ padding: '6px 12px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: '500' }}
          >
            🔊 Read Passage Aloud
          </button>
        </div>
        
        <p style={{ lineHeight: '1.6', color: '#334155', background: '#f8fafc', padding: '15px', borderRadius: '6px', fontStyle: 'italic', borderLeft: '4px solid #cbd5e1' }}>
          "{currentModule.passage}"
        </p>

        <label style={{ display: 'block', fontWeight: '600', marginTop: '20px', marginBottom: '8px', color: '#0f172a' }}>
          ❓ Question: {currentModule.question}
        </label>

        <form onSubmit={handleVerifyAnswer}>
          <input 
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            disabled={isCorrect !== null}
            placeholder="Extract or type your answer from the text context..."
            style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e1', boxSizing: 'border-box', marginBottom: '12px', fontSize: '14px' }}
          />
          
          {isCorrect === null ? (
            <button type="submit" style={{ width: '100%', padding: '12px', background: '#16a34a', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px' }}>
              Submit Answer Verification
            </button>
          ) : (
            <button type="button" onClick={handleNextSection} style={{ width: '100%', padding: '12px', background: '#475569', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px' }}>
              Advance to Next Passage ➡️
            </button>
          )}
        </form>
      </div>

      {feedback && (
        <div style={{
          padding: '15px',
          borderRadius: '8px',
          background: isCorrect ? '#f0fdf4' : '#fef2f2',
          borderLeft: `5px solid ${isCorrect ? '#16a34a' : '#dc2626'}`,
          color: isCorrect ? '#14532d' : '#7f1d1d',
          marginBottom: '20px',
          fontWeight: '500'
        }}>
          {feedback}
        </div>
      )}

      {errorLog.length > 0 && (
        <div style={{ marginTop: '30px', padding: '20px', background: '#fff5f5', border: '1px solid #feb2b2', borderRadius: '8px' }}>
          <h4 style={{ margin: '0 0 12px 0', color: '#9b1c1c' }}>🔍 Real-time Error Audit Log ({errorLog.length})</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {errorLog.map((log, index) => (
              <div key={index} style={{ background: '#fff', padding: '12px', borderRadius: '6px', border: '1px solid #fecaca', fontSize: '13px' }}>
                <div style={{ fontWeight: 'bold', color: '#4a5568' }}>Q: {log.question}</div>
                <div style={{ color: '#dc2626', marginTop: '4px' }}>❌ Your Input: "{log.yourAnswer}"</div>
                <div style={{ color: '#16a34a', fontWeight: '500' }}>🟢 Key Text Answer: "{log.correctAnswer}"</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
