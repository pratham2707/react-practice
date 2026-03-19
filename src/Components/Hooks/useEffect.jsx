import { useState, useEffect } from "react";

function UseEffect() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const timer = setTimeout(() => {
            setCount((count) => count + 1);
        }, 5000);

        return () => clearTimeout(timer);
    })
    return (
        <>
            <p>I have been rendered {count} times!</p>
        </>
    )
}

export default UseEffect;