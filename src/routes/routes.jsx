import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/rootLayout/RootLayout";
import HomePage from "../pages/home/HomePage";
import AvtoPage from "../pages/avto/AvtoPage";
import ProductPage from "../pages/product/ProductPage";
import AboutPage from "../pages/about/AboutPage";
import ContactPage from "../pages/contact/ContactPage";
import BlogPage from "../pages/blog/BlogPage";
import ServicePage from "../pages/service/ServicePage";
import BrandPage from "../pages/brand/BrandPage";
import ProductItem from "../pages/productItem/ProductItem";
import NotFoundPage from "../pages/notFound/NotFoundPage";
import Error from "../pages/error/Error";
import ProductDetails from "../components/ProductDetails";
import UslugItem from "../pages/uslugItem/UslugItem";
import BlogData from "../pages/blog/BlogData";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "avto",
        element: <AvtoPage />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,

      },
      {
        path: "product",
        element: <ProductPage />,
      },
      {
        path: "product/:id",
        element: <ProductItem />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "blog/:id",
        element: <BlogData />,
      },
      {
        path: "uslug",
        element: <ServicePage />,
      },
      {
        path: "uslug/:id",
        element: <UslugItem />
      },
      {
        path: "brand",
        element: <BrandPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
