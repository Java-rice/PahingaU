import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/buttons/Button.jsx";
import FeaturedCards from "../../components/cards/FeaturedCards.jsx";
import f1 from "../../assets/f1.png";
import f2 from "../../assets/f2.png";
import f3 from "../../assets/f3.png";
import f4 from "../../assets/f4.png";
import f5 from "../../assets/f5.png";
import f6 from "../../assets/f6.png";

const Featured = () => {
  const properties = [
    {
      propertyImage: f1,
      propertyName: "Cozy, Affordable Bedspaces",
      address: "sample address",
      price: 4000,
      period: "monthly",
    },
    {
      propertyImage: f2,
      propertyName: "Cozy, Affordable Bedspaces",
      address: "sample address",
      price: 3000,
      period: "monthly",
    },
    {
      propertyImage: f3,
      propertyName: "Cozy, Affordable Bedspaces",
      address: "sample address",
      price: 4000,
      period: "monthly",
    },
    {
      propertyImage: f4,
      propertyName: "Cozy, Affordable Bedspaces",
      address: "sample address",
      price: 7500,
      period: "monthly",
    },
    {
      propertyImage: f5,
      propertyName: "Cozy, Affordable Bedspaces",
      address: "sample address",
      price: 2000,
      period: "monthly",
    },
    {
      propertyImage: f6,
      propertyName: "Cozy, Affordable Bedspaces",
      address: "sample address",
      price: 6000,
      period: "monthly",
    },
  ];
  return (
    <div className="bg-white py-8 px-[10%]">
      <div className="w-full pt-20 pb-10 flex flex-col gap-7 justify-center items-center ">
        <div className="flex flex-col gap-1 justify-center items-center">
          <h1 className="font-montserrat text-center text-4xl font-semibold">
            Featured Properties
          </h1>
          <p className="font-montserrat text-center text-xl leading-[32px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className="flex gap-4 justify-center mb-2">
        <Button variant="strongButton">All Properties</Button>
        <Button variant="strongButton">Condo</Button>
        <Button variant="strongButton">Apartments</Button>
        <Button variant="strongButton">Studio</Button>
      </div>
      <div className="text-center pt-10 pb-8 gap-10 justify-center items-center flex flex-row flex-wrap mt-8">
        {properties.map((propert, index) => (
          <FeaturedCards
            key={index}
            propertyImage={propert.propertyImage}
            propertyName={propert.propertyName}
            address={propert.address}
            price={propert.price}
            period={propert.period}
          />
        ))}
      </div>
      <div className="w-full pt-10 pb-10 flex flex-col gap-7 justify-center items-center ">
        <Link to="/Login">
          <button className="bg-white text-[#1A1A1A] font-bold px-6 py-3 rounded-md hover:bg-[#0077B5] hover:text-white transition-colors">
            See All Listings
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Featured;
