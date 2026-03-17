import { useState, useEffect } from "react";
import TextArea from "./TextArea";
import Select from "./Select";

function ValueInState() {
    const [name, setName] = useState("");
    const handleChange = (e) => {
        setName(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Hello ${name}`);
    }
    useEffect(() => {
        console.log("Current Name", name)
    }, [name])
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter your name:
                    <input
                        type="text"
                        value={name}
                        onChange={handleChange}
                    />
                </label>
                <p>Your name is {name}</p>
                <label>
                    Enter a Text
                    <TextArea />
                </label>
                <label>
                    Select a City
                    <Select />
                </label>
                <input type="submit" />
            </form>
        </>
    )
}

export default ValueInState;