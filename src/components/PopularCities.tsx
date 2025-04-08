import React from "react";

const PopularCities: React.FC = () => {
  const showCity = (cityName: string) => {
    alert(`You clicked on ${cityName}! (Functionality can be added here)`);
  };

  const cities = [
    { name: "Algiers", image: "/alger.webp" },
    { name: "Oran", image: "/oran.png" },
    { name: "Annaba", image: "/annaba.jpg" },
    { name: "Ouargla", image: "/Ouargla.jpg" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-5">
        Popular Cities on EventTix
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {cities.map((city, index) => (
          <div
            key={index}
            className="city-card border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:transform hover:scale-105 transition duration-300"
          >
            <a
              href="#"
              className="city-link block text-current"
              onClick={(e) => {
                e.preventDefault();
                showCity(city.name);
              }}
            >
              <div className="city-image-container w-full">
                <img
                  src={city.image}
                  alt={city.name}
                  className="city-image block w-full aspect-square object-cover"
                />
              </div>
              <div className="city-name p-2 text-center bg-black bg-opacity-70 text-white font-bold relative w-full box-border">
                {city.name}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCities;
