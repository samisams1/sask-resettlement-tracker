import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Login() {
 const {login} = useContext(AuthContext);
  const [typedName,setTypedName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
   if(typedName.trim() === ""){
      alert("Please enter your name") 
      return
      
   }
   login(typedName); 
  };
 return(
 <div style={{ padding: '40px', maxWidth: '300px', margin: '50px auto', border: '1px solid #ccc', borderRadius: '8px', fontFamily: 'sans-serif' }}>
      <h4 style={{ textAlign: 'center', color: '#007bff' }}>Login Form</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Enter your name'
          value={typedName}
          onChange={(e) => setTypedName(e.target.value)}
          style={{ padding: '8px', width: '100%', marginBottom: '10px', boxSizing: 'border-box' }}
        />
        {/* Fixed 2 & 3: Moved the button inside the form and fixed the spelling */}
        <button type="submit" style={{ width: '100%', padding: '10px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
    </div>
 );

}