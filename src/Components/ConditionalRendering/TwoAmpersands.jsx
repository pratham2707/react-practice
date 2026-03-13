function TwoAmpersands(props) {
    return (
        <>
            {props.brand && <h1>My car is of {props.brand} brand</h1>}
        </>
    )
}

export default TwoAmpersands;