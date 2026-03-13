function SampleList() {
    const myList = [{ id: 1, name: "Bengaluru" }, { id: 2, name: "Mumbai" }, { id: 3, name: "LA" }]
    return (
        <>
            <h1>My cities</h1>
            {myList.map((city) => <li key={city.name}>I am {city.name}</li>)}
        </>
    )
}

export default SampleList;