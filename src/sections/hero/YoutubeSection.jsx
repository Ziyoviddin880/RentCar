import { ArrowRight } from "lucide-react";
import halifa from "../../images/halifa.png";

const YoutubeSection = () => {
   return (
      <div className="w-full pt-20 bg-[#111119]">
         <div className="w-full md:grid md:grid-cols-[auto,45%] flex flex-col">
            <div className="w-full px-4 md:px-0">
               <iframe
                  width="866"
                  height="500"
                  src="https://www.youtube.com/embed/rsHmvxJ86PA"
                  title="Terra-rentacar"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-auto aspect-video"
               />
            </div>
            <div className="relative p-6 md:p-12 text-white min-h-[35rem]">
               <div className="relative z-10 max-w-[90%]">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                     SPORTS CAR RENTAL DUBAI
                  </h1>
                  <p className="text-lg md:text-xl mb-6 md:mb-8">
                     Terra L L C a Car is a Top Luxury Car Rental Dubai based
                     company, We offer sports car rental, and supercar rental in
                     Dubai. The best luxury car rental process provided by our
                     fleet. We own a diverse range of luxury supercar rental and
                     sports car rental Dubai style, including Rolls Royce,
                     Lamborghini, Maserati, Ferrari, Mercedes Benz, Porsche, and
                     Range Rover, to name a few. Rent a car with the best car
                     rental company in Dubai.
                  </p>
                  <a
                     href="https://terra-rentacar.uz/avto"
                     className="inline-flex items-center text-white hover:text-red-500 transition-all duration-300 group text-lg md:text-xl"
                  >
                     <span className="mr-2 group-hover:mr-4 transition-all duration-300">
                        ALL CARS
                     </span>
                     <ArrowRight className="w-5 h-5 transition-all duration-300" />
                  </a>
               </div>
               <div className="absolute inset-0 overflow-hidden">
                  <img
                     src={halifa}
                     alt="Khalifa Building"
                     className="h-full w-auto min-w-full object-cover object-center brightness-[0.3]"
                     loading="lazy"
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default YoutubeSection;
