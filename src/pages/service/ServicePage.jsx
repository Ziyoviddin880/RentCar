import ServiceCard from "../../components/service_card/ServiceCard";

const ServicePage = () => {
  return (
    <>
        <div className="service-page-container bg-[#1E1F27]">
          <div
            className="text-white w-full px-[20vw] border-2 border-solid border-black pt-10 bg-cover bg-center min-h-screen"
          >
            <div className="serviceLinkContainer my-4">
              <a
                className="serviceLink text-gray-400 hover:text-gray-200"
                href="https://terra-rentacar.uz/"
              >
                Luxury Cars for Rent in Dubai / Services
              </a>
            </div>
            <div className="aboutTexts flex flex-col gap-5 mb-1">
              <h1 className="aboutTitle my-8 text-3xl font-bold leading-normal">
                SERVICE
              </h1>
            </div>
            <div className="flex gap-10">
              <ServiceCard />
            </div>
          </div>
        </div>
    </>
  );
};

export default ServicePage;
