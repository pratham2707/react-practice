import { useParams } from "react-router-dom";

function Member() {
    const { name } = useParams();
    return (
        <>
            <h2>Hello {name}</h2>
        </>
    )
}

export default Member;