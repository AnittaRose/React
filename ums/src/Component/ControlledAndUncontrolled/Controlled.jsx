import { useState } from "react";


function ControlledComponent(){

    const [inputValue, setInputValue] =useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = () => {
        alert(`Input value : ${inputValue}`);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" id="name" onChange={handleChange} />
            <input type="submit" />
        </form>
        
        </>
    )
}

export default ControlledComponent;