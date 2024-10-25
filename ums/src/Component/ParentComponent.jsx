import { useState } from "react";
import DisplayComponent from "./DisplayComponent";
import FormComponent from "./FormComponent";


export default function ParentComponent() {
    console.log("Parent Component Rendering");

    const [dataToDisplay, setDataToDisplay] = useState(" ");

    const handlesubmit = (data) => {
        setDataToDisplay(data);
    }
    return (
        <>
        <FormComponent onSubmit={handlesubmit}/>
        <DisplayComponent displayData={dataToDisplay}/>
        </>
    )
}