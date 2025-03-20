// components/Toprooms.js
const TopRoom = () => {
  const room = [
    {
      id: 1,
      name: 'Premium Penthouse',
      rating: 4.7,
      reviews: 5704,
      price: 584353,
      image: '../img/TopRoom1.jpg'
    },
    {
      id: 2,
      name: 'Deluxe Suite 2',
      rating: 4.7,
      reviews: 3335,
      price: 565467,
      image: '../img/TopRoom2.jpg'
    },
    {
      id: 3,
      name: 'Executive Suite 1',
      rating: 4.6,
      reviews: 28118,
      price: 1005426,
      image: '../img/TopRoom3.jpg'
    },
    {
      id: 4,
      name: 'Executive Suite 2',
      rating: 4.3,
      reviews: 1685,
      price: 74798,
      image: '../img/TopRoom4.jpg'
    }
  ];

    return (
      <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">TOP ROOMS</h2>
        <p className="text-center mb-8">Most popular choices for our Clients</p>
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 justify-center items-center ">
          {room.map((room) => (
            <div key={room.id} className="bg-blue-800 p-4 rounded-lg shadow-md w-full md:w-1/4 border border-amber-50">
              <img src={room.image} alt={room.name} className="w-full h-48 object-cover mb-4" />
              <h3 className="text-lg font-semibold">{room.name}</h3>
              <div className="flex items-center mb-2">
                <span className="mr-2">{room.rating} ⭐</span>
                <span>({room.reviews})</span>
              </div>
              <p>#{room.price}</p>
            </div>
          ))}
          <div className="bg-black p-4 rounded-lg shadow-md w-full md:w-1/4 border border-amber-50 h-80 flex flex-col justify-center items-center">
            <h3 className="text-lg font-semibold">DISCOVER GREAT DEALS AROUND YOU</h3>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Explore</button>
          </div>
        </div>
      </div>
    </section>
    );
  };
  
  export default TopRoom;