import React from 'react';
import ListingBesideMapCards from '../../components/cards/ListingBesideMapCards';
import covenantGarden from "../../assets/covenantGarden.png";
import elpueblo from "../../assets/elpueblocondo.png";

const BookmarksSection = () => {
  // Debugging to check if images are imported correctly
  console.log("covenantGarden image path:", covenantGarden);
  console.log("elpueblo image path:", elpueblo);

  const dummyListings = [
    {
      id: 1,
      image: covenantGarden,
      title: "Covent Garden Sta. Mesa Condo for Rent near PUP & UERM",
      details:
        "4-6 guests · Entire Condo · 6 beds · Shared bath · Wifi · Kitchen · Free Parking",
      price: "Php 5,680 /month",
      rating: 5.0,
      reviews: 318,
    },
    {
      id: 2,
      image: elpueblo,
      title: "El Pueblo Condo For Rent",
      details: "4-6 persons · Entire Room · 4 beds · 1 bath · Wifi · Kitchen",
      price: "Php 6,755 /month",
      rating: 5.0,
      reviews: 318,
    }
  ];

  return (
    <div className="h-auto w-auto m-10">
      <div>
        {dummyListings.map((listing) => (
          <ListingBesideMapCards
            key={listing.id}
            id={listing.id}
            image={listing.image}
            title={listing.title}
            details={listing.details}
            price={listing.price}
            rating={listing.rating}
            reviews={listing.reviews}
          />
        ))}
      </div>
    </div>
  );
};

export default BookmarksSection;
