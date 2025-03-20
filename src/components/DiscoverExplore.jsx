// components/DiscoverExplore.js
const DiscoverExplore = () => {
  const categories = [
    {
      id: 1,
      title: 'Clear & Clear Pools',
      description: 'Indulge in a refreshing escape at our luxurious hotel pools, designed for ultimate relaxation and enjoyment.',
      image: '../img/Discover1.jpg'
    },
    {
      id: 2,
      title: 'Best Delicacies',
      description: 'Enjoy a variety of delicious cuisines from around the world at our top-rated restaurants.',
      image: '../img/Discover2.jpg'
    },
    {
      id: 3,
      title: 'Gym & Fitness',
      description: 'Stay active and energized during your stay with our state-of-the-art fitness centers and wellness programs.',
      image: '../img/Discover3.jpg'
    },
    {
      id: 4,
      title: 'Event and Conference',
      description: 'Host your next event or conference at our spacious and well-equipped venues, perfect for any occasion.',
      image: '../img/Discover4.jpg'
    }
  ];

    return (
      <section className="bg-blue-900 py-16 text-blue-900">
      <div className="container mx-auto px-4 bg-white p-10">
        <h2 className="text-2xl font-bold text-center mb-4">DISCOVER & EXPLORE</h2>
        <p className="text-center mb-8">Make the most of your trip with our curated tours and exciting attractions.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={category.image} alt={category.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold bg-blue-900 text-white p-2">{category.title}</h3>
                <p className="mt-2">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-blue-900 text-white px-4 py-2 rounded cursor-pointer hover:opacity-75">Explore</button>
        </div>
      </div>
    </section>
    );
  };
  
  export default DiscoverExplore;