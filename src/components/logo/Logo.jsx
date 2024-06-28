import React from 'react';
import LogoImage from '../../assets/LogoImage.png';

const Logo = () => {
  return (
    <div className="flex items-center justify-center md:justify-start">
      <img src={LogoImage} alt="logo image" className="mr-2" />
      <h1 className="font-montserrat text-3xl leading-[43.88px]">PahingaU</h1>
    </div>
  );
};

export default Logo;