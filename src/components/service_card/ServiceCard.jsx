import React from 'react'

import SerCardImg from "../../../public/images/uslug-1-Dm8nxdJt.jpg";
import btnImg from "../../../public/images/link.svg";

export default function ServiceCard(props) {
  return (
    <>
      <div className="service_card text-[#fff] w-[344px] mt-2 mb-2">
        <img src={props.SerCardImg} alt="Mahkamov | Dev" />
        <h2 className='pt-4 pb-4 font-semibold text-2xl' >{props.title}</h2>
        <p className='text-[18px]' >{props.text}</p>
        <button className='flex pl-8 justify-center  gap-3 hover:translate-x-2 transition-[5] mt-5 mb-5 pb-5'>
          <p className='font-bold text-[20px] '>Learn more</p>
          <img src={btnImg} alt="Mahkamov | Dev" />
        </button>
      </div>
    </>
  )
}