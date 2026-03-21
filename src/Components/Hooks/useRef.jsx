import { useState, useEffect, useRef } from "react";

function UseRef() {
    const [input, setInput] = useState("");
    const inputRef = useRef("");

    useEffect(() => {
        inputRef.current = input;
    }, [input]);

    return (
        <>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
            <p>Current Input: {input}</p>
            <p>Previous Input: {inputRef.current}</p>
        </>
    )
}

export default UseRef;