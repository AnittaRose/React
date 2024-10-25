import {React, Component} from 'react';


function Greeting1(props){
    return(
        <>
            <h1>I am functional Component</h1>
            <p>place : {props.place}, pincode : {props.pincode}</p>
        </>
    )
}

export default Greeting1;