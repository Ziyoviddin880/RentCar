import { Outlet } from "react-router-dom";
import Header from "../header/Header";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default RootLayout;
