// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import How from "./pages/howitworks/How";
import Footer from "./components/footer/Footer";
import Landing from "./pages/landing/Landing";
import About from "./pages/about/About";
import Register from "./pages/register/Register";
import StudentRegister from "./pages/register/StudentRegister";
import LandlordRegister from "./pages/register/LandlordRegister";
import Login from "./pages/login/Login";
import TermsOfService from "./pages/termsofservice/Termsofservice";
import PrivacyPolicy from "./pages/privacypolicy/Privacypolicy";
import CookiePolicy from "./pages/cookiepolicy/Cookiepolicy";
import SafetyGuidelines from "./pages/safetyguidelines/Safetyguidelines";
import SuccessPage from "./pages/register/SuccessPage";
import TransitionWrapper from "./components/transition/TransitionWrapper";
import ScrollToTop from "./components/scrollbehavior/ScrollToTop";
import Profile from "./pages/profile/Profile";
import ViewDorm from "./pages/viewdorm/ViewDorm";
import FindDorms from "./pages/finddorms/FindDorms";
import ManageListings from "./pages/managelistings/ManageListings";
import MessageSection from "./pages/profile/MessageSection";
import PostProperty from "./pages/postproperty/PostProperty";
import LandlordHome from "./pages/landlordhome/LandlordHome";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <TransitionWrapper>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/About" element={<About />} />
          <Route path="/HowItWorks" element={<How />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/student-register" element={<StudentRegister />} />
          <Route path="/landlord-register" element={<LandlordRegister />} />
          <Route path="/TermsOfService" element={<TermsOfService />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/CookiePolicy" element={<CookiePolicy />} />
          <Route path="/SafetyGuidelines" element={<SafetyGuidelines />} />
          <Route path="/PostProperty" element={<PostProperty />} />
          <Route path="/Success" element={<SuccessPage />} />
          <Route path="/Profile/*" element={<Profile />} />
          <Route path="/ManageListings" element={<ManageListings />} />
          <Route path="/MessageSection" element={<MessageSection />} />
          <Route path="/FindDorms" element={<FindDorms />} />
          <Route path="/ViewDorm" element={<ViewDorm />} />
          <Route path="/LandlordHome" element={<LandlordHome />} />
        </Routes>
      </TransitionWrapper>
      <Footer />
    </Router>
  );
};

export default App;