function IfStatement() {
    let word;
    const x = 10;
    if (x >= 10) {
        word = "Hello Pratham"
    } else {
        word = "Hello Shraddha"
    }
    return (
        <>
            <h1>{word}</h1>
        </>
    )
}
export default IfStatement;