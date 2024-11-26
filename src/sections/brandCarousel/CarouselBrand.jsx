import Slider from "react-slick";
import { useGet } from "../../hooks/useGet/useGet";

function SampleArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

const CarouselBrand = () => {
  const { data: brands } = useGet("cars");
  const baseURL = import.meta.env.VITE_BASE_URL;

  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 7,
    // speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    rows: 2,
    slidesToScroll: 3,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          marginTop: "40px",
          backgroundColor: "#fff",
          color: "fff",
          borderRadius: "50%",
        }}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto ">
      <h1 className="text-white text-[40px] font-bold mb-5  ">BRANDS</h1>
      <div className="slider-container  text-white ">
        <Slider {...settings}>
          {brands?.data?.data.map((brand) => (
            <div
              key={brand.id}
              className="p-4 mx-5 border-[1px] border-white  transition-all duration-400 bg-gradient-to-r from-[#2d2e31] to-[#111219] hover:from-[#111219] hover:to-[#2d2e31] cursor-pointer "
            >
              <h3>{brand.brand.title}</h3>
              <img
                src={
                  baseURL + "uploads/images/" + brand.car_images[0].image.src
                }
                alt="Brand"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselBrand;
