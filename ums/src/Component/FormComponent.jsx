import { useState } from "react";


export default function FormComponent({onSubmit}) {
    console.log("Form Component Rendering.....");

    const [inputData, setInputData] = useState({
        name : '',
        email : '',
        place : '',
        pincode:'',
    });

    const handleInputChange = (e) => {
        console.log("value : ", e.target.value);

            if(e.target.name === "name"){
            console.log("name : ",e.target.value)

            setInputData({
                ...inputData,
                name : e.target.value,
            });
            }

            if(e.target.name === "email"){
            console.log("email : ", e.target.value);

            setInputData({
                ...inputData,
                email : e.target.value,
            })
            }

            if(e.target.name === "place"){
            console.log("place : ", e.target.value);

            setInputData({
                ...inputData,
                place : e.target.value,
            })
            }

            if(e.target.name === "pincode"){
            console.log("pincode : ", e.target.value);

            setInputData({
                ...inputData,
                pincode : e.target.value,
            })
            }

    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("From submitted...");

        onSubmit(inputData);
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" onChange={handleInputChange} placeholder="Enter Your Name"/>
            <input type="text" name="email" onChange={handleInputChange} placeholder="Enter Your Email"/>
            <input type="text" name="place" onChange={handleInputChange} placeholder="Enter Your Place"/>
            <input type="text" name="pincode" onChange={handleInputChange} placeholder="Enter Your Pincode"/>
            <button type="Submit">Submit</button>
        </form>
        </>
    )
}