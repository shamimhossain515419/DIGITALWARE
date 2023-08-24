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
                             


                             
                         </div>
                    </div>
               </Container>
          </div>
     );
};

export default Services;