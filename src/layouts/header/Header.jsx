import { NavLink } from "react-router-dom";
import EnglishFlag from "../../icons/EnglishFlag";
import RussianFlag from "../../icons/RussianFlag";
import Search from "../../icons/Search";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Menu from "../../icons/Menu";
import Nav from "../nav/Nav";
import Cancel from "../../icons/Cancel";
import MobileMenu from "../mobileMenu/MobileMenu";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(localStorage.getItem("i18nextLng") || "en");
  const [searchMobile, setSearchMobile] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };

  return (
    <header className="bg-[#111219] py-4 px-8">
      <div className="container mx-auto  text-white flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button
            onClick={() => changeLanguage("ru")}
            className={
              lang === "ru"
                ? "border-solid border-2 border-[red] rounded-full "
                : ""
            }
          >
            <RussianFlag width="25px" />
          </button>
          <button
            onClick={() => changeLanguage("en")}
            className={
              lang === "en"
                ? "border-solid border-2 border-[red] rounded-full "
                : ""
            }
          >
            <EnglishFlag width="25px" />
          </button>
          <div className="block lg:hidden">
            <button onClick={() => setSearchMobile(true)}>
              <Search width="24px" fill="white" />
            </button>
          </div>
          <div
            className={
              "absolute top-20  left-1/2 -translate-x-1/2 lg:static lg:-translate-x-0 lg:flex p-2 lg:ml-2  bg-gradient-to-r from-[#2d2e31] to-[#111219] rounded-[10px] gap-2 " +
              (searchMobile ? "flex" : "hidden")
            }
          >
            <button>
              <Search width="24px" fill="white" />
            </button>
            <input
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className=" bg-transparent border-none outline-none"
              type="text"
              placeholder={t("input.search")}
            />
            <div className="block lg:hidden">
              <Cancel
                onClick={() => {
                  setSearchMobile(false);
                  setInputVal("");
                }}
                width="20px"
                fill="white"
              />
            </div>
          </div>
        </div>
        <NavLink to="/" className="cursor-pointer">
          <img
            className="w-20 lg:w-24 "
            width="100px"
            src="https://terra-rentacar.uz/assets/logoTerra5-2akSFrzj.png"
            alt="Logotip"
          />
        </NavLink>
        <div className="hidden lg:block">
          <Nav setMobileMenu={setMobileMenu} />
          <div className="text-right mt-4">
            <a className=" hover:text-red-400" href="tel:+998990000441">
              +998 (99) 000 04 41
            </a>
          </div>
        </div>
        <div className="lg:hidden w-4 h-4">
          <Menu onClick={() => setMobileMenu(true)} fill="white" />
        </div>
      </div>
      <MobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
    </header>
  );
};

export default Header;
