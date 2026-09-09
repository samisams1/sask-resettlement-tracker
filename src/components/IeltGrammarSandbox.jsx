import React, { useState } from 'react';

const GRAMMAR_DATABASE = [
  {
    id: 1,
    category: "Subject-Verb Agreement",
    brokenSentence: "Every passenger must wears a seatbelt during the flight.",
    correctSentence: "Every passenger must wear a seatbelt during the flight.",
    hint: "Look closely at the modal verb 'must'. What form should follow it?",
    explanation: "After modal verbs (must, should, can, will), always use the base form of the verb without 's' or 'to'."
  },
  {
    id: 2,
    category: "Countable vs Uncountable",
    brokenSentence: "The government needs to provide more advices to small businesses.",
    correctSentence: "The government needs to provide more advice to small businesses.",
    hint: "Is the word 'advice' countable or uncountable?",
    explanation: "'Advice' is an uncountable noun in English. It can never be pluralized with an 's'. Use 'pieces of advice' if you need to count it."
  },
  {
    id: 3,
    category: "Relative Clauses",
    brokenSentence: "The city requires infrastructure investments which it can reduce commuter times.",
    correctSentence: "The city requires infrastructure investments which can reduce commuter times.",
    hint: "Check the relative pronoun 'which'. Is the pronoun 'it' repeating the subject?",
    explanation: "When using 'which' or 'that' as a subject relative pronoun, do not include a duplicate subject pronoun like 'it' right after it."
  }
];

export default function IeltGrammarSandbox() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [showHint, setShowHint] = useState(false);

  const currentItem = GRAMMAR_DATABASE[currentIndex];

  const handleCheck = () => {
    // Normalize spaces and compare strings exactly
    const cleanInput = userInput.trim().replace(/\s+/g, ' ');
    if (cleanInput.toLowerCase() === currentItem.correctSentence.toLowerCase()) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleNext = () => {
    setIsCorrect(null);
    setShowHint(false);
    setUserInput("");
    setCurrentIndex((prev) => (prev + 1) % GRAMMAR_DATABASE.length);
  };

  return (
    <div style={containerStyle}>
      <span style={badgeStyle}>{currentItem.category}</span>
      <h2>IELTS Grammar Sandbox</h2>
      
      <div style={boxStyle}>
        <p style={{ color: '#dc3545', fontWeight: 'bold' }}>❌ Incorrect Sentence:</p>
        <p style={{ fontSize: '1.1rem', fontStyle: 'italic' }}>"{currentItem.brokenSentence}"</p>
      </div>

      <div style={{ margin: '20px 0' }}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
          Rewrite the sentence correctly below:
        </label>
        <textarea
          style={textareaStyle}
          rows="3"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type the corrected sentence here..."
        />
      </div>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button onClick={handleCheck} style={btnCheckStyle}>Check Answer</button>
        <button onClick={() => setShowHint(!showHint)} style={btnHintStyle}>
          {showHint ? "Hide Hint" : "Show Hint"}
        </button>
        {isCorrect && <button onClick={handleNext} style={btnNextStyle}>Next Sentence ➡️</button>}
      </div>

      {showHint && !isCorrect && (
        <div style={{ ...boxStyle, backgroundColor: '#fff3cd', borderColor: '#ffeeba' }}>
          <p>💡 <strong>Hint:</strong> {currentItem.hint}</p>
        </div>
      )}

      {isCorrect === true && (
        <div style={{ ...boxStyle, backgroundColor: '#d4edda', borderColor: '#c3e6cb' }}>
          <p style={{ color: '#155724', fontWeight: 'bold' }}>🎉 Correct!</p>
          <p><strong>Rule:</strong> {currentItem.explanation}</p>
        </div>
      )}

      {isCorrect === false && (
        <div style={{ ...boxStyle, backgroundColor: '#f8d7da', borderColor: '#f5c6cb' }}>
          <p style={{ color: '#721c24', fontWeight: 'bold' }}>❌ Not quite right yet.</p>
          <p>Keep trying! Double-check spelling, spaces, punctuation, and structural forms.</p>
        </div>
      )}
    </div>
  );
}

// Minimal inline styles for quick previewing
const containerStyle = { maxWidth: '600px', margin: '20px auto', padding: '20px', fontFamily: 'sans-serif', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' };
const badgeStyle = { backgroundColor: '#007bff', color: '#fff', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' };
const boxStyle = { padding: '15px', border: '1px solid #ddd', borderRadius: '6px', backgroundColor: '#f9f9f9', margin: '15px 0' };
const textareaStyle = { width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' };
const btnCheckStyle = { backgroundColor: '#28a745', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '4px', cursor: 'pointer' };
const btnHintStyle = { backgroundColor: '#17a2b8', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '4px', cursor: 'pointer' };
const btnNextStyle = { backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '4px', cursor: 'pointer' };
