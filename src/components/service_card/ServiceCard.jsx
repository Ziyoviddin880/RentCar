
import React from 'react'

import btnImg from "/public/images/link.svg";
import { NavLink } from 'react-router-dom';
import ServiveData from "../../pages/service/ServiceData";

export default function ServiceCard() {
  return (
    <>
      {ServiveData?.map((item) => (
        <div className="service_card text-[#fff] w-[344px] mt-2">
          <img src={item?.service_img} alt="Mahkamov | Dev" />
          <h2 className='pt-4 pb-4 font-semibold text-2xl' >{item?.service_title}</h2>
          <p className='text-[18px]' >{item?.service_text}</p>
          <NavLink to={`/uslug/${item?.id}`} className='linkuslug flex items-center justify-evenly w-[200px] hover:ml-4 transition-[5] my-8'>
            <p className='font-bold text-[20px] '>Learn more</p>
            <img src={btnImg} alt="Mahkamov | Dev" />
          </NavLink>
        </div>
      ))}
    </>
  );
}
