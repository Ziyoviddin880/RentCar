import React, { useEffect, useState, useRef } from "react";
import api from "../api/api";
import { toast } from "react-toastify";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Cars() {
  const [cars, setCars] = useState([]);
  const [selectedCarTypes, setSelectedCarTypes] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedModel, setSelectedModel] = useState("");
  const [filteredModels, setFilteredModels] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const imageBaseUrl = "https://realauto.limsa.uz/api/uploads/images/";
  const {t}= useTranslation()

  const filteredCarsRef = useRef(null);

  const FetchCars = async () => {
    try {
      const response = await api.get("/cars");
      const fetchedCars = response?.data?.data || [];
      setCars(fetchedCars);
      setFilteredCars(fetchedCars);

<<<<<<< HEAD

=======
>>>>>>> c01864288fcb53d70fb0c71dcbdc514adc49f357
      const categories = [
        ...new Set(fetchedCars.map((car) => car.category?.name_en)),
      ].filter(Boolean);
      setUniqueCategories(categories);

      setFilteredModels([
        ...new Set(fetchedCars.map((car) => car.model?.name)),
      ]);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    FetchCars();
  }, []);

  const getMainImage = (carImages) => {
    const mainImage = carImages?.find((image) => image.is_main);
    return mainImage ? mainImage.image.src : null;
  };

  const handleCheckboxChange = (e, setSelectedFunction) => {
    const value = e.target.value;
    setSelectedFunction((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
  };

  const applyFilters = () => {
    const filtered = cars.filter((car) => {
      const isCategoryMatch = selectedCarTypes.length
        ? selectedCarTypes.includes(car.category?.name_en)
        : true;
      const isBrandMatch = selectedBrands.length
        ? selectedBrands.includes(car.brand?.title)
        : true;
      const isModelMatch = selectedModel
        ? car.model?.name === selectedModel
        : true;

      return isCategoryMatch && isBrandMatch && isModelMatch;
    });

    setFilteredCars(filtered);

    if (filteredCarsRef.current) {
      filteredCarsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filterModelsByBrands = () => {
    if (selectedBrands.length === 0) {
      setFilteredModels([...new Set(cars.map((car) => car.model?.name))]);
    } else {
      const models = cars
        .filter((car) => selectedBrands.includes(car.brand?.title))
        .map((car) => car.model?.name)
        .filter(Boolean);
      setFilteredModels([...new Set(models)]);
    }
  };

  const getUniqueBrands = () => {
    const brands = cars.map((car) => car.brand?.title).filter(Boolean);
    return [...new Set(brands)];
  };

  const resetFilters = () => {
    setSelectedCarTypes([]);
    setSelectedBrands([]);
    setSelectedModel("");
    setFilteredCars(cars);
    setFilteredModels([...new Set(cars.map((car) => car.model?.name))]);
  };

  useEffect(() => {
    filterModelsByBrands();
  }, [selectedBrands]);

  return (
    <div className="container-fluid mx-auto py-8 bg-[#1E1F27]">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4 bg-gray-800 p-6 rounded-lg h-[1200px] overflow-y-auto">
          <img width={198} height={38} src={logo} alt="terra logo" />
          <h4 className="text-white text-xl font-semibold mb-4 md:mb-0 md:ml-4 pb-5">
            Filter By <br /> Offers
          </h4>

          <h2 className="text-xl font-semibold text-white mb-4 border-t-2 pt-5">
            Car Type
          </h2>
          <div className="flex flex-col gap-2 mb-6">
            {uniqueCategories.map((type, index) => (
              <label
                key={index}
                className="flex cursor-pointer items-center text-white"
              >
                <input
                  type="checkbox"
                  value={type}
                  onChange={(e) => handleCheckboxChange(e, setSelectedCarTypes)}
                  className="mr-2 rounded focus:ring-0 border-gray-500"
                />
                {type}
              </label>
            ))}
          </div>

          <h2 className="text-xl font-semibold text-white mb-4 border-t-2 pt-5">
            Brand
          </h2>
          <div className="flex flex-col gap-2 border-b-2 pb-5 ">
            {getUniqueBrands().map((brand, index) => (
              <label
                key={index}
                className="flex cursor-pointer items-center text-white"
              >
                <input
                  type="checkbox"
                  value={brand}
                  onChange={(e) => handleCheckboxChange(e, setSelectedBrands)}
                  checked={selectedBrands.includes(brand)}
                  className="mr-2 rounded focus:ring-0 border-gray-500"
                />
                {brand}
              </label>
            ))}
          </div>

          <h2 className="text-xl font-semibold text-white mb-4  pt-5">Model</h2>
          <div className="flex flex-col gap-2">
            <select
              className="bg-gray-700 text-white rounded-md p-2 mb-4"
              value={selectedModel}
              onChange={handleModelChange}
            >
              <option value="">Select Model</option>
              {filteredModels.map((model, index) => (
                <option key={index} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-2">
            <button
              onClick={resetFilters}
              className="bg-red-500 text-white py-2 px-4 rounded-md"
            >
              Reset
            </button>
            <button
              onClick={applyFilters}
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              Apply
            </button>
          </div>
        </div>

        <div className="flex-1 pr-5" ref={filteredCarsRef}>
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h3 className="text-white text-2xl md:text-3xl font-semibold mb-4 md:mb-0">
              Luxury Cars for Rent in Dubai / Hire the Latest Supercar
            </h3>
          </div>

<<<<<<< HEAD


<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {filteredCars.length > 0 ? (
    filteredCars.map((car) => {
      const mainImageSrc = getMainImage(car.car_images);
      return (
        <Link
          to={`/product/${car.id}`}
          key={car.id}
          className="bg-gray-900 h-full cursor-pointer text-white p-4 rounded-lg shadow-lg hover:bg-gray-700 flex flex-col"
        >
          <img
            src={
              mainImageSrc
                ? `${imageBaseUrl}${mainImageSrc}`
                : "https://via.placeholder.com/300"
            }
            alt={car.model?.name || "Car"}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-lg font-semibold mb-2">
            {car.brand?.title} {car.model?.name}
          </h2>
          <p className="text-md mb-2">
            AED {car.price_in_aed || "0"} / ${" "}
            {car.price_in_usd || "0"}
          </p>
          <p className="text-sm text-gray-400 mb-4">
            Limit per day: {car.limitperday || "Unlimited"} km
          </p>
          <div className="flex gap-2 mt-auto">
            <a
              href={`https://wa.me/97112345678?text=I'm interested in ${car.brand?.title} ${car.model?.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-500 text-white py-2 px-1 rounded-md flex items-center justify-center space-x-2"
            >
              <FaWhatsapp className="text-xl" />
              <span>WhatsApp</span>
            </a>
            <a
              href={`https://t.me/share/url?url=&text=I'm interested in ${car.brand?.title} ${car.model?.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-600 text-white py-2 px-1 rounded-md flex items-center justify-center space-x-2"
            >
              <FaTelegram className="text-xl" />
              <span>Telegram</span>
            </a>
=======
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredCars.length > 0 ? (
              filteredCars.map((car) => {
                const mainImageSrc = getMainImage(car.car_images);
                return (
                  <Link
                    to={`/product/${car.id}`}
                    key={car.id}
                    className="bg-gray-900 h-full cursor-pointer text-white p-4 rounded-lg shadow-lg hover:bg-gray-700 flex flex-col"
                  >
                    <img
                      src={
                        mainImageSrc
                          ? `${imageBaseUrl}${mainImageSrc}`
                          : "https://via.placeholder.com/300"
                      }
                      alt={car.model?.name || "Car"}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <h2 className="text-lg font-semibold mb-2">
                      {car.brand?.title} {car.model?.name}
                    </h2>
                    <p className="text-md mb-2">
                      AED {car.price_in_aed || "0"} / ${" "}
                      {car.price_in_usd || "0"}
                    </p>
                    <p className="text-sm text-gray-400 mb-4">
                      Limit per day: {car.limitperday || "Unlimited"} km
                    </p>
                    <div className="flex gap-2 mt-auto">
                      <a
                        href={`https://wa.me/97112345678?text=I'm interested in ${car.brand?.title} ${car.model?.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-green-500 text-white py-2 px-1 rounded-md flex items-center justify-center space-x-2"
                      >
                        <FaWhatsapp className="text-xl" />
                        <span>WhatsApp</span>
                      </a>
                      <a
                        href={`https://t.me/share/url?url=&text=I'm interested in ${car.brand?.title} ${car.model?.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-blue-600 text-white py-2 px-1 rounded-md flex items-center justify-center space-x-2"
                      >
                        <FaTelegram className="text-xl" />
                        <span>Telegram</span>
                      </a>
                    </div>
                  </Link>
                );
              })
            ) : (
              <p className="text-center text-white">No cars available.</p>
            )}
>>>>>>> c01864288fcb53d70fb0c71dcbdc514adc49f357
          </div>
        </div>
      </div>
    </div>
  );
}
