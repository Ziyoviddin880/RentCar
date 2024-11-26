import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer className="w-full bg-[#111219] py-8 px-8">
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
