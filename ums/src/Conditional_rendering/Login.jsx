import { useState } from "react";

function Login(){

    const [isLoggedIn, setIsLoggedIn] = useState(true);
    let content;

    if(isLoggedIn) {
        content = <h1>Login Successful!</h1>
    }else{
        content = <h1>Please Login</h1>
    }

    return(
        <>
        {content}
        </>
    )
}
export default Login;