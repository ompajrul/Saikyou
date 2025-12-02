// import logo from './logo.svg';
import './App.css';
import Navibar from './components/navibar';
import Foter from './components/foter';
import Home from './pages/home';
import Splash from './images/saikyou_v.png'
import Test_overlay from './pages/alert_test';
import Commission from './pages/commission';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const styles = {
  loadingContainer: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  splashLogo: {
    height: "100px",
    objectFit: "contain",
  },
};
  useEffect(() => {
   const timer = setTimeout(() => {
    setFadeOut(true); // mulai fade-out
    setTimeout(() => {
      setLoading(false); // hilangkan splash
      }, 800); // durasi fade-out
    }, 1000); // durasi tampil splash

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={styles.loadingContainer} className={`splash-container ${fadeOut ? "fade-out" : ""}`}>
        <img src={Splash} style ={styles.splashLogo}></img>
      </div>
    );
  }

  return (
    <div style={styles.mainContainer}>

        <Navibar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Commission' element={<Commission />} />
          <Route path='/test_overlay' element={<Test_overlay />} />
        </Routes>
        <Foter />
     
    </div>
  );
}


export default App;
