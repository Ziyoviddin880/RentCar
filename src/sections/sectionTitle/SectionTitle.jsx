import { NavLink } from "react-router-dom";
import Next from "../../icons/Next";

const SectionTitle = ({ title, link }) => {
  return (
    <div className="container mx-auto mt-16 flex justify-between items-center">
      <h2 className="text-white text-[15px] sm:text-[30px] md:text-[30px]">
        {title.toUpperCase()}
      </h2>
      <NavLink to={link} className="group flex items-center ">
        <span className="group-hover:text-[red] transition-all duration-1000 group-hover:mr-2 text-white text-[12px]  sm:text-[14px] md:text-[15px]">
          SEE ALL
        </span>
        <Next
          className="group-hover:fill-[red] transition-all duration-1000  ml-3 inline-block"
          width="25px"
          fill="white"
        />
      </NavLink>
    </div>
  );
};

export default SectionTitle;
