import { useState } from "react";

function Counter1() {

    let [count, setCount] = useState(0);
    console.log("count : ",count);

    let Count1 = 0;
    console.log("Count1",Count1);

    return(
        <>
        <h1>Count : {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>

        <h1>Count1 : {Count1}</h1>
        <button onClick={() => Count1++}>Increment1</button>
        </>
    )
}

export default Counter1