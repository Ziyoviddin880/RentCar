const CarItem = ({ car }) => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  return (
    <div className="p-5 w-[80%] sm:w-[49%] md:w-[32%] bg-gradient-to-r  hover:from-[#111219] hover:to-[#2d2e31] rounded-2xl cursor-pointer">
      <img
        src={baseURL + "uploads/images/" + car.car_images[0].image.src}
        alt="Car"
      />
      <div className="text-white">
        {car.brand.title} {car.model.name}
      </div>
      <hr className="bg-white my-3" />
      <div>
        <span className="text-white">AED 0</span>
        <span className="text-white text-opacity-60">
          {" "}
          / ${car.price_in_aed}
        </span>
      </div>
      <div className="text-white text-opacity-60">per day</div>
    </div>
  );
};

export default CarItem;
