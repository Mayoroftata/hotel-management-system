import React from 'react';

const Recommendations = () => {
    // Sample data for recommendations
    const hotels = [
        {
            id: 1,
            image: '/images/hotel-1.jpg',
            name: 'Lagos Marriott Hotel Ikeja',
            rating: 4.7,
            reviews: 5704,
            price: '#584,353',
        },
        {
            id: 2,
            image: '/images/hotel-2.jpg',
            name: 'Lagos Marriott Hotel Ikeja',
            rating: 4.7,
            reviews: 5704,
            price: '#584,353',
        },
        {
            id: 3,
            image: '/images/hotel-3.jpg',
            name: 'Lagos Marriott Hotel Ikeja',
            rating: 4.7,
            reviews: 5704,
            price: '#584,353',
        },
        {
            id: 4,
            image: '/images/hotel-4.jpg',
            name: 'Lagos Marriott Hotel Ikeja',
            rating: 4.7,
            reviews: 5704,
            price: '#584,353',
        },
        {
            id: 5,
            image: '/images/hotel-5.jpg',
            name: 'Lagos Marriott Hotel Ikeja',
            rating: 4.7,
            reviews: 5704,
            price: '#584,353',
        },
        {
            id: 6,
            image: '/images/hotel-6.jpg',
            name: 'Lagos Marriott Hotel Ikeja',
            rating: 4.7,
            reviews: 5704,
            price: '#584,353',
        },
        {
            id: 7,
            image: '/images/hotel-7.jpg',
            name: 'Lagos Marriott Hotel Ikeja',
            rating: 4.7,
            reviews: 5704,
            price: '#584,353',
        },
        {
            id: 8,
            image: '/images/hotel-8.jpg',
            name: 'Lagos Marriott Hotel Ikeja',
            rating: 4.7,
            reviews: 5704,
            price: '#584,353',
        },
        {
            id: 9,
            image: '/images/hotel-9.jpg',
            name: 'Lagos Marriott Hotel Ikeja',
            rating: 4.7,
            reviews: 5704,
            price: '#584,353',
        },
    ];

    return (
        <div className="bg-gray-300 shadow-md rounded-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gray-300 text-blue-900 text-3xl p-4 text-center font-bold uppercase">
                Recommendations
            </div>

            {/* Grid of Recommendations */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {hotels.map((hotel) => (
                    <div
                        key={hotel.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                        {/* Image */}
                        <img
                            src={hotel.image}
                            alt={hotel.name}
                            className="w-full h-48 object-cover"
                        />

                        {/* Content */}
                        <div className="p-4">
                            {/* Name */}
                            <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>

                            {/* Rating and Reviews */}
                            <div className="flex items-center mb-2">
                                <span className="text-yellow-500 mr-1">⭐</span>
                                <span className="text-sm font-medium text-gray-600">
                                    {hotel.rating} ({hotel.reviews})
                                </span>
                            </div>

                            {/* Price */}
                            <p className="text-gray-600">From {hotel.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recommendations;