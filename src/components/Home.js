import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () =>
    <div className="welcome-container">
      <h4 className="paragraph">Thank you for visiting. Enjoy the collection of outdoor articles!</h4>
      <div className='button_div'>
      <form action='posts'>
      <NavLink to="/posts" className="btn btn-success">
        View Posts
      </NavLink>
      </form>
      </div>
    </div>

export default Home;
