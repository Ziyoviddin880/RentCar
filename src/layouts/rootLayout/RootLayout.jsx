import { Outlet, NavLink } from "react-router-dom";
import Header from "../header/Header";

const RootLayout = () => {
  return (
    <>
      <Header />

      <div>
        {/* <NavLink to="/">Home</NavLink>
        <NavLink to="/avto">Cars</NavLink>
        <NavLink to="/brand">Brand</NavLink>
        <NavLink to="/uslug">Services</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/product">Product</NavLink> */}

        {/* <NavLink to="/product/id">Product</NavLink> */}
        {/* bu yerda 1 ta productni olish uchun id so'zini o'rniga realniny id
        bersa ProductItemPagega o'tkazadi */}
      </div>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default RootLayout;
