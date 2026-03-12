function OnClickWithArguments() {
    const shoot = (name) => {
        alert(`Great Shot! ${name}`)
    }
    return (
        <>
            <h4>Call with argument on onClick</h4>
            <button onClick={() => shoot("Pratham")}>Take a shot!</button>
        </>
    )
}

export default OnClickWithArguments;