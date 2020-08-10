import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import "../component/Navbar.css"
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <div className="container">
                <NavLink className="navbar-brand" to="/About">Top navbar</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ">
                            <NavLink activeClassName="active-link" className="nav-link"  to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active-link" className="nav-link" to="/About">About</NavLink>
                        </li>
                        
                    </ul>

                </div>
                </div>
            </nav>
        );
    }
}

export default Navbar