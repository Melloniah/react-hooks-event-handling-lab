// Code Keypad Component Here
import React from "react";
function Keypad (){

    const handleChange =() => {
        console.log('Entering password...');
    }
    return (
        <div>
            <input onChange ={handleChange } type="password" />;
           
        </div>
    )
}

export default Keypad;