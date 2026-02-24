function EventListner() {
    const myFunc = () => {
        alert("Hey, you clicked me!")
    }
    return (
        <button onClick={myFunc}>Click Me!</button>
    )
}
export default EventListner;