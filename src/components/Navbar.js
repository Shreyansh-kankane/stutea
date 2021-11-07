import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
// import PropTypes from "prop-types";
import "../css/Navbar.css"

export const Navbar = () => {
    let location = useLocation();
  let history = useHistory();
  const handleLogout = ()=> {
    localStorage.removeItem('token')
    history.push('/login')
  }
  return (
    <nav className="navbar-parent">
            <div className="logo-wrapper">
                <Link className="logo-link" to="/">
                   STUTEA
                </Link>
            </div>
            <div className="navbar-links">
                <ul className="nav-item-list">
                    <li className="nav-item">
                        <Link className={`navbar-item ${location.pathname==='/'?"active":""}`} to="/">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`navbar-item ${location.pathname==='/about'?"active":""}`} to="/about">
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`navbar-item ${location.pathname==='/contact'?"active":""}`} to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>

                {!localStorage.getItem("token")?
                <div className="top-right">
                    <Link className={"button"} to='/login'>
                        <button className="btn-login">
                            Login
                        </button>
                    </Link>
                    <Link className={"button"} to='/register'>
                        <button className="btn-login">
                            Register
                        </button>
                    </Link>
                </div>:
                <button className="btn-login" onClick={handleLogout}>Logout</button>
    }
            </div>
        </nav>
  )
}
