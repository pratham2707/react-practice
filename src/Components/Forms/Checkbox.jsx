import { useState } from "react";

function Checkbox() {
    const [inputs, setInputs] = useState({})
    const handleChange = (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setInputs({
            ...inputs,
            [e.target.name]: value
        })
    }
    const handleSubmit = (e) => {
        let fillings = "";
        if (inputs.tomato) {
            fillings += "Tomato";
        }
        if (inputs.onions) {
            if (inputs.tomato) {
                fillings += " and Onions";
            } else {
                fillings += "Onions";
            }
        }
        console.log(`${inputs.name} has ordered a burger with ${fillings}`)
        alert(`${inputs.name} has ordered a burger with ${fillings}`)
        e.preventDefault();
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter your name:
                    <input
                        type="text"
                        name="name"
                        value={inputs.name || ""}
                        onChange={handleChange}
                    />
                </label>
                <p>Choose your burger fillings:</p>
                <label>
                    Tomatos
                    <input
                        type="checkbox"
                        name="tomato"
                        checked={inputs.tomato || false}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Onions
                    <input
                        type="checkbox"
                        name="onions"
                        checked={inputs.onions || false}
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" />
            </form>
        </>
    )
}

export default Checkbox;
