
import { BsFacebook, BsInstagram, BsPinterest } from 'react-icons/bs'
import { AiFillLinkedin, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import './Footer.css'
import { Link } from 'react-router-dom';
import Container from '../../../Component/Contaner';
import Logo from '../../../assets/PhotoRoom-20230823_222501.png'
const Footer = () => {

     return (
          <div className='  py-16'>
               <Container>
                    <div className=' grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6' >
                         <div>
                              <div className='  flex  items-center  gap-4 '>
                                   <img className=' h-16 w-16 rounded-full ' src={Logo} alt="" />
                                   <h1 className=' text-xl font-semibold'> DIGITAL WARE</h1>
                              </div>

                              <div className='  mt-9 clear-left flex items-center flex-wrap  gap-8'>
                                   <Link to={'https://www.facebook.com/profile.php?id=61550718710075&mibextid=ZbWKwL'} target='_blank' className='footershadow  hover:bg-[#6782d9f1] inline-block rounded-md  p-4' >
                                        <BsFacebook className=' text-[#0792fc] cursor-pointer ' size={30}></BsFacebook>
                                   </Link>
                                   <Link target='_blank' to={"https://www.youtube.com/@DIGITALWARE-nw6bo"} className='footershadow  hover:bg-[#6782d9f1] inline-block rounded-md  p-4' >
                                        <AiFillYoutube className=' text-[#ee07d3] cursor-pointer ' size={30}></AiFillYoutube>
                                   </Link>
                                   <Link target='_blank' to={'https://www.linkedin.com/in/digital-ware-257845289?fbclid=IwAR0-bfBkDs-d8RH9hsHy-AXlz3zdo5QOj-4sOcbOfQ9z8s_0KVCgJvHTs1M'} className='footershadow  hover:bg-[#6782d9f1] inline-block rounded-md  p-4' >
                                        <AiFillLinkedin className=' text-[#0A66C2] cursor-pointer ' size={30}></AiFillLinkedin>
                                   </Link >
                                   <Link target='_blank' to={"https://l.facebook.com/l.php?u=https%3A%2F%2Fpin.it%2F6ywMRch%3Ffbclid%3DIwAR3cHHsJJCL5rXKKYIbusy3ZIy7HQ8VNRkqXJoc0589U0qLNGr4OslM-hLM&h=AT03yc8xaJfuZyOg3xepIimJPVgStisrz_63t8pRn_s6vdJGMoUzx7cYCm9xOWSs0uN_5gufh0ci020GQGWl7S1K6TvX8vyhRosSrktgZayjMDLr1N5U8Jjun52XexZ1nxqthA"} className='footershadow  hover:bg-[#6782d9f1]  hover:-translate-y-2 duration-300 inline-block rounded-md  p-4' >
                                        <BsPinterest className=' text-[#ee07d3] cursor-pointer ' size={30}></BsPinterest>
                                   </Link>
                              </div>

                         </div>
                         <div>
                              <h1 className=' textColor text-xl  uppercase'> Support</h1>
                              <p>  How it works</p>
                              <p>Trust & Safety</p>

                              <p> Help Centre </p>
                         </div>
                         <div>
                              <h1 className=' textColor text-xl'> Useful Links</h1>
                              <p> About</p>
                              <p> Services</p>

                              <p> Context </p>
                              <p> Blog</p>

                         </div>
                         <div>
                              <h1 className=' textColor text-xl'> Office Address</h1>

                              <p>  Dhaka ,Bangladesh  </p>

                              <p> Helpline: +01871867575</p>
                              <p> Email: digitalwareagency@gmail.com</p>
                              <p> (Available : Sat - Thu, 10:00 AM to 7:00 PM)</p>


                              <p>Support 24/7 </p>

                         </div>
                    </div>
               </Container>
          </div>
     );
};

export default Footer;