import React, { useContext } from 'react';
import Login from './components/Login';
import { AuthContext, AuthProvider } from './context/AuthContext';
import MilestoneTracker from './components/MilestoneTracker';
import HabitSandbox from './components/HabitSandbox';
import IeltSpellingSandbox from './components/IeltSpellingSandbox';

function MainApplication() {
  // Fixed: Extracted 'logout' instead of 'login' since App needs to clear sessions
  const { user, logout } = useContext(AuthContext);
  
  if (!user) return <Login />;
   const newarr = [2,3,4,5]
  
  return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif' }}>
      <h2>The Tracker System</h2>
      {/* Fixed 1: Targeted the specific string key .name to prevent an object render crash */}
      <p>Welcome back, <strong>{user.name}</strong>!</p>
      <p>Role Designation: {user.role}</p>
      
      <button 
        onClick={logout}
        style={{ padding: '6px 12px', background: 'red', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '4px' }}
      >
       
        Log Out
      </button>
       <MilestoneTracker/>
       <HabitSandbox/>
       <IeltSpellingSandbox/>
    </div>
  );
}

export default function App() {
  return (
    // Fixed 2: Wrapped the switchboard inside the AuthProvider tower cloud envelope
    <AuthProvider>
      <MainApplication />
    </AuthProvider>
  );
}
