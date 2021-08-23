import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.jpg'

const Header = () => {
    return (
        <header header className="header" >
            <img src={Logo} alt="logo" className="logo" height="100px" />
            <nav>
                <ul class="menu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
