import React, { useState } from 'react';

export default function HabitSandbox() {
  const [habits, setHabits] = useState([
    { id: 1, name: "English Technical Reading", streak: 5 },
    { id: 2, name: "LeetCode Algorithmic Coding", streak: 3 },
    { id: 3, name: "Sobriety & Mental Health Focus", streak: 20 }
  ]);

  // Fixed 1: Implemented clean immutable numeric increment mapping logic
  const handleIncrementStreak = (targetId) => {
    const updatedHabits = habits.map((habit) => 
      habit.id === targetId 
        ? { ...habit, streak: habit.streak + 1 } 
        : habit
    );
    setHabits(updatedHabits);
  };

  // Fixed 3: Corrected state setting process outside of loop scopes
  const handleResetStreak = (targetId) => {
    const updatedHabits = habits.map((habit) => 
      habit.id === targetId 
        ? { ...habit, streak: 0 } 
        : habit
    );
    setHabits(updatedHabits);
  };

  return (
    <div style={{ marginTop: '30px', padding: '20px', background: '#fff', borderRadius: '8px', border: '1px solid #eee' }}>
      <h3>🧠 Resettlement Habit Sandbox (Streak Tracker)</h3>
      <p style={{ fontSize: '14px', color: '#666' }}>Build consistency every day to prepare for your tech role in Saskatchewan.</p>
      
      <div style={{ marginTop: '15px' }}>
        {habits.map((item) => (
          <div key={item.id} style={{ 
            background: '#f8f9fa', padding: '15px', margin: '10px 0', 
            borderRadius: '6px', borderLeft: '5px solid #007bff',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center' 
          }}>
            <div>
              <strong style={{ fontSize: '16px' }}>{item.name}</strong>
              <div style={{ color: '#28a745', marginTop: '4px' }}>🔥 Current Streak: <strong>{item.streak} Days</strong></div>
            </div>
            
            <div>
              <button 
                onClick={() => handleIncrementStreak(item.id)}
                style={{ padding: '6px 12px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '10px' }}
              >
                + Log Progress
              </button>
              <button 
                onClick={() => handleResetStreak(item.id)}
                style={{ padding: '6px 12px', background: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                Reset
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
