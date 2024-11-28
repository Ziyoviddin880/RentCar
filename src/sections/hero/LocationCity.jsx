import { Link } from "react-router-dom";

const locations = [
   "Beaches",
   "Al Mamzar",
   "Art Foundation",
   "Al-Rahba",
   "Corniche",
   "Saadiyat Island",
   "Burj-khalifa",
   "Marina",
   "Deira",
   "Jumeirah",
   "Burj al-arab",
];

const cities = ["Fujairah", "Sharjah", "Abu Dhabi", "Dubai"];

const LocationCity = () => {
   return (
      <div className="w-full bg-[#1f1f27] py-8 sm:py-16 px-4 md:px-8">
         <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 gap-4 sm:gap-8">
               {/* Location Column */}
               <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-8">
                     LOCATION
                  </h2>
                  <div className="space-y-2 sm:space-y-4">
                     {locations.map((location, index) => (
                        <Link
                           key={index}
                           to="/avto"
                           className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer block text-sm sm:text-base py-1"
                        >
                           {location}
                        </Link>
                     ))}
                  </div>
               </div>

               {/* City Column */}
               <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-8">
                     CITY
                  </h2>
                  <div className="space-y-2 sm:space-y-4">
                     {cities.map((city, index) => (
                        <Link
                           key={index}
                           to="/avto"
                           className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer block text-sm sm:text-base py-1"
                        >
                           {city}
                        </Link>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default LocationCity;
