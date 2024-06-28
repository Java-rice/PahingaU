import React from 'react';
import PicCards from '../../components/cards/PicCards';
import icon1 from '../../assets/Icon1.png';
import icon2 from '../../assets/Icon2.png';
import icon3 from '../../assets/Icon3.png';

const WorkWithUs = () => {
  const cardsData = [
      {icon: icon1, title: 'Wide Range of Properties', description: 'We offer expert legal help for all related property items in Dubai.', },
      {icon: icon2, title: 'Buy or Rent Homes', description: 'We sell your home at the best market price and very quickly as well.',},
      {icon: icon3, title: 'Trusted by Thousands', description: 'We offer you free consultancy to get a loan for your new home.',},
  ];
  return (
    <div className="w-full py-20 flex flex-col gap-7 justify-center items-center ">
        <div className='flex flex-col gap-1 justify-center items-center'>
            <h1 className="font-montserrat text-center text-4xl font-semibold">
                Why You Should Work With Us
            </h1>
            <p className="font-montserrat text-center text-xl leading-[32px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </div>
        <div className="flex justify-center gap-8">
          {cardsData.map((card, index) => (
            <PicCards key={index} icon={card.icon} title={card.title} description={card.description}/>
          ))}
        </div>
    </div>
  )
}

export default WorkWithUs
