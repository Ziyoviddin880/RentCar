import { NavLink } from "react-router-dom";
import Next from "../../icons/Next";

const Catalog = () => {
  return (
    <div className="container mx-auto text-center text-white">
      <h1 className="text-[30px] font-bold md:text-[40px]">
        TOP LUXURY CAR RENTAL EMIRATES <br />
        №1
      </h1>
      <p className="my-6">
        Best sports car & supercar rental Emirates, Exclusive offers on luxury
        car rental Emirates Cheap price
      </p>
      <NavLink to="/avto" className="group ">
        <span className="group-hover:text-[red] transition-all duration-1000 group-hover:mr-2">
          RENT A CAR EMIRATES CATALOG
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

export default Catalog;
