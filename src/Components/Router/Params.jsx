import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Member from "./Member";

function Params() {
    return (<>
        <nav>
            <Link to="/member/Pratham">
                Pratham
            </Link>
            <Link to="/member/Shraddha">
                Shraddha
            </Link>
            <Link to="/member/Mallamma">
                Mallamma
            </Link>
        </nav>
        <Routes>
            <Route path="/member/:name" element={<Member />} />
        </Routes></>
    )
}

export default Params;