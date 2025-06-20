import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstNavbar from './Components/TopNavbar';
import MainNavbar from './Components/MainNavbar';
import Home from './Components/Home';  
import PopularCategories from './Context/PopularCategories';
import NewLaunches from './Context/NewLaunches';
import VideoCarousel from './Context/VideoCarousel';
import Accessories from './Context/Accessories';
import ComputerAccessories from './Context/ComputerAccessories';
import CarAccessories from './Context/CarAccessories'; 
import MobileAccessories from './Context/MobileAccessories';
import Video from './Context/Video';
import PressConference from './Context/PressConference';
import Footer from './Context/Footer';

const App = () => {
  return (
    <Router>
      <FirstNavbar />
      <MainNavbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Home />
              <PopularCategories />
              <NewLaunches />
              <VideoCarousel />
              <Accessories />
              <ComputerAccessories />
              <CarAccessories /> 
              <MobileAccessories />
              <Video /> 
              <PressConference />
              <Footer />
            </>
          } 
        /> 
        {/* Other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
