import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () =>
    <div className="navbar navbar-default">
      <NavLink to="/" className="link"> Home |</NavLink>
      <NavLink to="/posts" className="link"> Posts |</NavLink>
      <NavLink to="/posts/new" className="link"> Create Post </NavLink>
    </div>

export default NavBar;
