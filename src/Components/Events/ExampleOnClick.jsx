function ExampleOnClick() {
    const shoot = () => {
        alert('Great Shot!')
    }
    return (
        <>
            <h4>Normal Call on onClick</h4>
            <button onClick={shoot}>Take a shot!</button>
        </>
    )
}

export default ExampleOnClick;