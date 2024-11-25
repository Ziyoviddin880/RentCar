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
            errorElement: <Error />,
         },
         {
            path: "/product/:id",
            element: <ProductDetails />,
            errorElement: <Error />,
         },
         {
            path: "product",
            element: <ProductPage />,
            errorElement: <Error />,
         },
         {
            path: "product/:id",
            element: <ProductItem />,
            errorElement: <Error />,
         },
         {
            path: "about",
            element: <AboutPage />,
            errorElement: <Error />,
         },
         {
            path: "contact",
            element: <ContactPage />,
            errorElement: <Error />,
         },
         {
            path: "blog",
            element: <BlogPage />,
            errorElement: <Error />,
         },
         {
            path: "uslug",
            element: <ServicePage />,
            errorElement: <Error />,
         },
         {
            path: "brand",
            element: <BrandPage />,
            errorElement: <Error />,
         },
         {
            path: "*",
            element: <NotFoundPage />,
         },
      ],
   },
]);
