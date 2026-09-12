import React, { useContext, useState } from 'react';
import Login from './components/Login';
import { AuthContext, AuthProvider } from './context/AuthContext';
import MilestoneTracker from './components/MilestoneTracker';
import HabitSandbox from './components/HabitSandbox';
import IeltSpellingSandbox from './components/IeltSpellingSandbox';
import IeltGrammarSandbox from './components/IeltGrammarSandbox';
import IeltsSpeakingSandbox from './components/IeltSpeakingExamInterview'; 
function MainApplication() {
  const { user, logout } = useContext(AuthContext);
  
  // Fixed 1: Updated default state string to plural 'milestones' to eliminate the empty load bug
  const [currentTab, setCurrentTab] = useState("milestones"); 

  if (!user) return <Login />;
  
  return (
    <div style={{ display: 'flex', padding: '30px', fontFamily: 'sans-serif', gap: '20px' }}>
      
      {/* Sidebar Control Column Layout Strip */}
      <aside style={{ width: '200px', background: '#eee', padding: '15px', borderRadius: '8px', height: 'fit-content' }}>
        <h4>📌 Control Menu</h4>
        <button onClick={() => setCurrentTab("milestones")} style={{ display: 'block', width: '100%', marginBottom: '10px', background: currentTab === "milestones" ? "#007bff" : "#fff", color: currentTab === "milestones" ? "#fff" : "#000", border: 'none', padding: '8px', borderRadius: '4px', cursor: 'pointer' }}>📋 Milestones</button>
        <button onClick={() => setCurrentTab("habits")} style={{ display: 'block', width: '100%', marginBottom: '10px', background: currentTab === "habits" ? "#007bff" : "#fff", color: currentTab === "habits" ? "#fff" : "#000", border: 'none', padding: '8px', borderRadius: '4px', cursor: 'pointer' }}>🧠 Habits</button>
        <button onClick={() => setCurrentTab("spelling")} style={{ display: 'block', width: '100%', marginBottom: '15px', background: currentTab === "spelling" ? "#007bff" : "#fff", color: currentTab === "spelling" ? "#fff" : "#000", border: 'none', padding: '8px', borderRadius: '4px', cursor: 'pointer' }}>🇬🇧 Spelling</button>
        <button onClick={() => setCurrentTab("grammer")} style={{ display: 'block', width: '100%', marginBottom: '15px', background: currentTab === "grammer" ? "#007bff" : "#fff", color: currentTab === "grammer" ? "#fff" : "#000", border: 'none', padding: '8px', borderRadius: '4px', cursor: 'pointer' }}>🇬🇧 Grammar</button>
        <button onClick={() => setCurrentTab("speaking")} style={{ display: 'block', width: '100%', marginBottom: '15px', background: currentTab === "speaking" ? "#007bff" : "#fff", color: currentTab === "speaking" ? "#fff" : "#000", border: 'none', padding: '8px', borderRadius: '4px', cursor: 'pointer' }}>🇬🇧 speaking</button>
        <button onClick={logout} style={{ width: '100%', background: 'red', color: '#fff', border: 'none', padding: '8px', borderRadius: '4px', cursor: 'pointer' }}>Log Out</button>
      </aside>

      {/* Main Feature Layout Screen Output Panel View */}
      <main style={{ flexGrow: 1, padding: '10px', background: '#fff', borderRadius: '8px', border: '1px solid #ddd' }}>
        <h2>Saskatchewan Portal Panel</h2>
        {currentTab === "milestones" && <MilestoneTracker />}
        {currentTab === "habits" && <HabitSandbox />}
        {currentTab === "spelling" && <IeltSpellingSandbox />} 
        {currentTab === "grammer" && <IeltGrammarSandbox />}
        {currentTab === "speaking" && <IeltsSpeakingSandbox />}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <MainApplication />
    </AuthProvider>
  );
}
