import React from 'react';
import { Button } from '../buttons/Button';

const Hero = ({ backgroundImage }) => {
    return (
        <div className="w-full font-poppins min-h-screen bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="w-3/5 mx-auto text-white flex flex-col gap-5 justify-center items-center min-h-screen text-wrap ">
                <Button variant="nocolor">Discover Wonders Here</Button>
                <h1 className="text-6xl font-regular leading-[78px] text-center">WELCOME HOME!<br/>YOUR PERFECT DORM SEARCH</h1>
            </div>
        </div>
    );
};

export default Hero;