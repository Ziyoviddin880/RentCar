import { useGet } from "../../hooks/useGet/useGet";
import CarItem from "./CarItem";

const CarsBox = ({ nameEn }) => {
  const { data: cars } = useGet("cars");

  const filteredCars = cars?.data?.data.filter((car) => {
    return car.category.name_en === nameEn;
  });

  return (
    <div className="container justify-center sm:justify-start mx-auto flex w-full flex-wrap gap-[2%] mt-5">
      {filteredCars?.map((car, index) => {
        if (index < 3) return <CarItem key={car.id} car={car} />;
      })}
    </div>
  );
};

export default CarsBox;
