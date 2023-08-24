import Container from "../../../Component/Contaner";



import ServicesCard from "./servicesCard";
import ServicesData from "./servicesData";
const Services = () => {
     return (
          <div className=" py-10">
               <Container>
                    <div className=" text-center  my-14">
                         <h1 className="   tracking-widest text-4xl text-[#95A0FF] font-semibold my-4  uppercase  "> OUR SERVICES</h1>
                    </div>

                    <div className=" md:m-20">
                         <div className=" grid md:grid-cols-3 gap-10 ">
                              {
                                   ServicesData?.map((item,index) => <ServicesCard key={index}  Card={item}></ServicesCard>)
                              }
                             


                              {/* <div>
                                   <AiFillYoutube className=" block text-center mx-auto text-[#95A0FF]" size={45}></AiFillYoutube>
                                   <h1 className="  text-3xl  text-[#95A0FF] my-5 font-semibold  "> Thumbnail Design</h1>
                                   <p className=" text-lg font-normal my-2">Thumbnails are the main hack to increase your CTR. Our designers will help you by creating striking thumbnails to generate more views.</p>
                              </div>
                              <div>
                                   <FaGoogle className=" block text-center mx-auto text-[#95A0FF]" size={45}></FaGoogle>
                                   <h1 className="  text-3xl  text-[#95A0FF] my-5 font-semibold  "> SEO</h1>
                                   <p className=" text-lg font-normal my-2">Is your channel not oriented properly? We will give you video ideas, optimize your brand and rank up your portfolio so that they can generate views for a long time.</p>
                              </div>
                              <div>
                                   <BsFillPencilFill className=" block text-center mx-auto text-[#95A0FF]" size={45}></BsFillPencilFill>

                                   <h1 className="  text-3xl  text-[#95A0FF] my-5 font-semibold  ">
                                        Management</h1>
                                   <p className=" text-lg font-normal my-2">Are you too busy to take care of your online brand? We will schedule and manage your posts as well as organize them while you continue with your business.</p>
                              </div>
                              <div>
                                   <GoPackageDependencies className=" block text-center mx-auto text-[#95A0FF]" size={45}></GoPackageDependencies>
                                   <h1 className="  text-3xl  text-[#95A0FF] my-5 font-semibold  "> Growth Package</h1>
                                   <p className=" text-lg font-normal my-2">No time to manage your online portfolio? We will take work for your entire brand from start to finish by scheduling, SEO, thumbnail design, video editing and more.</p>
                              </div>
                              <div>
                                   <BsHeadphones className=" block text-center mx-auto text-[#95A0FF]" size={45}></BsHeadphones>
                                   <h1 className="  text-3xl  text-[#95A0FF] my-5 font-semibold  ">1-On-1 Consulting</h1>
                                   <p className=" text-lg font-normal my-2">Are you looking for a review and guidelines on how you can boost up your online portfolio? Book a 1-on-1 call with us to get started.</p>
                              </div> */}
                         </div>
                    </div>
               </Container>
          </div>
     );
};

export default Services;