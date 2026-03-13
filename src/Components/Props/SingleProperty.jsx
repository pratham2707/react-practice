import ArrayProps from "./ArrayProps.jsx";
import DataTypes from "./DataTypes.jsx";
import ObjectProps from "./ObjectProps.jsx";

function SingleProperty(props) {
    let city = "Solapur";
    const nation = { name: "India", capital: "Delhi", language: "Hindi", pm: "Narendra Modi" }
    const years = [1974, 1996, 2002]
    return (
        <>
            <h1>The name of the person passed is {props.name}</h1>
            <DataTypes year={2002} city={city} />
            <ObjectProps nation={nation} />
            <ArrayProps years={years} />
        </>
    )
}

export default SingleProperty;