import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";

const ProductDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const imageBaseUrl = "https://realauto.limsa.uz/api/uploads/images/";

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await api.get(`/cars/${id}`);
        setCar(response.data.data);
      } catch (error) {
        console.error("Error fetching car details:", error);
      }
    };

    fetchCarDetails();
  }, [id]);

  if (!car) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-[#1E1F27] text-white min-h-screen py-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">
          {car.brand?.title.toUpperCase()} ({car.color})
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <img
              src={`${imageBaseUrl}${car.car_images?.[0]?.image.src}`}
              alt={car.model?.name}
              className="w-full h-80 object-contain rounded-md mb-6 shadow-lg"
            />

            <div className="flex justify-between items-center text-sm space-x-4">
              <div>
                <p className="text-gray-300">Deposit</p>
                <p className="font-semibold">AED {car.deposit || "0"}</p>
              </div>
              <div>
                <p className="text-gray-300">Premium Protection</p>
                <p className="font-semibold">AED {car.premium_protection || "N/A"}</p>
              </div>
              <div>
                <p className="text-gray-300">Price per day</p>
                <p className="font-semibold">
                  AED {car.price_in_aed || "0"} / ${car.price_in_usd || "0"}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              {car.car_images?.map((image, index) => (
                <img
                  key={index}
                  src={`${imageBaseUrl}${image.image.src}`}
                  alt={`Car Image ${index + 1}`}
                  className="w-full h-24 object-cover rounded-md shadow-md"
                />
              ))}
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Car Details</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Year:</strong> {car.year || "Unknown"}
              </li>
              <li>
                <strong>Top Speed:</strong> {car.max_speed || "Unknown"} km/h
              </li>
              <li>
                <strong>0-100 km/h:</strong> {car.seconds || "N/A"} seconds
              </li>
              <li>
                <strong>Kilometer Limit:</strong> {car.limitperday || "Unlimited"} km/day
              </li>
              <li>
                <strong>Transmission:</strong> {car.transmission || "Automatic"}
              </li>
              <li>
                <strong>Fuel Type:</strong> {car.fuel || "Petrol"}
              </li>
            </ul>

            <div className="flex justify-between mt-6">
              <a
                href={`https://wa.me/97112345678?text=I'm interested in ${car.brand?.title} ${car.model?.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white py-2 px-4 rounded-md flex items-center justify-center shadow-md"
              >
                WhatsApp
              </a>
              <a
                href={`tel:+97112345678`}
                className="bg-yellow-500 text-white py-2 px-4 rounded-md flex items-center justify-center shadow-md"
              >
                Call
              </a>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Send an Inquiry</h4>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white"
                />
                <input
                  type="text"
                  placeholder="Period"
                  className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white"
                />
                <textarea
                  placeholder="Details"
                  rows="4"
                  className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-orange-500 py-2 rounded-md text-white font-semibold"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
