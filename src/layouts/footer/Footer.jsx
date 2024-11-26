import { NavLink } from "react-router-dom";
import Instagram from "../../icons/Instagram";
import Facebook from "../../icons/Facebook";
import Youtube from "../../icons/Youtube";

const Footer = () => {
  return (
    <div className="container mx-auto flex flex-wrap justify-center sm:justify-between">
      <div className="mt-10">
        <NavLink to="/" className="cursor-pointer">
          <img
            className="w-20 lg:w-24 "
            width="100px"
            src="https://terra-rentacar.uz/assets/logoTerra5-2akSFrzj.png"
            alt="Logotip"
          />
        </NavLink>
        <h2 className="text-[30px] text-white font-bold my-5">
          LUXURY CAR <br /> RENTAL IN <br /> EMIRATES
        </h2>
        <p className="text-white text-opacity-70 my-5">
          Rent sports and luxury cars directly <br /> without intermediaries.
          Rent a car in <br /> Dubai with Auto Zoom Car Rental <br /> - safety
          and driving pleasure
        </p>
        <button className="bg-transparent p-6 border-white border-[1px] rounded-xl text-white  transition-all duration-300 hover:bg-red-500 hover:border-red-500 ">
          GET BEST OFFER
        </button>
      </div>
      <div className="mt-10">
        <NavLink to="/avto" className="text-white text-[15px]">
          CARS
        </NavLink>
        <ul className=" text-gray-400">
          <li className="my-5">
            <NavLink to="/avto" className="hover:text-white">
              Budget cars Rental Emirates
            </NavLink>
          </li>
          <li className="my-5">
            <NavLink to="/avto" className="hover:text-white">
              Sports cars Rental Emirates
            </NavLink>
          </li>
          <li className="my-5">
            <NavLink to="/avto" className="hover:text-white">
              Luxury Cars Rental Emirates
            </NavLink>
          </li>
          <li className="my-5">
            <NavLink to="/avto" className="hover:text-white">
              SUV Cars Rental Emirates
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="mt-10">
        <ul>
          <li>
            <NavLink to="/blog" className="text-white text-[15px]">
              BLOG
            </NavLink>
          </li>
          <li className="mt-10">
            <NavLink to="/uslug" className="text-white text-[15px] mt-10">
              SERVICES
            </NavLink>
          </li>
          <li className="mt-10">
            <NavLink className="text-white text-[15px] mt-10" to="/contact">
              CONTACT
            </NavLink>
          </li>
        </ul>

        <ul className="space-y-2 text-gray-400">
          <li>Elite 3 Sports City, Dubai 26W8 24J, UAE</li>
          <li>+998 99 0000441</li>
          <li>Working hours: 24/7</li>
        </ul>
      </div>
      <div className="mt-10">
        <NavLink className="text-white text-[15px]" to="/about">
          ABOUT US
        </NavLink>
        <ul className=" text-gray-400 mt-5">
          <li>
            <NavLink to="/about" className="hover:text-white">
              Our Team
            </NavLink>
          </li>
          <li className="mt-3">
            <NavLink to="/about" className="hover:text-white">
              FAQ
            </NavLink>
          </li>
        </ul>
        <h3 className="text-white text-[15px]  font-semibold mb-4 mt-12">
          Follow Us
        </h3>
        <div className="flex space-x-4">
          <NavLink to="https://www.instagram.com/">
            <Instagram
              className="w-6 h-6  fill-gray-500 hover:fill-white "
              fill="gray"
              width="15px"
              height="15px"
            />
          </NavLink>
          <NavLink to="https://www.facebook.com/">
            <Facebook
              className="w-6 h-6  fill-gray-500 hover:fill-white "
              fill="gray"
              width="15px"
              height="15px"
            />
          </NavLink>
          <NavLink to="https://www.youtube.com/">
            <Youtube
              className="w-6 h-6 fill-gray-500 hover:fill-white "
              width="15px"
              height="15px"
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
