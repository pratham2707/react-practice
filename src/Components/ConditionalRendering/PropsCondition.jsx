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
    if (props.indiaWon) {
        return <IndiaWon />
    } else {
        return <IndiaLost />
    }
}

function PropsCondition() {
    return (
        <>
            <ConditionalRendering indiaWon={true} />
        </>
    )
}

export default PropsCondition;