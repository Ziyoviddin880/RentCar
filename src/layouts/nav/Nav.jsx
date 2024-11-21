import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
const Nav = ({ setMobileMenu }) => {
  const { t } = useTranslation();

  const nav = [
    {
      id: 1,
      item: t("menu.cars"),
      link: "/avto",
    },
    {
      id: 2,
      item: t("menu.brand"),
      link: "/brand",
    },
    {
      id: 3,
      item: t("menu.service"),
      link: "/uslug",
    },
    {
      id: 4,
      item: t("menu.about"),
      link: "/about",
    },
    {
      id: 5,
      item: t("menu.contact"),
      link: "/contact",
    },
    {
      id: 6,
      item: t("menu.blog"),
      link: "/blog",
    },
  ];

  return (
    <ul className="text-white lg:flex gap-4 mt-7 lg:mt-0 ml-6 lg:ml-0">
      {nav.map((item) => (
        <li
          onClick={() => setMobileMenu(false)}
          key={item.id}
          className="mb-4 lg:mb-0"
        >
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-red-500 " : " hover:text-red-400"
            }
            to={item.link}
          >
            {item.item}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
