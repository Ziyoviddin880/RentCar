import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import redFerrari from "../../images/redFerrari.png";
import { HelpCircle } from "lucide-react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

const faqData = [
   {
      question: "What is the minimum age requirements to rent a car in Dubai ?",
      answer:
         "Drivers under 25 must have a license for a minimum of three years. The same applies for the person(s) whose name(s) is/are mentioned as additional driver.",
   },
   {
      question: "What do you need for a luxury car rental in Dubai ?",
      answer:
         "Drivers shall be required to have a valid driver's license and Passport copy.",
   },
   {
      question: "How much is the Insurance limit on luxury car rental Dubai?",
      answer:
         "Includes an overall Motor Vehicle Insurance. 3000-5000 AED for Excess Luxury Cars. 7000-10000 AED for Sports Cars.",
   },
   {
      question:
         "What are the driving licenses that can be used in Arab countries ?",
      answer:
         "Local driving license for UAE citizens. International driving licenses issued by the following countries: 1. Kingdom of Saudi Arabia, 2. Egypt, 3. Bahrain, 4. Jordan, 5. Kuwait, 6. Tunisia, 7. Sultanate of Oman, 8. Algeria, 9. Qatar, 10. Morocco, 11. Sudan, 12. Somalia, 13. Palestine, 14. Lebanon, 15. Libya, 16. Syria, 17 Yemen, 18. Iraq, 19. Djibouti, 20. Comoros, 21. Mauritania.",
   },
   {
      question: "Can anyone else drive the car i rent?",
      answer:
         "The contract prescribes two drivers, but at the time of filling out the contract, you must provide a driver's license and passport.",
   },
];

const Faq = () => {
   const [openIndex, setOpenIndex] = useState(null);

   const toggleQuestion = (index) => {
      setOpenIndex(openIndex === index ? null : index);
   };

   return (
      <div className="w-full bg-[#1f1f27] text-white relative">
         {/* Fixed height container for background image */}
         <div
            className="absolute inset-0 overflow-hidden"
            style={{ height: "700px" }}
         >
            <img
               src={redFerrari}
               alt="Red Ferrari Background"
               className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[90%] object-contain opacity-30"
               loading="lazy"
            />
         </div>

         {/* Content container */}
         <div className="relative z-10 py-8 sm:py-16 px-4 md:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12">
               FAQ
            </h1>
            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
               {faqData.map((item, index) => (
                  <div key={index} className="border-b border-gray-600/30">
                     <button
                        onClick={() => toggleQuestion(index)}
                        className="w-full text-left py-3 sm:py-4 flex items-center justify-between group"
                     >
                        <div className="flex items-center space-x-3 sm:space-x-4">
                           <ChevronRight
                              className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 ${
                                 openIndex === index ? "rotate-90" : ""
                              }`}
                           />
                           <span className="text-base sm:text-lg md:text-xl group-hover:text-red-500 transition-colors duration-200 pr-4">
                              {item.question}
                           </span>
                        </div>
                     </button>
                     <div
                        className={`overflow-hidden transition-all duration-300 ${
                           openIndex === index
                              ? "max-h-96 opacity-100 mb-4"
                              : "max-h-0 opacity-0"
                        }`}
                     >
                        <div className="bg-[#343844]/80 p-3 sm:p-4 rounded-md text-sm sm:text-base text-gray-300">
                           {item.answer}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Faq;
