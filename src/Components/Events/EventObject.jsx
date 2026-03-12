function EventObject() {
    const click = (name, event) => {
        alert(`event: ${event.type}`)
    }
    return (
        <>
            <button onClick={() => click("Clicked", event)}>Click Me!</button>
        </>
    )
}

export default EventObject;