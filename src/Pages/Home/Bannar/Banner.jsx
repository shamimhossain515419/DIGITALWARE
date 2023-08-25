import Container from "../../../Component/Contaner";
import { Link } from 'react-router-dom'

import BannerImage from '../../../assets/banner-2.webp'
const Banner = () => {
     return (
          <Container>
               <div className="  mt-10">
                    <div className=" py-10 grid md:grid-cols-2 items-center gap-7 md:min-h-[900px] ">
                         <div data-aos="fade-right">
                              <button className=" bg-[#66AEFF] px-4 py-1 rounded-lg  my-6 leading-8"> Digital Marketing</button>
                              <div>
                                   <h1 className="    leading-tight   text-2xl md:text-5xl font-bold my-2 ">
                                        Digital Marketing  

                                        Empower Your Online Presence on
                                        YouTube & TikTok!</h1>

                              </div>
                              <div>
                                   <p className=" my-2  text-lg  ">We help your businesses to grow by promoting your brand, creating dazzling contents & reaching your target audience through online platforms such as YouTube, Tiktok, Instagram, Facebook & others. empower online presence</p>
                              </div>

                              <div   className=" my-4  inline-block text-2xl font-medium  text-[#0a0b0b] bg-[#3ad89f]  px-6 py-2 rounded-2xl">  <Link target="_blank" to={'https://drive.google.com/file/d/1X9q9tWQ9eIHIu8ad-24FvC0jEDx9F52s/view?usp=sharing'}> My resume</Link> </div>
                         </div>
                         <div data-aos="fade-left">
                          <img className="  h-[600px]  w-full" src={BannerImage}   alt="" />
                         </div>
                    </div>
                    
               </div>
               
          </Container>
     );
};

export default Banner;