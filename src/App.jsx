import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNavbar from "./Components/TopNavbar";
import MainNavbar from "./Components/MainNavbar";
import Home from "./Components/Home";
import PopularCategories from "./Context/PopularCategories";
import NewLaunches from "./Context/NewLaunches";
import VideoCarousel from "./Context/VideoCarousel";
import Accessories from "./Context/Accessories";
import ComputerAccessories from "./Context/ComputerAccessories";
import CarAccessories from "./Context/CarAccessories";
import MobileAccessories from "./Context/MobileAccessories";
import Video from "./Context/Video";
import PressConference from "./Context/PressConference";
import Footer from "./Context/Footer";
import BottomNavbar from "./Components/BottomNavbar";

const App = () => {
  return (
    <Router>
      <TopNavbar />
      <MainNavbar />
      <BottomNavbar />
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
      </Routes>
    </Router>
  );
};

export default App;
