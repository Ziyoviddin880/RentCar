import { useGet } from "../../hooks/useGet/useGet";
import { useState } from "react";

const MultiCardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data: cars } = useGet("cars");
  const { data: brands } = useGet("brands");

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cars?.data?.data.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + cars?.data?.data.length) % cars?.data?.data.length
    );
  };
  if (currentIndex > cars?.data?.data.length - 3) {
    console.log(currentIndex);
    setCurrentIndex(0);
  }
  return (
    <div className="mt-2">
      <div className="w-11/12 ">
        <div className="relative">
          <div className="flex space-x-4">
            {cars?.data?.data
              .slice(currentIndex, currentIndex + 3)
              .map((card) => (
                <div
                  className="flex-none  p-4 bg-white rounded-lg shadow-md"
                  key={card.id}
                >
                  <img
                    className="w-full h-32 object-cover mb-4 rounded-lg"
                    src={
                      "https://realauto.limsa.uz/api/uploads/images/" +
                      card.car_images[0].image.src
                    }
                    alt="Card"
                  />
                  <h3 className="text-lg font-bold">{card.title}</h3>
                  <p className="text-gray-500">{card.description}</p>
                </div>
              ))}
          </div>
          <div className="flex items-center justify-between mt-4 relative  bottom-44 ">
            <button
              className="w-6 h-6 rounded-full bg-gray-300  relative right-4"
              onClick={handlePrev}
            >
              &lt;
            </button>
            <button
              className="w-6 h-6 rounded-full bg-gray-300 relative left-10"
              onClick={handleNext}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiCardCarousel;
