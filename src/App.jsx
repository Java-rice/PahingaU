import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import How from './pages/howitworks/How';
import Footer from './components/footer/Footer';
import Landing from './pages/landing/Landing';
import About from './pages/about/About';
import Register from './pages/register/Register';
import StudentRegister from './pages/register/StudentRegister';
import LandlordRegister from './pages/register/LandlordRegister';
import Login from './pages/login/Login';  
import TransitionWrapper from './components/transition/TransitionWrapper';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <TransitionWrapper>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/About" element={<About />} />
          <Route path="/HowItWorks" element={<How />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/student-register" element={<StudentRegister />} />
          <Route path="/landlord-register" element={<LandlordRegister />} />
        </Routes>
      </TransitionWrapper>
      <Footer />
    </Router>
  );
};

export default App;