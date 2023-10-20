import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.AboutText}</Link>
                        </li>
                    </ul>
                    {/* Commented out search form */}
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form> */}
                    <div className={`form-check form-switch text-${props.mode === 'dark' ? 'white' : 'dark'}`}>
                        <input className = {`form-check-input`} type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick = {props.toggleMode} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                            Enable Dark Mode
                        </label>
                    </div>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    mode: PropTypes.string.isRequired, // Make sure to define prop types
    title: PropTypes.string.isRequired,
    AboutText: PropTypes.string.isRequired,
};