const AboutPage = () => {
  return (
    <>
      <div className="relative text-white w-full px-[20vh] border-2 border-solid border-black pt-10 bg-[url('/images/about/aboutPageBackground.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10">
          <div className="aboutLinkContainer my-4">
            <a
              className="aboutLink text-gray-400 hover:text-gray-200"
              href="https://terra-rentacar.uz/"
            >
              Luxury Cars for Rent in Dubai / aboutUs
            </a>
          </div>
          <div className="aboutTexts flex flex-col gap-5 mb-16">
            <h1 className="aboutTitle my-10 text-3xl font-bold leading-normal">
              ABOUT US
            </h1>
            <h3 className="aboutSubtitle font-semibold text-3xl">
              Welcome to Auto Zoom Car Rental Co LLC - Your Partner in
              Unforgettable Journeys in Dubai!
            </h3>
            <p className="aboutParagraph text-[1.25rem]">
              In a world where every trip is an adventure, Auto Zoom Car Rental
              Co LLC offers you a unique car rental experience in the heart of
              Dubai.
            </p>
            <h3 className="aboutSubtitle font-bold text-3xl mt-8">
              Why Auto Zoom?
            </h3>
            <p className="aboutParagraph text-[1.25rem] mt-4">
              <span className="font-bold"> Elegant Car Fleet:</span>We provide
              you the opportunity to choose from our luxurious car fleet - from
              sleek sedans to powerful SUVs. We have a vehicle to match your
              style and meet your needs.
            </p>
            <p className="aboutParagraph text-[1.25rem] mt-4">
              <span className="font-bold">Worry-Free Rental:</span> Our goal is
              to make your journey as comfortable as possible. Flexible rental
              terms, the option to hire with a driver, and a wide range of
              additional services – all for your convenience.
            </p>
            <p className="aboutParagraph text-[1.25rem] mt-4">
              <span className="font-bold">Transparency and Trust:</span> We
              value every customer, so our prices are honest and transparent. No
              hidden fees, no unexpected surprises. Trust us, and we will make
              your rental experience straightforward and clear.
            </p>
            <p className="aboutParagraph text-[1.25rem] mt-4">
              <span className="font-bold">Service at Your Level:</span> Our
              friendly and professional team is ready to bring your ideas to
              life. We aim not just to provide a car but to create a genuine
              automotive experience for you.
            </p>
            <h3 className="aboutSubtitle font-bold text-2xl mt-16">
              Our Mission:
            </h3>
            <p className="aboutParagraph text-[1.25rem] mt-4">
              Auto Zoom Car Rental Co LLC is created with one goal - to make
              every journey unforgettable. We strive to offer you not just a car
              but the key to new experiences and adventures.
            </p>
            <h3 className="aboutSubtitle font-bold text-2xl">Contact Us:</h3>
            <p className="aboutParagraph text-[1.25rem]">
              Trust the professionals - trust Auto Zoom Car Rental Co LLC. Get
              in touch with us today to start your exciting journey through
              Dubai in our stylish and reliable cars. Allow yourself to savor
              every moment of your trip.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
