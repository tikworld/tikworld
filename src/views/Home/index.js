import React from 'react';
import Carousel from '../../components/Carousel';

const Home = () => (
  <div>
    <div className="d-flex flex-row justify-content-center">
      <h3>Welcome to TIK World</h3>
    </div>
    <div className="d-flex flex-row w-100">
      <Carousel />
    </div>
    <div className="d-flex flex-row">
      <h3>Learning brings new and exciting opportunities!</h3>
    </div>
  </div>
);

export default Home;
