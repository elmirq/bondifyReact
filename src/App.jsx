import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import PopUp from './components/PopUp';
import Jobs from './components/Jobs';
import Footer from './components/Footer'
const App = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <PopUp />
      <Jobs />
      <Footer />
    </>
  );
};

export default App;