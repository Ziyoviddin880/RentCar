import Cancel from "../../icons/Cancel";
import Nav from "../nav/Nav";

const MobileMenu = ({ mobileMenu, setMobileMenu }) => {
  return (
    <div
      className={
        "fixed lg:hidden transition-all duration-1000 top-0 w-3/4 md:w-1/2 p-5 h-screen bg-black " +
        (mobileMenu ? "right-0" : "-right-full")
      }
    >
      <div className="flex justify-end  ">
        <Cancel
          onClick={() => setMobileMenu(false)}
          width="25px"
          fill="white"
        />
      </div>
      <div>
        <Nav setMobileMenu={setMobileMenu} />
      </div>
    </div>
  );
};

export default MobileMenu;
