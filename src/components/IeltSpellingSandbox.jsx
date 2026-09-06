import React, { useState } from 'react';

export default function IeltSpellingSandbox() {
  // 1. The Global Spelling Dictionary dataset array
const DICTIONARY = [
  // 🏢 Category 1: Work & Everyday Life
  { word: "accommodation", sentence: "The university provides affordable student accommodation on campus." },
  { word: "business", sentence: "She decided to study international business management." },
  { word: "colleague", sentence: "My colleague helped me finish the project ahead of the deadline." },
  { word: "committee", sentence: "The research committee will review the proposal next week." },
  { word: "professional", sentence: "Always maintain a professional attitude during your internship." },
  { word: "success", sentence: "Hard work and consistency are the keys to academic success." },
  { word: "permanent", sentence: "He is looking for a permanent job after graduation." },
  { word: "recommend", sentence: "Can you recommend a good book for this course?" },
  { word: "disappoint", sentence: "I did not want to disappoint my mentor with poor results." },
  { word: "necessary", sentence: "It is necessary to bring your ID to the examination hall." },

  // 📆 Category 2: Time, Dates & Seasons
  { word: "wednesday", sentence: "Our weekly group tutorial takes place every Wednesday morning." },
  { word: "february", sentence: "The second term of the academic year begins in February." },
  { word: "autumn", sentence: "The campus leaves turn beautiful shades of red and gold in autumn." },
  { word: "tomorrow", sentence: "The assignment deadline has been extended until tomorrow afternoon." },
  { word: "calendar", sentence: "Please check the academic calendar for upcoming holiday dates." },
  { word: "millennium", sentence: "The historic building was constructed just before the turn of the millennium." },
  { word: "schedule", sentence: "You can download your exam schedule from the student portal." },
  { word: "until", sentence: "The library will remain open until midnight during finals week." },

  // 🛠️ Category 3: Hidden Silent Letters
  { word: "government", sentence: "The local government offers funding grants for innovative research." },
  { word: "environment", sentence: "We must take active steps to protect the natural environment." },
  { word: "knowledge", sentence: "Practical experience is just as valuable as theoretical knowledge." },
  { word: "foreign", sentence: "Learning a foreign language opens up global career opportunities." },
  { word: "queue", sentence: "There was a long queue of students waiting outside the admissions office." },
  { word: "rhythm", sentence: "The patient's heart rhythm was monitored closely during the study." },
  { word: "receipt", sentence: "Please retain your tuition fee receipt for your financial records." },

  // 🔄 Category 4: The Changing Word-Form Trap
  { word: "maintenance", sentence: "Routine laboratory equipment maintenance is scheduled for Friday." },
  { word: "argument", sentence: "Your essay needs a strong logical argument supported by evidence." },
  { word: "pronunciation", sentence: "Practicing with native speakers will rapidly improve your pronunciation." },
  { word: "beneficial", sentence: "Regular study breaks are highly beneficial for mental focus." },
  { word: "influential", sentence: "The professor published an influential paper on climate change economics." },
  { word: "difference", sentence: "There is a significant difference between the two statistical models." },

  // 🗣️ Category 5: Homophones
  { word: "their", sentence: "The students submitted their final research dissertations on time." },
  { word: "there", sentence: "Please place your completed exam papers over there on the desk." },
  { word: "stationary", sentence: "The traffic remained stationary for an hour due to the accident." },
  { word: "stationery", sentence: "The bookstore sells notebooks, pens, and other essential stationery." },
  { word: "weather", sentence: "The field trip was canceled due to severe weather conditions." },
  { word: "whether", sentence: "The committee has not decided whether to approve the budget." },
  { word: "accept", sentence: "You must accept the terms and conditions before enrolling." },
  { word: "except", sentence: "The museum is open every day except Monday." },
  { word: "affect", sentence: "Lack of sleep will negatively affect your exam performance." },
  { word: "effect", sentence: "The new policy had an immediate positive effect on student turnout." },
  { word: "loose", sentence: "The dynamic components of the machinery became loose over time." },
  { word: "lose", sentence: "Be careful not to lose your campus pass card." },
  { word: "piece", sentence: "Each student was asked to write a short piece of creative prose." },
  { word: "peace", sentence: "The quiet study lounge offers absolute peace and concentration." },
  { word: "too", sentence: "The lecture hall was far too crowded this morning." },
  { word: "to", sentence: "We are walking to the science laboratory for our next class." },

  // 🏫 Category 6: Education & Academic Settings
  { word: "questionnaire", sentence: "Please fill out the feedback questionnaire at the end of the seminar." },
  { word: "professor", sentence: "The history professor gave a fascinating lecture on ancient trade routes." },
  { word: "assessment", sentence: "Continuous classroom assessment accounts for forty percent of your final grade." },
  { word: "certificate", sentence: "You will receive a graduation certificate upon completing the course." },
  { word: "laboratory", sentence: "Safety goggles must be worn at all times inside the chemistry laboratory." },
  { word: "assignment", sentence: "The written assignment requires a minimum length of two thousand words." },
  { word: "discipline", sentence: "Mastering a new language requires a lot of personal discipline." },
  { word: "attendance", sentence: "A minimum attendance rate of eighty percent is mandatory." },
  { word: "literature", sentence: "You should complete the literature review before analyzing your data." },
  { word: "tutor", sentence: "If you are struggling with calculus, you can schedule a session with a tutor." },
  { word: "analyze", sentence: "The software tools allow researchers to analyze complex data sets easily." }
];


  // 2. Tracking states configuration tracking variables
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userGuess, setUserGuess] = useState("");
  const [result, setResult] = useState(""); // Can be "Correct", "Incorrect", or ""

  // FUNCTION A: Use the computer's voice engine to read the target word out loud
  const handleVoiceSpeak = () => {
    const targetWord = DICTIONARY[currentIndex].word;
    
    // Native Browser Speech System Engine call configuration logic
    const utterance = new SpeechSynthesisUtterance(targetWord);
    utterance.lang = 'en-US';
    utterance.rate = 0.8; // Spoken clearly and slightly slower for listening tracking
    window.speechSynthesis.speak(utterance);
  };

  // FUNCTION B: Check if your spelling matches the dictionary baseline keys
  const handleCheckSpelling = (e) => {
    e.preventDefault();
    const correctWord = DICTIONARY[currentIndex].word;
    
    if (userGuess.trim().toLowerCase() === correctWord) {
      setResult("Correct 🟢");
    } else {
      setResult(`Incorrect 🔴. The accurate spelling is: "${correctWord}"`);
    }
  };

  // FUNCTION C: Shift index markers down one step using the Next Button setup
  const handleNextWord = () => {
    setUserGuess("");
    setResult("");
    // Loop back around safely to index 0 if we hit the end of the dictionary list
    setCurrentIndex((prevIndex) => (prevIndex + 1) % DICTIONARY.length);
  };

  return (
    <div style={{ marginTop: '30px', padding: '20px', background: '#fff', borderRadius: '8px', border: '1px solid #eee', maxWidth: '450px' }}>
      <h3>🇬🇧 IELTS Technical Spelling Sandbox</h3>
      <p style={{ fontSize: '13px', color: '#666' }}>Master high-scoring vocabulary strings for your writing and listening bands.</p>

      <div style={{ margin: '20px 0', display: 'flex', gap: '10px' }}>
        <button onClick={handleVoiceSpeak} style={{ padding: '10px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          🔊 Read Voice Word
        </button>
        
        <button onClick={handleNextWord} style={{ padding: '10px', background: '#6c757d', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Next Word ➡️
        </button>
      </div>

      <form onSubmit={handleCheckSpelling}>
        <input 
          type="text"
          placeholder="Type the correct spelling here..."
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
          disabled={result !== ""}
          style={{ width: '100%', padding: '10px', boxSizing: 'border-box', marginBottom: '10px' }}
        />
        <button type="submit" disabled={result !== ""} style={{ width: '100%', padding: '10px', background: '#28a745', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Verify Spelling
        </button>
      </form>

      {/* Dynamic Results Display Section Box Grid */}
      {result && (
        <div style={{ marginTop: '15px', padding: '10px', background: '#f8f9fa', borderRadius: '4px', borderLeft: '5px solid #28a745', fontWeight: 'bold' }}>
          <p style={{ margin: '0 0 5px 0' }}>{result}</p>
          <p style={{ margin: '0', fontSize: '13px', color: '#555', fontWeight: 'normal' }}>
            <em>Context: {DICTIONARY[currentIndex].sentence}</em>
          </p>
        </div>
      )}
    </div>
  );
}
