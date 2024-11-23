import { ChevronRightIcon } from "@heroicons/react/24/solid";

function Hero() {
  const locations = [
    "Beaches",
    "Al Mamzar",
    "Art Foundation",
    "Al-Raha",
    "Corniche",
    "Saadiyat Island",
    "Burj khalifa",
    "Marina",
    "Deira",
    "Jumeirah",
    "Burj al-arab",
  ];

  const cities = ["Fujairah", "Sharjah", "Abu Dhabi", "Dubai"];

  const faqs = [
    "What is the minimum age requirements to rent a car in Dubai ?",
    "What do you need for a luxury car rental in Dubai ?",
    "How much is the insurance limit on luxury car rental Dubai?",
    "What are the driving licenses that can be used in Arab countries ?",
    "Can anyone else drive the car I rent?",
  ];

  return (
    <div className="min-h-screen bg-[#1a1a2e] text-white">
      {/* Hero Section with Ferrari Images */}
      

      Sports Car Rental Section
      <section className="py-20 bg-[#1a1a2e]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">SPORTS CAR RENTAL DUBAI</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-video bg-gray-800 rounded-lg">
              {/* Video placeholder */}
              <div className="w-full h-full flex items-center justify-center">
                Video Player
              </div>
            </div>
            <div>
              <p className="text-lg mb-6">
                Terra L L C a Car is a Top Luxury Car Rental Dubai based
                company. We offer sports car rental, and supercar rental in
                Dubai. The best luxury car rental process provided by our fleet.
                We own a diverse range of luxury supercar rental and sports car
                rental Dubai style, including Rolls Royce, Lamborghini,
                Maserati, Ferrari, Mercedes Benz, Porsche, and Range Rover, to
                name a few.
              </p>
              <button className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition">
                ALL CARS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#1a1a2e]/95">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-700 py-4 cursor-pointer hover:text-red-500 transition flex justify-between items-center"
              >
                <span>{faq}</span>
                <ChevronRightIcon className="w-5 h-5" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-20 bg-[#1a1a2e]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">FOLLOW US ON INSTAGRAM</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="aspect-square bg-gray-800 rounded-lg"
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-[#1a1a2e]/90">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">LOCATION</h3>
              <ul className="space-y-2">
                {locations.map((location, index) => (
                  <li
                    key={index}
                    className="hover:text-red-500 cursor-pointer transition"
                  >
                    {location}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">CITY</h3>
              <ul className="space-y-2">
                {cities.map((city, index) => (
                  <li
                    key={index}
                    className="hover:text-red-500 cursor-pointer transition"
                  >
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
