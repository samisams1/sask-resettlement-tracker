import React, { useState } from 'react';

export default function IeltSpellingSandbox() {
 
    const DICTIONARY = [
  


 
  { word: "itinerary", meaning: "A planned route or journey details.", example: "The travel agency provided us with a detailed holiday itinerary." },
  
  { word: "restaurant", meaning: "A place where people pay to sit and eat meals.", example: "We booked a table at a local seafood restaurant near the harbor." },
  { word: "souvenir", meaning: "A thing that is kept as a reminder of a person, place, or event.", example: "I bought a small traditional craft item as a souvenir from my trip." },
  { word: "scenery", meaning: "The natural features of a landscape considered in terms of appearance.", example: "The train journey offers passengers views of beautiful mountain scenery." },
  
  // 🏢 Workplace & Professional Settings
  { word: "business", meaning: "The practice of making one's living by engaging in commerce.", example: "She decided to study international business management." },
  { word: "colleague", meaning: "A person with whom one works in a profession or business.", example: "My colleague helped me finish the project ahead of the deadline." },
  { word: "committee", meaning: "A group of people appointed for a specific function by a larger body.", example: "The research committee will review the proposal next week." },
  { word: "professional", meaning: "Relating to or belonging to a profession; highly competent.", example: "Always maintain a professional attitude during your internship." },
  { word: "success", meaning: "The accomplishment of an aim or purpose.", example: "Hard work and consistency are the keys to academic success." },
  { word: "permanent", meaning: "Lasting or intended to last or remain unchanged indefinitely.", example: "He is looking for a permanent job after graduation." },
  { word: "recommend", meaning: "Advise or suggest something as a good choice.", example: "Can you recommend a good book for this course?" },
  { word: "disappoint", meaning: "Fail to fulfill the hopes or expectations of someone.", example: "I did not want to disappoint my mentor with poor results." },
  { word: "necessary", meaning: "Required to be done, achieved, or present; essential.", example: "It is necessary to bring your ID to the examination hall." },
  { word: "autumn", meaning: "The season after summer and before winter.", example: "The campus leaves turn beautiful shades of red and gold in autumn." },
  { word: "tomorrow", meaning: "On the day after today.", example: "The assignment deadline has been extended until tomorrow afternoon." },
  { word: "calendar", meaning: "A chart showing the days, weeks, and months of a year.", example: "Please check the academic calendar for upcoming holiday dates." },
  { word: "millennium", meaning: "A period of a thousand years.", example: "The historic building was constructed just before the turn of the millennium." },
  { word: "schedule", meaning: "A plan for carrying out a process, index, or procedure.", example: "You can download your exam schedule from the student portal." },
  { word: "until", meaning: "Up to the time that or when.", example: "The library will remain open until midnight during finals week." },

  // 🧳 Category 11: Transportation & Leisure Common Targets
  { word: "pedestrian", sentence: "The local council plans to build a new pedestrian crossing near the school." },
  { word: "passenger", sentence: "Every passenger must wear a seatbelt throughout the duration of the flight." },
  { word: "itinerary", sentence: "The travel agency provided us with a detailed holiday itinerary." },
  { word: "destination", sentence: "The coastal town is a highly popular summer holiday destination." },
  { word: "restaurant", sentence: "We booked a table at a local seafood restaurant near the harbor." },
  { word: "souvenir", sentence: "I bought a small traditional craft item as a souvenir from my trip." },
  { word: "scenery", sentence: "The train journey offers passengers views of beautiful mountain scenery." },
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
  { word: "analyze", sentence: "The software tools allow researchers to analyze complex data sets easily." },
   
  
  
  
  
  
  { word: "pardon me", sentence: "a polite phrase used to apologize for a minor mistake, ask someone to repeat what they said, or grab attention" },
  { word: "embarrassment", sentence: "The technical glitch during the presentation caused great embarrassment." },
  { word: "occurrence", sentence: "Heavy rainfall is a frequent occurrence in tropical rain forests." },
  { word: "exaggerate", sentence: "Media outlets sometimes exaggerate news headlines to attract viewers." },
  { word: "apparent", sentence: "The benefits of the new system became apparent within a few weeks." },
  { word: "millennium", sentence: "The ancient ruins date back to the beginning of the first millennium." },
  { word: "possession", sentence: "Please ensure you have all your personal possession items before leaving." },
  { word: "harass", sentence: "The company policy states that no employee should harass a colleague." },

  // 🧩 Category 8: Advanced Vowel & Complex Clusters
  { word: "fluorescent", sentence: "The laboratory was illuminated by bright fluorescent lighting panels." },
  { word: "questionnaire", sentence: "Participants were asked to complete a demographic questionnaire first." },
  { word: "hierarchy", sentence: "There is a strict corporate hierarchy within the organization." },
   { word: "bureaucracy", sentence: "Excessive government bureaucracy can slow down economic development." },
  { word: "leisure", sentence: "The community center offers excellent sports and leisure facilities." },
  { word: "foreign", sentence: "Studying abroad allows you to experience a foreign culture firsthand." },
    { word: "catalogue", sentence: "You can find a complete list of reference books in the library catalogue." },

  // 🎓 Category 9: Core Academic Fields & Subjects
    // 🏢 Category 1: Work & Everyday Life
  { word: "architecture", sentence: "She decided to pursue a degree in sustainable urban architecture." },
  { word: "psychology", sentence: "Our next module explores the basic principles of cognitive psychology." },
  { word: "accounting", sentence: "The business administration program includes a compulsory module on accounting." },
  { word: "sociology", sentence: "The sociology lecture examined modern family structures in urban settings." },

  { word: "archaeology", sentence: "The team discovered ancient pottery artifacts during the archaeology dig." },
  { word: "philosophy", sentence: "He likes reading books about classical Greek philosophy and ethics." },


  // 🚀 Category 10: High-Frequency Writing Task 2 Data & Synonyms
  { word: "deteriorate", sentence: "Air quality in the metropolitan area will continue to deteriorate." },
  { word: "predominantly", sentence: "The island's local economy relies predominantly on international tourism." },
  { word: "demonstrate", sentence: "The latest research findings clearly demonstrate a link between the variables." },
  { word: "significant", sentence: "The data shows a significant increase in renewable energy adoption." },
  { word: "beneficial", sentence: "Implementing strict waste management laws is beneficial to ecosystems." },
  { word: "consequence", sentence: "Rising sea levels are a direct consequence of global warming." },
  { word: "infrastructure", sentence: "The city requires massive investments to modernize its public transit infrastructure." },

       { word: "sunday", meaning: "The first day of the week, traditionally a day of rest.", example: "We always go for a family walk on Sunday." },
  { word: "monday", meaning: "The second day of the week, marking the start of the workweek.", example: "I always set my goals for the week on Monday morning." },
  { word: "tuesday", meaning: "The third day of the week.", example: "Our team meeting is scheduled for Tuesday afternoon." },
  { word: "wednesday", meaning: "The fourth day of the week, often called midweek.", example: "Our weekly group tutorial takes place every Wednesday morning." },
  { word: "thursday", meaning: "The fifth day of the week.", example: "The local market is open every Thursday." },
  { word: "friday", meaning: "The sixth day of the week, preceding the weekend.", example: "Many employees dress casually on Friday." },
  { word: "saturday", meaning: "The seventh day of the week, part of the weekend.", example: "Saturday is typically a busy shopping day for families." },
  // 📅 Months of the Year
  { word: "january", meaning: "The first month of the year.", example: "The winter term begins in early January." },
  { word: "february", meaning: "The second month of the year.", example: "The second term of the academic year begins in February." },
  { word: "march", meaning: "The third month of the year.", example: "Spring flowers begin to bloom in March." },
  { word: "april", meaning: "The fourth month of the year.", example: "Tax returns must be filed before the end of April." },
  { word: "may", meaning: "The fifth month of the year.", example: "The university holds graduation ceremonies in May." },
  { word: "june", meaning: "The sixth month of the year.", example: "Summer break officially starts in June." },
  { word: "july", meaning: "The seventh month of the year.", example: "The hottest days of summer usually occur in July." },
  { word: "august", meaning: "The eighth month of the year.", example: "The campus is quiet during August as classes are out." },
  { word: "september", meaning: "The ninth month of the year.", example: "The new academic calendar begins in September." },
  { word: "october", meaning: "The tenth month of the year.", example: "Autumn leaves carpet the university campus in October." },
  { word: "november", meaning: "The eleventh month of the year.", example: "The final exams are scheduled for mid-November." },
  { word: "december", meaning: "The twelfth and final month of the year.", example: "The university closes for winter holidays in December." },
  // 🗣️ Everyday Words & Connectors
  { word: "everyone", meaning: "Every person; all people.", example: "Everyone must register before entering the exam hall." },
  { word: "because", meaning: "For the reason that; since.", example: "The trip was delayed because the weather turned severe." },
  { word: "although", meaning: "Even though; in spite of the fact that.", example: "Although she studied hard, the exam was quite challenging." },
  { word: "however", meaning: "But; nevertheless; on the other hand.", example: "The system is efficient; however, it requires regular maintenance." },
  { word: "therefore", meaning: "As a result of something; consequently.", example: "The data was corrupted; therefore, the analysis had to be restarted." },
  { word: "furthermore", meaning: "In addition; besides (used to introduce fresh arguments).", example: "The study is cost-effective; furthermore, it offers rapid results." },
  { word: "meanwhile", meaning: "In the intervening period of time; at the same time.", example: "The professor reviewed the reports; meanwhile, the students took a break." },

  // 🛠️ Modals
  { word: "can", meaning: "Be able to or permitted to.", example: "Students can access the library database from home." },
  { word: "could", meaning: "Used to express possibility, past ability, or polite requests.", example: "Could you provide a detailed receipt for the tuition payment?" },
  { word: "may", meaning: "Used to express possibility or ask for permission.", example: "You may submit your thesis electronically or via hard copy." },
  { word: "might", meaning: "Used to express a tentative or smaller possibility.", example: "The flight might be delayed due to heavy snowfall." },
  { word: "must", meaning: "Be obliged to; should logically be or happen.", example: "Every passenger must wear a seatbelt during takeoff." },
  { word: "shall", meaning: "Used to express a future plan, intention, or formal requirement.", example: "The committee shall convene every three months." },
  { word: "should", meaning: "Used to indicate obligation, duty, or correctness.", example: "You should check the academic schedule before booking your trip." },
  { word: "will", meaning: "Expressing inevitable future facts or strong determination.", example: "The local government will fund the new environmental research project." },
  { word: "would", meaning: "Used to indicate a hypothetical scenario or habitual past action.", example: "He would always review his notes right before a presentation." },
 // 🧳 Transportation, Travel & Leisure
  { word: "pedestrian", meaning: "A person walking rather than travelling in a vehicle.", example: "The local council plans to build a new pedestrian crossing near the school." },
  { word: "passenger", meaning: "A traveler on a public or private conveyance other than the driver.", example: "Every passenger must wear a seatbelt throughout the duration of the flight." },
{ word: "accommodation", meaning: "A room, group of rooms, or building in which someone may live or stay.", example: "The university provides affordable student accommodation on campus." },
  { word: "destination", meaning: "The place to which someone or something is going.", example: "The coastal town is a highly popular summer holiday destination." },
];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userGuess, setUserGuess] = useState("");
  const [result, setResult] = useState(""); 
  
  // Fixed 3: Capitalized setter naming to match standard clean code standards
  const [correctScore, setCorrectScore] = useState(0);
  const [inCorrectScore, setIncorrectScore] = useState(0);
  const [storeIncorrect,setStoreIncorrect] = useState([{}]);

  const handleVoiceSpeak = () => {
    const targetWord = DICTIONARY[currentIndex].word;
    const utterance = new SpeechSynthesisUtterance(targetWord);
    
    // Fixed 1: Standardized the region target to standard British accent layout
    utterance.lang = 'en-GB'; 
    utterance.rate = 0.7; 
    window.speechSynthesis.speak(utterance);
  };

  const handleCheckSpelling = (e) => {
    e.preventDefault();
    const correctWord = DICTIONARY[currentIndex].word;
    
    if (userGuess.trim().toLowerCase() === correctWord) {

      setResult("Correct 🟢"); 
      setStoreIncorrect([...storeIncorrect, correctWord]);
      
      // Fixed 2: Converted to dynamic functional parameter hooks loops
      setCorrectScore((prev) => prev + 1);
    } else {
      setResult(`Incorrect 🔴. The accurate spelling is: "${correctWord}"`);
      setIncorrectScore((prev) => prev + 1);
    }
  };

  const handleNextWord = () => {
    setUserGuess("");
    setResult("");
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
        
        <p style={{ width: '100%', padding: '10px', background: '#28a745', color: '#fff', border: 'none', marginTop: '10px' }}>
          Your correct score is: <strong>{correctScore}</strong>
        </p>
        <p style={{ width: '100%', padding: '10px', background: '#e93110', color: '#fff', border: 'none' }}>
          Your failed score is: <strong>{inCorrectScore}</strong>
        </p>
        <h5>Total Questions: {DICTIONARY.length}</h5>
      </form>

      {result && (
        <div style={{ marginTop: '15px', padding: '10px', background: '#f8f9fa', borderRadius: '4px', borderLeft: '5px solid #28a745', fontWeight: 'bold' }}>
          <p style={{ margin: '0 0 5px 0' }}>{result}</p>
          <p style={{ margin: '0', fontSize: '13px', color: '#555', fontWeight: 'normal' }}>
            <em>meaning: {DICTIONARY[currentIndex].meaning}</em>
            <p>example: {DICTIONARY[currentIndex].example}</p>
          </p>
        </div>
      )}
      <p>your incorrect word is the following</p>
      <p>
        {storeIncorrect.map((sincorect)=>{
            <p>{sincorect}</p>
        })}
      </p>
    </div>
  );
}


