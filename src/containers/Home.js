import React from 'react';

const Home = () => {
  return (
    <div className="welcome-container">
      <h4 className="paragraph">Thank you for visiting. Enjoy the collection of outdoor articles!</h4>
      <div className='button_div'>
      <form action='posts'>
      <button className="btn btn-success" onClick="location.href='posts'">
        View Posts
      </button>
      </form>
      </div>
    </div>
  );
};

export default Home;
