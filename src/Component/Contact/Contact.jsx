import { AiFillLinkedin } from "react-icons/ai";
import './Contact.css'
import { Link } from "react-router-dom";
import { BsFacebook, BsPinterest } from "react-icons/bs";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import Container from "../Contaner";
import handshake from '../../../public/handshake_1155-35.avif';
const Contact = () => {
     const form = useRef();
     const sendEmail = (e) => {
          e.preventDefault();
          
          const from = e.target;
          emailjs.sendForm('service_tou3l4d', 'template_txg3q8f', form.current, 'WmKQKwV8bSip_wdcM')
               .then((result) => {
                    console.log(result.text);
                    from.reset();
                    Swal.fire({
                         position: 'top-end',
                         icon: 'success',
                         title: 'Your work has been saved',
                         showConfirmButton: false,
                         timer: 1500
                    })
               }, (error) => {
                    console.log(error.text);
               });
     };


     return (
          <div className=" my-8">
              

               <Container>

                    <div className=" my-20  grid md:grid-cols-5 gap-10">

                         <div data-aos="fade-up"
                              data-aos-anchor-placement="center-bottom" className=" fontRoboto contactshadow col-span-2 rounded-2xl">
                              <div className=" p-2  ">
                                   <img className=" w-full h-70 object-cover" src={handshake} alt="" />
                                   <div className=" space-y-2 p-3">
                                        <h2 className=" text-3xl  font-medium "> Digital Marketer</h2>
                                        <p className="   text-xl leading-8"> I am available for freelance work. <br /> Connect with me via and call in to my account.</p>
                                        <div>  <p className=" text-lg font-medium">  Phone: <span className=" hover:text-[#FF014F] hover:underline"> +01871867575</span> </p>
                                             <p className=" text-lg font-medium">  Email: <span className=" hover:text-[#FF014F] hover:underline">  digitalwareagency@gmail.com</span> </p></div>
                                        <h1 className=" text-base font-medium  uppercase my-2"> Find With Me</h1>
                                        <div className=" flex items-center gap-7  my-10 ">

                                             <Link to={'https://www.facebook.com/profile.php?id=61550718710075&mibextid=ZbWKwL'} target='_blank' className='footershadow   hover:-translate-y-2 duration-300 inline-block rounded-md  p-4' >
                                                  <BsFacebook className=' text-[#0792fc] cursor-pointer ' size={30}></BsFacebook>
                                             </Link>
                                             <Link target='_blank' to={"https://l.facebook.com/l.php?u=https%3A%2F%2Fpin.it%2F6ywMRch%3Ffbclid%3DIwAR3cHHsJJCL5rXKKYIbusy3ZIy7HQ8VNRkqXJoc0589U0qLNGr4OslM-hLM&h=AT03yc8xaJfuZyOg3xepIimJPVgStisrz_63t8pRn_s6vdJGMoUzx7cYCm9xOWSs0uN_5gufh0ci020GQGWl7S1K6TvX8vyhRosSrktgZayjMDLr1N5U8Jjun52XexZ1nxqthA"} className='footershadow   hover:-translate-y-2 duration-300 inline-block rounded-md  p-4' >
                                                  <BsPinterest className=' text-[#ee07d3] cursor-pointer ' size={30}></BsPinterest>
                                             </Link>
                                             <Link target='_blank' to={'https://www.linkedin.com/in/digital-ware-257845289?fbclid=IwAR2qtwMKalIMPEpCyiXVrkg-uk4dfi3we4mn8GQpc4R274trnl5BAjLmams'} className='footershadow   hover:-translate-y-2 duration-300 inline-block rounded-md  p-4' >
                                                  <AiFillLinkedin className=' text-[#0A66C2] cursor-pointer ' size={30}></AiFillLinkedin>
                                             </Link >
                                        </div>

                                   </div>
                              </div>
                         </div>
                         <div className=" fontRoboto contactshadow col-span-3 md:px-20  py-3">
                              <div>
                                   <form ref={form} onSubmit={sendEmail}>
                                        <div className=" w-full flex  items-center  justify-between gap-10">
                                             <div className="  w-full ">
                                                  <label htmlFor="Fist Name" className=" uppercase  text-sm font-normal "> Fist Name</label>
                                                  <input type="text " required className=" inpputbox w-full border-none outline-none my-2 bg-[#191B1E] px-4 py-2  rounded-lg text-white text-xl font-normal " name="from_name" id="" />
                                             </div>
                                             <div className="  w-full ">
                                                  <label htmlFor="Last Name" className=" uppercase text-sm font-normal "> Last Name</label>
                                                  <input type="text " required className=" inpputbox w-full border-none outline-none my-2 bg-[#191B1E] px-4 py-2  rounded-lg text-white text-xl font-normal " name="from-subject" id="" />
                                             </div>
                                        </div>
                                        <div className="  w-full ">
                                             <label htmlFor="Your Email" className=" uppercase text-sm font-normal "> Your Email</label>
                                             <input type="email " className=" inpputbox w-full border-none outline-none my-2 bg-[#191B1E] px-4 py-2  rounded-lg text-white text-xl font-normal " name="from_email" id="" />
                                        </div>
                                        <div className="  w-full ">
                                             <label htmlFor="Subject" className=" uppercase text-sm font-normal "> Subject</label>
                                             <input type="text " required className=" inpputbox w-full border-none outline-none my-2 bg-[#191B1E] px-4 py-2  rounded-lg text-white text-xl font-normal " name="" id="" />
                                        </div>
                                        <div className="  w-full ">
                                             <label htmlFor="Your massage" className=" uppercase text-sm font-normal "> Your massage</label>
                                             <textarea required className=" c w-full border-none outline-none my-2 bg-[#191B1E] px-4 py-2  rounded-lg text-white text-xl font-normal " name="message" id="" cols="30" rows="7"></textarea>
                                        </div>
                                        <div className=" contactshadow "> <button type="submit" className="  block  
                                    text-xl font-medium px-10 py-[7px] rounded-2xl   w-full  mt-7 border border-[#6c9bf9f1]  hover:bg-[#6c9bf9f1]  text-white">Send massage</button></div>
                                   </form>
                              </div>
                         </div>
                    </div>
               </Container>


               <div>
                  
                    <iframe  className=" w-full h-[500px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.83187898617!2d90.33728815897477!3d23.780975728147688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1692814515416!5m2!1sen!2sbd"  allowfullscreen="" loading="lazy" ></iframe>
               </div>
          </div>
     );
};

export default Contact;