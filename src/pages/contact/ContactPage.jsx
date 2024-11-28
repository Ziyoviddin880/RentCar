import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { IoMailOpenOutline } from "react-icons/io5";


const ContactPage = () => {
  return (
    <div className="contact-page-container bg-[#0E0F15]">
      <div
        className="text-white w-full px-[20vw] border-2 border-solid border-black pt-10 bg-cover bg-center min-h-screen"
      >
        <div className="contactLinkContainer my-4">
          <a
            className="contactLink text-gray-400 hover:text-gray-200"
            href="https://terra-rentacar.uz/"
          >
            Luxury Cars for Rent in Dubai / Contacts
          </a>
        </div>
        <div className="aboutTexts flex flex-col gap-5 mb-16">
          <h1 className="aboutTitle my-10 text-3xl font-bold leading-normal">
            HAVE ANY QUESTIONS?
          </h1>
          <a
            className="contactLink text-gray-400 hover:text-gray-200"
            href="https://terra-rentacar.uz/"
          >
            We will be glad to help
          </a>
          <h2 className="text-[26px] ml-[45px] font-bold mt-10 mb-10">Head office</h2>
          <div className="flex items-center gap-7 ">
            <CiLocationOn className="text-[25px]" />
            <a className="text-[18px] font-semibold" href="https://terra-rentacar.uz/">Elite 3 Sports City, Dubai 26W8 24J, United Arab Emirates</a>
          </div>
          <div className="flex items-center gap-7 ">
            <BsTelephone
              className="text-[22px]" />
            <a className="text-[18px] font-semibold" href="tel:+998931919737">+998931919737</a>
          </div>
          <div className="flex items-center gap-7 ">
            <IoMailOpenOutline className="text-[25px]" />
            <a className="text-[18px] font-semibold" href="https://terra-rentacar.uz/">terra-rentacar.mail.ru</a>
          </div>
          <div data-v-aef46ff5 className="linearC my-[30px]"></div>
        </div>
        <div className="contact__maps w-full rounded-2xl pb-12">
          <iframe className="contact_maps-map w-full rounded-2xl h-[600px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d403.10164166573804!2d55.21358788821763!3d25.045992265792286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubay%20-%20Birlashgan%20Arab%20Amirliklari!5e0!3m2!1suz!2s!4v1732780008312!5m2!1suz!2s"></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
