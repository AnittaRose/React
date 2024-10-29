import { useRef, useState } from "react";

function UnControlledComponents() {
    const inputRef = useRef(null);

    const handleButtonClick = () => {
        alert(`Input value : ${inputRef.current.value}`);
    }

    return(
        <>
        <input type="text" ref={inputRef} />
        <button onClick={handleButtonClick}>Get Input Value</button>
        </>
    )
 }
 export default UnControlledComponents;