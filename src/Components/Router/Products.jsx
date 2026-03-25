import { Link, Outlet } from "react-router-dom"

function Products() {
    return (
        <>
            <h1>Products Page</h1>
            <nav>
                <Link to="cars">Cars</Link>
                <Link to="bikes">Bikes</Link>
            </nav>
            <Outlet />
        </>
    )
}

export default Products;
