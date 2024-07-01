//  src/pages/landing/Landing.jsx
import React from 'react';
import Hero from '../../components/hero/Hero'
import FindDorms from './FindDorms'
import WorkWithUs from './WorkWithUs';
import Featured from './Featured';
import SignInCard from '../../components/cards/SignInCard';
import backgroundImage from '../../assets/HeroImage.png';


const Landing = () => {
  const heroContent = {
    backgroundImage: backgroundImage,
  };

  return (
    <>
      <Hero backgroundImage={heroContent.backgroundImage}/>
      <FindDorms/>
      <WorkWithUs/>
      <SignInCard/>
      <Featured/>
    </>
  );
};

export default Landing;