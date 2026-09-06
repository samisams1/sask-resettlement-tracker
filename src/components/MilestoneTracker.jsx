import React, { useState } from 'react';

export default function MilestoneTracker() {
  // 1. Initialize local array state with default Saskatchewan immigration steps
  const [milestones, setMilestones] = useState([
    { id: 1, name: "IELTS Academic Exam", status: "Pending" },
    { id: 2, name: "WES Credential Assessment", status: "Pending" },
    { id: 3, name: "Saskatchewan Expression of Interest", status: "Pending" }
  ]);

  // Local state to track the text box input for a new milestone
  const [newInput, setNewInput] = useState("");

  // FUNCTION A: Toggle status from "Pending" to "Approved"
  const handleToggleStatus = (targetId) => {
 const updatedMilestones = milestones.map((item) => {
      if (item.id === targetId) {
        return { ...item, status: "Approved" };
      }
      return item;
    });
    setMilestones(updatedMilestones);

    // 🎯 CHALLENGE 1: 
    // Use milestones.map() to check each item. 
    // If item.id === targetId, copy the object using ... and change status to "Approved".
    // Save the resulting new array to state using setMilestones.
  };

  // FUNCTION B: Add a brand new milestone to the end of the array list
 const handleCreateMilestone = (e) => {
  e.preventDefault();
  if (newInput.trim() === "") return;
  
  const newMileStone = {
    id: Date.now(),
    name: newInput,
    status: "Pending"
  };
  
  setMilestones([...milestones, newMileStone]);
  setNewInput(""); // 🚀 Fixed: Clears out the form text field input immediately!
};
const handleDeleteMilestone =(targetId)=>{
  const newMilestones = milestones.filter((item) => item.id !== targetId);
  setMilestones(newMilestones);
}

  return (
    <div style={{ marginTop: '30px', padding: '20px', background: '#fff', borderRadius: '8px', border: '1px solid #eee' }}>
      <h3>🇨🇦 Saskatchewan Immigration Milestone Tracker</h3>
      
      {/* Controlled Input Form to Create New Milestones */}
      <form onSubmit={handleCreateMilestone} style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Enter custom milestone (e.g. Medicals)..."
          value={newInput}
          onChange={(e) => setNewInput(e.target.value)}
          style={{ padding: '8px', width: '250px', marginRight: '10px' }}
        />
        <button type="submit" style={{ padding: '8px 12px', background: '#28a745', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '4px' }}>
          Add Milestone
        </button>
      </form>

      {/* Render the lists */}
      <ul style={{ paddingLeft: '0' }}>
        {milestones.map((item) => (
          <li key={item.id} style={{ 
            listStyleType: 'none', 
            background: item.status === 'Approved' ? '#e6f4ea' : '#fff3cd',
            padding: '12px', margin: '10px 0', borderRadius: '4px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            borderLeft: item.status === 'Approved' ? '5px solid green' : '5px solid orange'
          }}>
            <span><strong>📄 {item.name}</strong> — <em>{item.status}</em></span>
            
            <button 
              onClick={() => handleToggleStatus(item.id)}
              disabled={item.status === 'Approved'}
              style={{ padding: '4px 8px', cursor: item.status === 'Approved' ? 'not-allowed' : 'pointer' }}
            >
              Approve Step
            </button>
            <button onClick={()=>handleDeleteMilestone(item.id)}
              style={{ padding: '4px 8px', marginLeft: '10px', background: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}  
                >Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
