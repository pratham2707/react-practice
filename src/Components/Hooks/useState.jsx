import { useState, useEffect } from "react";

function UseState() {
    const [color, setColor] = useState("black");
    const [car, setCar] = useState({ branch: "RR", model: "BoatTail" });
    const [carModel, setCarModel] = useState("BoatTail");

    useEffect(() => {
        setCar({ ...car, model: carModel });
    }, [carModel]);

    return (
        <>
            <p>My favourite color is {color}!</p>
            <button onClick={() => setColor("blue")}>Change Favourite Color</button>
            <p>My favourite car is {car.branch} {car.model}!</p>
            <label>Enter your favourite rolls royce model:<input type="text" onChange={(e) => setCarModel(e.target.value)}></input></label>
        </>
    )
}

export default UseState;