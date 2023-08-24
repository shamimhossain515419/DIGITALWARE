import { TypeAnimation } from "react-type-animation";
import Container from "../Contaner";


const MyDeatils = () => {
     return (
          <Container>
               <div>
                    <div className=" fontfamily grid md:grid-cols-2   mb-4 md:h-[80vh]  items-center ">

                         <div data-aos="fade-left" className=" boxshawdow h-[60vh]  overflow-hidden  p-3 rounded-lg">
                              <img className=" object-cover  w-full  p-5  h-[60vh]  hover:scale-125 " src="https://i.ibb.co/D7ZNsvq/368135091-172460805802973-8844006643722392743-n-1.jpg" alt="" />
                         </div>
                         <div data-aos="fade-right" className="  p-3 space-y-2 ">
                              <h3 className="  text-[#673ea4]  text-3xl font-medium"> WELCOME TO MY  PORTFOLIO  </h3>

                              <h1 className=" tracking-tight text-3xl  md:text-5xl my-5 py-3 font-bold"> Hi, I’m Nobir Hossain   <span className=" textColor">  Foysal </span>  </h1>

                              <TypeAnimation
                                   sequence={[
                                        // Same substring at the start will only be typed once, initially
                                        'A Professional Digital  Marketer',
                                        2000,
                                        'A Professional   SEO marketing',
                                        2000,
                                        'A Professional   Lead Generation',
                                        2000,
                                        'A Professional    Facebook ads campaign',
                                        2000,
                                        ' YouTube marketing',
                                        2000,
                                   ]}
                                   speed={30}
                                   className="text-xl  md:text-4xl  font-bold"

                                   repeat={Infinity}
                              />
                              <div>
                                   <div className=" text-xl font-normal my-3">Digital marketing expert  <br />
                                        Experience: 5 years</div>
                              </div>
                              <div>
                                   <div className=" shadow-xl inline-block  px-3 py-2  rounded-2xl">
                                        <button className="  block  hover:bg-transparent  border  border-[#66AEFF] bg-[#66AEFF] text-2xl font-medium px-10 py-[5px] rounded-2xl bgColor text-white">See More</button>
                                   </div>
                              </div>
                         </div>

                    </div>
               </div>

               <div>

               </div>
          </Container>
     );
};

export default MyDeatils;