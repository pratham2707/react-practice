function MyObject() {
    const myObject = {
        "company": "Netwise",
        "role": "Full Stack Engineer"
    }
    return (
        <>
            <p>My name is pratham and I work as a {myObject.role} at {myObject.company}.</p>
        </>
    )
}

export default MyObject;