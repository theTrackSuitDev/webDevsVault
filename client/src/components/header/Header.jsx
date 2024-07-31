import { useContext } from "react";
import logo from "../../assets/images/light-bulb-gear-13626.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function Header() {
    const { isLogged } = useContext(AuthContext);

    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="Bulb-logo" />
                </Link>
            </div>

            <nav>
                <ul>
                    <li id="nav-home">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "nav-active" : undefined
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li id="nav-vault">
                        <NavLink
                            to="/vault"
                            className={({ isActive }) =>
                                isActive ? "nav-active" : undefined
                            }
                        >
                            Vault
                        </NavLink>
                    </li>
                    
                    {isLogged
                        ? <>
                            <li id="nav-add">
                            <NavLink
                                to="/add-resource"
                                className={({ isActive }) =>
                                    isActive ? "nav-active" : undefined
                                }
                            >
                                Add Resource
                            </NavLink>
                            </li>

                            <li id="nav-profile">
                            <NavLink
                                to="/profile/:userId"
                                className={({ isActive }) =>
                                    isActive ? "nav-active" : undefined
                                }
                            >
                                Profile
                            </NavLink>
                            </li>
                        </>
                        : <>
                            <li id="nav-login">
                                <NavLink
                                    to="/login"
                                    className={({ isActive }) =>
                                        isActive ? "nav-active" : undefined
                                    }
                                >
                                    Login
                                </NavLink>
                            </li>
                            <li id="nav-register">
                                <NavLink
                                    to="/register"
                                    className={({ isActive }) =>
                                        isActive ? "nav-active" : undefined
                                    }
                                >
                                    Register
                                </NavLink>
                            </li>
                        </>
                    }
                                       
                    <li id="nav-about">
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "nav-active" : undefined
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    {isLogged && (
                        <li id="nav-logout">
                        <NavLink to="/logout">Logout</NavLink>
                        </li>
                    )}

                </ul>
            </nav>
        </header>
    );
}
