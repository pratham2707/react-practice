import { NavLink, Outlet } from "react-router-dom"

const navLinkStyles = ({ isActive }) => ({
    color: isActive ? '#007bff' : '#333',
    textDecoration: isActive ? 'none' : 'underline',
    fontWeight: isActive ? 'bold' : 'normal',
    padding: '5px 10px'
})

function Products() {
    return (
        <>
            <h1>Products Page</h1>
            <nav>
                <NavLink to="cars" style={navLinkStyles}>Cars</NavLink>
                <NavLink to="bikes" style={navLinkStyles}>Bikes</NavLink>
            </nav>
            <Outlet />
        </>
    )
}

export default Products;
