import { Link } from "react-router-dom";
import ServiceCard from "../../components/service_card/ServiceCard";
import SerCardImg from "/public/images/uslug-1-Dm8nxdJt.jpg";
import SerCardImg2 from "/public/images/uslug-2-LkBjqsZl.jpg";

const ServicePage = () => {
  return (
    <>
      <section className="w-full bg-[#1E1F27]">
        <div className="container">
          <div className="service_box">
            <Link to="/" className="text-[#fff9]">Luxury Cars for Rent in Dubai / Services</Link>
            <div className="flex gap-10">
              <ServiceCard SerCardImg={SerCardImg} id={1} title="Ride a buggy in Dubai and have fun" text="Experience the thrill of a dune buggy tour in Dubai with us. We offer free hotel pick-up & drop-off service. Book now" />
              <ServiceCard SerCardImg={SerCardImg2} id={2} title="Ride a buggy in Dubai and have fun" text="Experience the thrill of a dune buggy tour in Dubai with us. We offer free hotel pick-up & drop-off service. Book now" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicePage;