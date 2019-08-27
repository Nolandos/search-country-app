import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const Navigation = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to = "/">Państwa.js</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/countries" className="nav-link">Countries <span className="sr-only">(current)</span> </Link>
                </li>
                <li className="nav-item">
                    <Link to="/continents" className="nav-link">Continents <span className="sr-only">(current)</span> </Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">Home <span className="sr-only">(current)</span> </Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navigation;