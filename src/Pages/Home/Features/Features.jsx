import Container from "../../../Component/Contaner";

import Featuras from '../../../assets/arrow-drawn-with-chalk-scaled.webp'
const Features = () => {
     return (
          <div>

               <Container>


                    <div className=" mt-16">
                         <div className="  flex justify-center items-center ">
                              <button className=" md:ml-44 bg-[#66AEFF] px-10 rounded-lg  my-6 leading-8"> Our Features</button>
                         </div>
                         <div className=" grid md:grid-cols-2 gap-14  ">
                              <div>
                                   <img className=" object-contain px-10" src={Featuras} alt="" />
                              </div>
                              <div>

                                   <h1 className=" text-xl md:text-3xl font-bold leading-tight mb-5 "> We take your content to next level with our expertise team of creative solutions!</h1>
                                   <div className=" grid md:grid-cols-2 gap-10 mt-10">
                                        <div>
                                             <h1 className=" text-[#A298C2] text-2xl font-semibold " > 24/7 Client Support</h1>
                                             <p className=" text-xl  font-medium my-3"> We provide 24/7 support for the utmost satisfaction of our clients.</p>
                                        </div>
                                        <div>
                                             <h1 className=" text-[#A298C2] text-2xl  font-semibold" >
                                                  Strategic Planning</h1>
                                             <p className=" text-xl  font-medium my-3">We curate step-by-step strategic plans for our clients.</p>
                                        </div>
                                        <div>
                                             <h1 className=" text-[#A298C2] text-2xl font-semibold " >Content Generation</h1>
                                             <p className=" text-xl  font-medium my-3">We provide 100% viral content ideas under the niche you choose..</p>
                                        </div>
                                        <div>
                                             <h1 className=" text-[#A298C2] text-2xl font-semibold " > Performance Analysis</h1>
                                             <p className=" text-xl  font-medium my-3">We provide real time analysis reports to monitor your growth..</p>
                                        </div>
                                   </div>

                              </div>
                         </div>
                    </div>

               </Container>


          </div>
     );
};

export default Features;