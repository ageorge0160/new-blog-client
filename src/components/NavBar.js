import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () =>
    <div className="navbar navbar-default">
      <NavLink to="/"> Home |</NavLink>
      <NavLink to="/posts"> Posts |</NavLink>
      <NavLink to="/posts/new"> Create Post </NavLink>
    </div>

export default NavBar;
