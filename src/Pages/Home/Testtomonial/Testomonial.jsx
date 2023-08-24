import Container from "../../../Component/Contaner";
import SwiperSlider from "./Swiper";


const Testomonial = () => {
     return (
          <div>
               <div>
                    <Container>

                         <div>
                              <h1 className="  inline-block bg-[#775F00] text-base    my-4 py-1 px-4 rounded-xl "> Testimonial</h1>

                              <div>
                                   <h1 className=" text-[#5DAFF5]   text-2xl  md:text-4xl font-bold my-3"> Our lovely customers <br />
                                        some feedback about us!</h1>
                              </div>

                              <div>
                                   <SwiperSlider></SwiperSlider>
                              </div>


                         </div>
                    </Container>
               </div>
          </div>
     );
};

export default Testomonial;