import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Navbar() {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink to="/" className="navbar-brand" activeClassName="active" href="#">Design system documentation POC</NavLink>
    </nav>;
}