import "./index.scss"

function ClassName() {
    const x = "secondTextColor";
    return (
        <>
            <h1 className="headerColor">The color of this text is Green!</h1>
            <h1 className={x}>The color of this text is Blue!</h1>
        </>
    )
}

export default ClassName;