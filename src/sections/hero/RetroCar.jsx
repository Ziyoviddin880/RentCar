import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { LazyImage } from "../../utils/lazyImage";
import retroFerrari from "../../images/retroFerrari.png";

const RetroCar = () => {
   return (
      <div className="w-full flex flex-col md:flex-row bg-[#343844]">
         <div className="w-full md:w-1/2">
            <img
               src={retroFerrari}
               alt="Retro Ferrari"
               className="w-full h-full object-cover"
               loading="lazy"
            />
         </div>
         <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-12">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">
               SUPERCAR RENTAL DUBAI
            </h1>
            <p className="text-base md:text-xl text-white mb-6 md:mb-8">
               Hire the latest supercar
            </p>
            <Link
               to="/avto"
               className="inline-flex items-center text-white hover:text-red-500 transition-all duration-300 group text-sm md:text-lg"
            >
               <span className="mr-2 group-hover:mr-4 transition-all duration-300">
                  SEE ALL
               </span>
               <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-all duration-300" />
            </Link>
         </div>
      </div>
   );
};

export default RetroCar;
