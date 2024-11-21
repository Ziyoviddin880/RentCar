import Catalog from "../../sections/catalog/Catalog";
import Carousel from "../../sections/carousel/Carousel";

const HomePage = () => {
  return (
    <>
      <section
        style={{
          boxShadow: "-1px -4px 4px 0px rgba(224,62,62,0.75)",
        }}
        className="mt-0 bg-[#111219] py-10"
      >
        <Catalog />
      </section>
      <section>
        <Carousel />
      </section>
    </>
  );
};

export default HomePage;
