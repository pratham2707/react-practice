import { useState } from "react";

function TextArea() {
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value)
    }
    return (
        <>
            <textarea
                value={text}
                onChange={handleChange}
            />
            <p>The text that you have entered is: {text}</p>
        </>
    )
}

export default TextArea;