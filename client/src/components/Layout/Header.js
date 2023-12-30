import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { useAuth } from '../../context/auth';
import SearchInput from "../forms/SearchInput"
import toast from 'react-hot-toast';
import { useCart } from "../../context/cart";
import { Badge } from "antd";
const Header = () => {
    const [auth, setAuth] = useAuth();
    const [cart] = useCart();
    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: ''
        })
        localStorage.removeItem('auth');
        toast.success("Logout Successfully");
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top ">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link to="/" className="navbar-brand">
                            🛒 Library
                        </Link>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <SearchInput />
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link ">
                                    Home
                                </NavLink>
                            </li>
                            {
                                !auth.user ? (<>
                                    <li className="nav-item">
                                        <NavLink to="/register" className="nav-link ">
                                            Register
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/login" className="nav-link ">
                                            Login
                                        </NavLink>
                                    </li>
                                </>) : (<>

                                    <li className="nav-item">
                                        {/* <NavLink to={`/dashboard/${auth?.user?.role === 'admin' ? 'admin' : 'user'}`} className="nav-link ">
                                            Dashboard
                                        </NavLink> */}
                                        <NavLink
                                            to={`/dashboard/${auth?.user?.role === 'admin' ? 'admin' : auth?.user?.role === 'manager' ? 'manager' : auth?.user?.role === 'employee' ? 'employee' : 'user'
                                                }`}
                                            className="nav-link"
                                        >
                                            Dashboard
                                        </NavLink>

                                    </li>

                                    <li className="nav-item">
                                        <NavLink onClick={handleLogout} to="/login" className="nav-link ">
                                            Logout
                                        </NavLink>
                                    </li>

                                </>)
                            }
                            <li className="nav-item">
                                <NavLink to="/cart" className="nav-link ">
                                    <Badge count={cart?.length} showZero offset={[10, -5]}>
                                        Cart
                                    </Badge>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <h1>header</h1> */}

        </>
    )
}

export default Header