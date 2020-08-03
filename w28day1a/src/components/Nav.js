import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {
    const style_component = {
        color: 'white'
    };
    return (
        <nav>
            <h3>logo</h3>
            <ul className="nav-links">
                <Link to="/" style={style_component}>
                    <li>Home</li>
                </Link>
                <Link to="/about" style={style_component}>
                    <li>About</li>
                </Link>
                <Link to="/terms" style={style_component}>
                    <li>Terms</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;