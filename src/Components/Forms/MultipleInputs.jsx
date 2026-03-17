import { useState } from "react";

function MultipleInputs() {

    const [user, setUser] = useState({
        first_name: "",
        middle_name: "",
        last_name: ""
    })

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <label>
                First Name:
                <input
                    type="text"
                    name="first_name"
                    placeholder="Enter your first name"
                    value={user.first_name}
                    onChange={handleChange}
                />
            </label>
            <label>
                Middle Name:
                <input
                    type="text"
                    name="middle_name"
                    placeholder="Enter your middle name"
                    value={user.middle_name}
                    onChange={handleChange}
                />
            </label>
            <label>
                Last Name:
                <input
                    type="text"
                    name="last_name"
                    placeholder="Enter your last name"
                    value={user.last_name}
                    onChange={handleChange}
                />
            </label>
            <p>Your name is {user.first_name} {user.middle_name} {user.last_name}</p>
        </>
    )
}

export default MultipleInputs;