import { useState } from "react";
import RadioButton from "./RadioButton";

function Select() {
    const [city, setCity] = useState("Delhi");
    const handleChange = (e) => {
        setCity(e.target.value)
    }
    return (
        <>
            <select value={city} onChange={handleChange}>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Pune">Pune</option>
            </select>
            <p>You have selected {city}</p>
            <RadioButton />
        </>
    )
}

export default Select;