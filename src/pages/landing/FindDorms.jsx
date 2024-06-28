import React from 'react';
import UnivCards from '../../components/cards/UnivCards';
import feu from '../../assets/feu.png'
import pup from '../../assets/pup.png'
import dlsu from '../../assets/dlsu.png'
import up from '../../assets/up.png'
import ust from '../../assets/ust.png'


const universities = [
  {univName: "Far Eastern University",location: "Sampaloc, Manila",backgroundImage: feu,},
  {univName: "University of Sto.Tomas",location: "Sampaloc, Manila",backgroundImage: ust,},
  {univName: "Polytechnic University of the Philippines",location: "Sta. Mesa, Manila",backgroundImage: pup,},
  {univName: "De La Salle University",location: "Malate, Manila",backgroundImage: dlsu,},
  {univName: "University of the Philippines",location: "Ermita, Manila",backgroundImage: up,},
];

const FindDorms = () => {
  return (
    <div className="w-full px-[10%] py-20 flex flex-col gap-7 justify-center items-center ">
        <div className='flex flex-col gap-1 justify-center items-center'>
            <h1 className="font-poppins text-center text-4xl font-semibold">
                Find Dorms in These Universities
            </h1>
            <p className="font-poppins text-center text-xl leading-[32px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </div>
        <div className='flex flex-wrap gap-4 py-12 justify-center items-center'>
            {universities.map((univ, index) => (
                <UnivCards
                    key={index}
                    univName={univ.univName}
                    location={univ.location}
                    backgroundImage={univ.backgroundImage}
                />
            ))}
        </div>
    </div>
  );
}

export default FindDorms;
