import { useContext } from "react";
import { UserContext } from "./useContext.jsx";

function Component2() {
    const user = useContext(UserContext);
    return (
        <>
            <p>You are in Component 2!</p>
            <p>Hello I am {user}</p>
        </>
    )
}

export default Component2;