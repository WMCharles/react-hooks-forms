import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [newsLetter, setNewsLetter] = useState(true)

  function handleFirstNameChange(e){
    setFirstName(e.target.value)
  }
  function handleLastNameChange(e){
    setLastName(e.target.value)
  }

  function handleNewsLetterChange(event){
    setNewsLetter(event.target.checked)
  }

  function handleSubmit(){
    console.log(`Welcome ${firstName} ${lastName}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <label htmlFor="newsletter">Subscribe to our Bullshit</label>
      <input 
        type="checkbox" 
        id="newsletter" 
        onChange={handleNewsLetterChange}
        checked = {newsLetter}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
