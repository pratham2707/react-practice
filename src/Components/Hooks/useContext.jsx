import { createContext, useState } from "react"
import Component1 from "./Component1";

export const UserContext = createContext();

function UseContext() {
    const [user, setUser] = useState("Pratham");

    return (
        <>
            <UserContext.Provider value={user}>
                <p>Hello I am {user}</p>
                <label>
                    Change your name:<input type="text" value={user} onChange={(e) => setUser(e.target.value)}></input>
                </label>
                <Component1 />
            </UserContext.Provider>
        </>
    )
}

export default UseContext;