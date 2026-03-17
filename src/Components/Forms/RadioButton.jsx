import { useState } from "react";

function RadioButton() {
    const [sport, setSport] = useState("cricket");
    const handleChange = (e) => {
        setSport(e.target.value)
    }
    return (
        <>
            <input
                type="radio"
                name="sport"
                value="cricket"
                onChange={handleChange}
                checked={sport === "cricket"}
            />
            <label>Cricket</label>
            <input
                type="radio"
                name="sport"
                value="football"
                onChange={handleChange}
                checked={sport === "football"}
            />
            <label>Football</label>
            <input
                type="radio"
                name="sport"
                value="badminton"
                onChange={handleChange}
                checked={sport === "badminton"}
            />
            <label>Badminton</label>
            <input
                type="radio"
                name="sport"
                value="swimming"
                onChange={handleChange}
                checked={sport === "swimming"}
            />
            <label>Swimming</label>
        </>
    )
}

export default RadioButton;