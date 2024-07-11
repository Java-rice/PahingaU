import React, { useState } from 'react';
import covenantGarden from '../../assets/covenantGarden.png';
import elpueblo from '../../assets/elpueblocondo.png';

const ToReviewSection = ({ user }) => {
  const [userReviews, setUserReviews] = useState([
    { id: 1, housing: "Covenant Garden Sta. Mesa Condo for Rent near PUP & UERM", rating: 4, comment: "Hahaha shonget", imageUrl: covenantGarden },
    { id: 2, housing: "El Pueblo Condo For Rent", rating: 5, comment: "Ban2t amoy sophie", imageUrl: elpueblo }
  ]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Your Reviews</h2>
      {userReviews.length === 0 ? (
        <p className="text-gray-600">You haven't reviewed any housing yet.</p>
      ) : (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {userReviews.map(review => (
            <li key={review.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex items-center p-4">
                <img
                  src={review.imageUrl}
                  alt={review.housing}
                  className="w-24 h-24 object-cover rounded-lg mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{review.housing}</h3>
                  <p className="text-gray-600">Rating: {review.rating}</p>
                  <p className="text-gray-800">{review.comment}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ToReviewSection;
