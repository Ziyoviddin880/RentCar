import React from "react";
import LeftFerrari from "../../images/LeftFerrari.png";
import RightFerrari from "../../images/RightFerrari.png";
const TwoFerrari = () => {
   return (
      <div>
         <div className="grid grid-cols-1 md:grid-cols-5 md:px-12 bg-[#27313b] py-24">
            <section className="hidden md:block md:col-span-1 h-fit">
               <img
                  src={LeftFerrari}
                  alt="Left Ferrari Image"
                  className="w-full h-auto"
               />
            </section>
            <section className="text-white px-4 md:px-8 md:col-span-3">
               <h1 className="text-[1.8rem] md:text-[2.5rem] mb-3 md:mb-5">
                  LUXURY CAR RENTAL IN EMIRATES
               </h1>
               <p className="text-[1rem] md:text-[1.125rem]">
                  Are you ready to feel the adrenaline rush and unleash your
                  inner speed demon? Look no further than Terra luxury car
                  rental Dubai, the city where dreams become reality. In this
                  ultimate guide to sports car rental Dubai, we will take you on
                  a thrilling journey through the world of luxury and supercar
                  rental Dubai. Imagine cruising down the iconic Sheikh Zayed
                  Road in a sleek and powerful sports car rental Dubai style,
                  turning heads and leaving everyone in awe of your style.
                  Whether you are a car enthusiast or simply looking to
               </p>
               <h1 className="text-[1.8rem] md:text-[2.5rem] mb-3 md:mb-5 mt-3">
                  What are the requirements to rent a luxury car in Dubai?
               </h1>
               <p className="text-[1rem] md:text-[1.125rem]">
                  To rent a car Dubai, it's enough to have a valid driving
                  license and enough funds. & you'll need to show your foreign
                  passport and prove that you have come of age and have driving
                  experience.The age limit and the requirements for the license
                  depend on where you're from. Visitors from Europe, the UK, the
                  US and the Middle East can drive with their national licenses.
                  People from other parts of the world need an international
                  license. The age limit for the driver might vary from 21 to 25
                  years. Please get in touch with us before placing an order to
                  discuss your individual situation.Cars in the UAE have
                  steering wheels on the left side. Drivers stick to the right
                  side of the road.If needed, you can add a second driver to
                  your rental contract. The requirements for this person will be
                  the same as for the first driver. If you let someone who isn't
                  mentioned in your rental contract take a place behind the
                  wheel, you can get a fine.The duration of a premium car rental
                  in Dubai can vary from one day to several weeks. Discounts are
                  common for luxury car rental Dubai monthly car rental plan.
                  Use this chance to have fun, increase your high social status
                  and please your dearest and nearest!Please avoid smoking
                  inside the rented vehicle.
               </p>
            </section>
            <section className="hidden md:block md:col-span-1 h-fit">
               <img
                  src={RightFerrari}
                  alt="Right Ferrari image"
                  className="w-full h-auto"
               />
            </section>
         </div>
      </div>
   );
};

export default TwoFerrari;
