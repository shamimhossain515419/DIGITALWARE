
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { AiFillLinkedin, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import './Footer.css'
import { Link } from 'react-router-dom';
import Container from '../../../Component/Contaner';
import Logo  from '../../../assets/PhotoRoom-20230823_222501.png'
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

                              <div className='  mt-9 clear-left flex items-center  gap-8'>
                                   <Link to={'https://www.facebook.com/profile.php?id=61550718710075&mibextid=ZbWKwL'} target='_blank' className='footershadow  hover:bg-[#ff014df1] inline-block rounded-md  p-4' >
                                        <BsFacebook className=' text-[#0792fc] cursor-pointer ' size={30}></BsFacebook>
                                   </Link>
                                   <Link target='_blank' to={"https://www.youtube.com/@DIGITALWARE-nw6bo"} className='footershadow  hover:bg-[#ff014df1] inline-block rounded-md  p-4' >
                                        <AiFillYoutube className=' text-[#ee07d3] cursor-pointer ' size={30}></AiFillYoutube>
                                   </Link>
                                   <Link target='_blank' to={'https://www.linkedin.com/in/digital-ware-257845289?fbclid=IwAR0-bfBkDs-d8RH9hsHy-AXlz3zdo5QOj-4sOcbOfQ9z8s_0KVCgJvHTs1M'} className='footershadow  hover:bg-[#ff014df1] inline-block rounded-md  p-4' >
                                        <AiFillLinkedin className=' text-[#0A66C2] cursor-pointer ' size={30}></AiFillLinkedin>
                                   </Link >
                                   <Link to={'https://twitter.com/Mehedihasan3704?fbclid=IwAR0pLWIWjew-Zryh1QqdRWGttMX37foB6BFFwHYMy3wtVS6Ean9N29rtYYg'} target='_blank' className='footershadow  hover:bg-[#ff014df1] inline-block rounded-md  p-4' >
                                        <AiOutlineTwitter className=' text-[#0b82f2] cursor-pointer ' size={30}></AiOutlineTwitter>
                                   </Link >
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