import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import PopUp from './components/PopUp';
import Jobs from './components/Jobs';

const App = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <PopUp />
      <Jobs />
    </>
  );
};

export default App;