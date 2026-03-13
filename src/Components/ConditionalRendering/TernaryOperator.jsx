function IndiaWon() {
    return (
        <>
            <h1>India Won</h1>
        </>
    )
}

function IndiaLost() {
    return (
        <>
            <h1>India Lost</h1>
        </>
    )
}

function ConditionalRendering(props) {
    return (
        props.indiaWon ? <IndiaWon /> : <IndiaLost />
    )
}

function TernaryOperator() {
    return (
        <>
            <ConditionalRendering indiaWon={true} />
        </>
    )
}

export default TernaryOperator;