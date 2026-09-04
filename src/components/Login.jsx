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
  <div>
 <h4>Login Form</h4>
<form onSubmit={handleSubmit}>
<input
type = "text"
placeholder='Enter your name'
value={typedName}
onChange={(e)=>setTypedName(e.target.value)}
/>
</form>
  <buutton>Submit</buutton>
  </div>
 )

}