import React, { useState } from 'react'
import Form from './Form';
import DisplayData from './DisplayData';

export default function ParentComponent() {

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

    return (
       <div>
            <DisplayData firstName={firstName} lastName={lastName}/>
            <Form
                firstName={firstName}
                lastName={lastName}
                newsLetter={newsLetter}
                handleFirstNameChange={handleFirstNameChange}
                handleLastNameChange={handleLastNameChange}
                handleNewsLetterChange={handleNewsLetterChange}
            />
       </div>
    )
}
