import React from 'react'
import { useParams } from 'react-router-dom'
import ServiceData from "../service/ServiceData";

const UslugItem = () => {
  const { id } = useParams()
  console.log(id)

  const ServiceContent = ServiceData?.find((element) => element?.id === Number(id));
  const { service_title, service_card_img1, service_card_img2, service_card_img3, service_card_number1, service_card_number2, service_card_number3, service_card_size1, service_card_size2, service_card_size3, service_icon } = ServiceContent;

  console.log(ServiceData?.id, "asdasdasdds")

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
              Luxury Cars for Rent in Dubai / Services / {service_title}
            </a>
          </div>
          <div className="aboutTexts flex flex-col gap-5 mb-1">
            <h1 className="aboutTitle my-8 text-3xl font-bold leading-normal">
              {service_title}
            </h1>
          </div>
          <div className='card-con flex gap-10 flex-wrap justify-center p1200:justify-between p-2'>
            <div data-aos="fade-right" data-aos-offset="20" className='cards w-[340px] pb-[25px] rounded-lg bg-custom-gradient '>
              <img src={service_card_img1} className='w-full h-[230px] rounded-lg' alt="Mahkamov" />
              <div className='text-container px-[25px]'>
                <h3 className='text-white mt-[25px]'>BASIC</h3>
                <div className='text-white mt-[30px] flex items-center gap-5'>
                  <p className='border border-solid text-[18px] border-[#11d198] py-1 px-5 rounded-lg'>{service_card_number1}</p>
                  <p>{service_card_size1}</p>
                </div>
                <p className='text-white mt-[25px]'>
                  Dune buggies in Dubai Book your ride on the most exciting adventure activity to hit the desert and later pamper your self to a traditional Arabian hospitality.
                </p>
                <p className='text-white text-[26px] font-semibold my-[25px]'>
                  Package Inclusions:
                </p>
                <div className='flex items-center gap-5 mt-[15px]'>
                  <img src={service_icon} alt="Mahkamov | Dev" />
                  <p className='text-white text-[18px] font-semibold'>
                    Premium Transfer to camp
                  </p>
                </div>
                <div className='flex items-center gap-5 mt-[15px]'>
                  <img src={service_icon} alt="Mahkamov | Dev" />
                  <p className='text-white text-[18px] font-semibold'>
                    Dune Buggy riding 1.5 hours
                  </p>
                </div>
                <div className='flex items-center gap-5 mt-[15px]'>
                  <img src={service_icon} alt="Mahkamov | Dev" />
                  <p className='text-white text-[18px] font-semibold'>
                    Falcone shoting
                  </p>
                </div>
                <div className='flex items-center gap-5 mt-[15px]'>
                  <img src={service_icon} alt="Mahkamov | Dev" />
                  <p className='text-white text-[18px] font-semibold'>
                    Camel
                  </p>
                </div>
                <div className='flex items-center gap-5 mt-[15px]'>
                  <img src={service_icon} alt="Mahkamov | Dev" />
                  <p className='text-white text-[18px] font-semibold'>
                    VIP room
                  </p>
                </div>
                <div className='flex items-center gap-5 mt-[15px]'>
                  <img src={service_icon} alt="Mahkamov | Dev" />
                  <p className='text-white text-[18px] font-semibold'>
                    Fruits, Drinks, BBQ
                  </p>
                </div>
                <div className='flex items-center text-center gap-5 mt-[15px]'>
                  <a href="tel:+998931919737" className='w-full bg-[#fe363b] mt-5 p-3 text-white py-3 font-bold text-[26px] rounded-2xl'>BOOK NOW</a>
                </div>
              </div>
            </div>
            <div data-aos="fade-right" data-aos-offset="20" className='cards w-[340px] pb-[25px] rounded-lg bg-custom-gradient '>
              <img src={service_card_img2} className='w-full h-[230px] rounded-lg' alt="Mahkamov" />
              <div className='text-container px-[25px]'>
                <h3 className='text-white mt-[25px]'>BASIC</h3>
                <div className='text-white mt-[30px] flex items-center gap-5'>
                  <p className='border border-solid text-[18px] border-[#11d198] py-1 px-5 rounded-lg'>{service_card_number2}</p>
                  <p>{service_card_size2}</p>
                </div>
                <p className='text-white mt-[25px]'>
                  Dune buggies in Dubai Book your ride on the most exciting adventure activity to hit the desert and later pamper your self to a traditional Arabian hospitality.
                </p>
                <p className='text-white text-[26px] font-semibold my-[25px]'>
                  Package Inclusions:
                </p>
                <div className='flex items-center gap-5 mt-[15px]'>
                  <img src={service_icon} alt="Mahkamov | Dev" />
                  <p className='text-white text-[18px] font-semibold'>
                    Premium Transfer to camp
                  </p>
                </div>
                <div className='flex items-center gap-5 mt-[15px]'>
                  <img src={service_icon} alt="Mahkamov | Dev" />
                  <p className='text-white text-[18px] font-semibold'>
                    Dune Buggy riding 1.5 hours
                  </p>
                </div>
                <div className='flex items-center gap-5 mt-[15px]'>
                  <img src={service_icon} alt="Mahkamov | Dev" />
                  <p className='text-white text-[18px] font-semibold'>
                    Falcone shoting
                  </p>
                </div>
                <div className='flex items-center gap-5 mt-[15px]'>
                  <img src={service_icon} alt="Mahkamov | Dev" />
                  <p className='text-white text-[18px] font-semibold'>
                    Camel
                  </p>
                </div>
                <div className='flex items-center gap-5 mt-[15px]'>
                  <img src={service_icon} alt="Mahkamov | Dev" />
                  <p className='text-white text-[18px] font-semibold'>
                    VIP room
                  </p>
                </div>
                <div className='flex items-center gap-5 mt-[15px]'>
                  <img src={service_icon} alt="Mahkamov | Dev" />
                  <p className='text-white text-[18px] font-semibold'>
                    Fruits, Drinks, BBQ
                  </p>
                </div>
                <div className='flex items-center text-center gap-5 mt-[15px]'>
                  <a href="tel:+998931919737" className='w-full bg-[#fe363b] mt-5 p-3 text-white py-3 font-bold text-[26px] rounded-2xl'>BOOK NOW</a>
                </div>
              </div>
            </div>
            <div data-aos="fade-right" data-aos-offset="20" className='cards w-[340px] pb-[25px] rounded-lg bg-custom-gradient '>
              <img src={service_card_img3} className='w-full h-[230px] rounded-lg' alt="Mahkamov" />
              <div className='text-container px-[25px]'>
                <h3 className='text-white mt-[25px]'>BASIC</h3>
                <div className='text-white mt-[30px] flex items-center gap-5'>
                  <p className='border border-solid text-[18px] border-[#11d198] py-1 px-5 rounded-lg'>{service_card_number3}</p>
                  <p>{service_card_size3}</p>
                </div>
                <p className='text-white mt-[25px]'>
                  Dune buggies in Dubai Book your ride on the most exciting adventure activity to hit the desert and later pamper your self to a traditional Arabian hospitality.
                </p>
                <p className='text-white text-[26px] font-semibold my-[25px]'>
                  Package Inclusions:
                </p>
                <div className='flex items-center gap-5 mt-[15px]'>
                  <img src={service_icon} alt="Mahkamov | Dev" />
                  <p className='text-white text-[18px] font-semibold'>
                    Premium Transfer to camp
                  </p>
                </div>
                <div className='flex items-center gap-5 mt-[15px]'>
                  <img src={service_icon} alt="Mahkamov | Dev" />
                  <p className='text-white text-[18px] font-semibold'>
                    Dune Buggy riding 1.5 hours
                  </p>
                </div>
                <div className='flex items-center gap-5 mt-[15px]'>
                  <img src={service_icon} alt="Mahkamov | Dev" />
                  <p className='text-white text-[18px] font-semibold'>
                    Falcone shoting
                  </p>
                </div>
                <div className='flex items-center gap-5 mt-[15px]'>
                  <img src={service_icon} alt="Mahkamov | Dev" />
                  <p className='text-white text-[18px] font-semibold'>
                    Camel
                  </p>
                </div>
                <div className='flex items-center gap-5 mt-[15px]'>
                  <img src={service_icon} alt="Mahkamov | Dev" />
                  <p className='text-white text-[18px] font-semibold'>
                    VIP room
                  </p>
                </div>
                <div className='flex items-center gap-5 mt-[15px]'>
                  <img src={service_icon} alt="Mahkamov | Dev" />
                  <p className='text-white text-[18px] font-semibold'>
                    Fruits, Drinks, BBQ
                  </p>
                </div>
                <div className='flex items-center text-center gap-5 mt-[15px]'>
                  <a href="tel:+998931919737" className='w-full bg-[#fe363b] mt-5 p-3 text-white py-3 font-bold text-[26px] rounded-2xl'>BOOK NOW</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default UslugItem