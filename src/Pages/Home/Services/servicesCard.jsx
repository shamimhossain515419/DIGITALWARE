import React from 'react';

const ServicesCard = ({ Card }) => {
     const {title,icon,description}=Card;
     const Icon = icon;
     return (
          <div>
               <div>
                    <Icon className=" block text-center mx-auto text-[#95A0FF]" size={45}></Icon>
                    <h1 className="  capitalize text-3xl  text-[#95A0FF] my-5 font-semibold  "> {title}</h1>
                    <p className=" text-lg font-normal my-2">{description}.</p>
               </div>
          </div>
     );
};

export default ServicesCard;