import React from 'react'
import { NavLink } from 'react-router-dom'
import navlogo from '/assets/icon (2).png'
import { TiShoppingCart } from "react-icons/ti";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" href="#"><img src={navlogo} width="100em" alt="icon"
                        className="img-fluid rounded-pill shadow-lg" /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-NavLink" to='/' >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-NavLink" to='/shop' >Shop</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-NavLink"  to='/about'>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-NavLink"  to='/contact'>Contact us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-NavLink"  to='/cart'><TiShoppingCart /></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar