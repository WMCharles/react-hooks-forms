import React from "react";

function Form(props) {
  return (
    <form>
      <input
        type="text"
        onChange={props.handleFirstNameChange}
        value={props.firstName}
      />

      <input
        type="text"
        onChange={props.handleLastNameChange}
        value={props.lastName}
      />
      <label htmlFor="checkbox">Subscribe To Our Bullshit</label>
      <input type="checkbox" value={props.newsLetter} onChange={props.handleNewsLetterChange}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;