import React from 'react';

const OfferComponent = () => {
  const offers = [
    { type: 'Group Trip', price: '15,999', description: 'Per Person' },
    { type: 'Single Trip', price: '23,000', description: 'Per Person' },
    { type: 'Family Trip', price: '16,500', description: 'Per Person' },
  ];

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Special Offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="bg-[#FFDA32] p-4 rounded-lg text-center shadow hover:shadow-lg transition-shadow duration-200"
          >
            <h3 className="text-lg font-bold">{offer.type}</h3>
            <p className="text-2xl font-bold text-[#1C2B38]">{offer.price} ₹</p>
            <p className="text-sm text-gray-600">{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferComponent;
