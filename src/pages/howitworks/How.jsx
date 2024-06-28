import React from "react";
import schedule from "../../assets/schedule.png";
import browse from "../../assets/browse.png";
import visit from "../../assets/visit.png";
import { Button } from "../../components/buttons/Button";

const How = () => {
  return (
    <>
      <div className="w-full px-4 sm:px-[10%] font-poppins">
        <div className="flex pt-10 sm:pt-[30%] pb-20 sm:pb-[20%] flex-col justify-center  gap-5 text-center">
          <Button variant="black">HOW IT WORKS</Button>
          <h1 className="w-full sm:w-3/4 font-poppins m-auto text-4xl sm:text-6xl font-regular leading-tight sm:leading-[78px] text-center">
            Knock on the Right Door in 3 Easy Steps!
          </h1>
        </div>
        <div className="flex flex-col gap-20 sm:gap-40 pb-10 sm:pb-[10%]">
          <div className="flex flex-col sm:flex-row gap-10">
            <img src={browse} className="w-full sm:w-1/2"></img>
            <div className="flex flex-col justify-center gap-3 text-center sm:text-left">
              <h1 className="text-[#0077B5] text-3xl sm:text-4xl font-bold leading-tight sm:leading-[40px]">Browse</h1>
              <p className="font-poppins font-medium text-[#1A1A1A] text-base sm:text-xl">
                Start by typing your ideal location. Apply filters like pets
                allowed, with gym amenities, or explore bedspace versus
                entire-room stays to narrow down your options.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row-reverse gap-10">
            <img src={schedule} className="w-full sm:w-1/2"></img>
            <div className="flex flex-col justify-center gap-3 text-center sm:text-right">
              <h1 className="text-[#0077B5] text-3xl sm:text-4xl font-bold leading-tight sm:leading-[40px]">Schedule</h1>
              <p className="font-poppins font-medium text-[#1A1A1A] text-base sm:text-xl">
                Once you've found a the right rental for you, schedule a
                property viewing. Indicate your interest for roommate matching,
                and submit your visit request.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-10">
            <img src={visit} className="w-full sm:w-1/2"></img>
            <div className="flex flex-col justify-center gap-3 text-center sm:text-left">
              <h1 className="text-[#0077B5] text-3xl sm:text-4xl font-bold leading-tight sm:leading-[40px]">Visit & Move-in</h1>
              <p className="font-poppins font-medium text-[#1A1A1A] text-base sm:text-xl">
                Once the property owner approves your request, you'll receive a
                visit pass and map directions via email. Show your visit pass
                upon arrival — and move-in if you've found the right space for
                you!
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-16 sm:gap-28 pb-10 sm:pb-[20%] justify-center align-middle">
          <h1 className="text-[#1A1A1A] text-3xl sm:text-4xl font-bold leading-tight sm:leading-[40px] text-center">Make the most out of DoorMe</h1>
          <div className="flex flex-col sm:flex-row text-center justify-center sm:justify-between gap-10 sm:gap-20">
            <div className="flex flex-col justify-center gap-10 align-middle w-full sm:w-1/2">
              <h1 className="text-[#1A1A1A] text-3xl sm:text-4xl font-bold leading-tight sm:leading-[40px] text-center">For Renters</h1>
              <p className="font-poppins font-medium text-[#1A1A1A] text-base sm:text-xl">Search for verified rentals, schedule a visit, and move-in with ease</p>
              <Button variant="darklarge">Search for Rentals</Button>
            </div>
            <div className="flex flex-col justify-center gap-10 align-middle w-full sm:w-1/2">
              <h1 className="text-[#1A1A1A] text-3xl sm:text-4xl font-bold leading-tight sm:leading-[40px] text-center">For Landlords</h1>
              <p className="font-poppins font-medium text-[#1A1A1A] text-base sm:text-xl">List your properties, manage leads, and increase occupancy rates</p>
              <Button variant="darklarge">Post your Property</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default How;