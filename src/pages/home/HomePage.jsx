import Catalog from "../../sections/catalog/Catalog";
import Carousel from "../../sections/carousel/Carousel";
import CarouselBrand from "../../sections/brandCarousel/CarouselBrand";
import SectionTitle from "../../sections/sectionTitle/SectionTitle";
import CarsBox from "../../sections/sectionCar/CarsBox";
import ServicePage from "../service/ServicePage";

const HomePage = () => {
  return (
    <>
      <section
        style={{
          boxShadow: "-1px -4px 4px 0px rgba(224,62,62,0.75)",
        }}
        className="mt-0 bg-[#111219] py-10 px-8"
      >
        <Catalog />
      </section>
      <section className="py-20 bg-[#343744] px-8">
        <Carousel />
      </section>
      <section className="py-20 px-8 bg-[#120E13] overflow-hidden">
        <CarouselBrand />
      </section>

      <section className=" py-20 px-8 bg-[#190608]">
        <SectionTitle title={"Budget cars Rental Emirates"} />
        <CarsBox nameEn="Budget cars Rental Emirates" />

        <SectionTitle title={"Sports cars Rental Emirates"} />
        <CarsBox nameEn="Sports cars Rental Emirates" />

        <SectionTitle title={"Hyper Cars Rental Emirates"} />
        <CarsBox nameEn="Hyper Cars Rental Emirates" />

        <SectionTitle title={"Luxury Cars Rental Emirates"} />
        <CarsBox nameEn="Luxury Cars Rental Emirates" />

        <SectionTitle title={"Cabriolet cars rental Emirates"} />
        <CarsBox nameEn="Cabriolet cars rental Emirates" />
      </section>

      <section className="bg-[#1E1F27] py-20 px-8">
        <h2 className="text-white text-[30px] mb-8">SERVICE</h2>
        <ServicePage />
      </section>
    </>
  );
};

export default HomePage;
