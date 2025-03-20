// components/WhyBookWithUs.js
const WhyBookWithUs = () => {
    return (
      <section className="bg-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">WHY BOOK WITH DEELUCK</h2>
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 justify-center items-center">
          {/* Card 1 */}
          <div className="bg-blue-800 p-6 rounded-lg shadow-md text-center h-48 items-center">
            <div className="flex justify-center items-center">  
              <img src="../img/svg1.svg" alt="" width={"80"}/>
            </div>
            <p className="text-base">
              Enjoy comfort and luxury with our selection of top-rated rooms.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-800 p-6 rounded-lg shadow-md text-center h-48">
          <div className="flex justify-center items-center">  
              <img src="../img/svg2.svg" alt="" width={"80"}/>
            </div>
            <p className="text-base">
              Feel safe and at home with fully furnished apartments with ton securities.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-blue-800 p-6 rounded-lg shadow-md text-center h-48">
          <div className="flex justify-center items-center mb-5">  
              <img src="../img/svg3.svg" alt="" width={"60"}/>
            </div>
            <p className="text-base">
              Save money with our budget-friendly and affordable options.
            </p>
          </div>
        </div>
      </div>
    </section>
    );
  };
  
  export default WhyBookWithUs;