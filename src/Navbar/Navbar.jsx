

import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom'

import { useState } from 'react';

import Container from '../Component/Contaner';
import Manubar from './Manubar';

import logo from '../assets/PhotoRoom-20230823_222501.png'

const Navbar = () => {
     const [Open, setOpen] = useState(true)
     return (
          <nav className='px-2 w-full bg-black fixed py-3      top-0  left-0 right-0 z-50    shadow-lg'>
               <Container>
                    <div className=' '>
                         <div className=' flex justify-between items-center'>
                              <div className=' flex  items-center gap-4'>
                                    <img src={logo} className=' h-12 hidden md:block ' alt="" />
                                  <a  href="#"> <h1 className='  py-2 font-semibold  text-2xl text-color   uppercase'> DIGITAL WARE </h1></a>
                              
                              </div>
                              <div className=' hidden md:block  space-x-5'>
                                   <a href={'#Features'}> Features</a>
                                   <a href={'#Services'}> Services</a>
                                   <a href={'#Testimonials'}> Testimonials</a>
                                   <a href={'#FAQ'}> FAQ</a>
                                   <a href={'#contact'}> Contact Us</a>
                              </div>





                              <div onClick={() => setOpen(!Open)} className=' md:hidden '>

                                   {
                                        Open ? <FaBars size={24} className=' '> </FaBars> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                             <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>

                                   }

                              </div>
                         </div>

                         <div className='  md:hidden'>
                              {
                                   Open ? "" : <Manubar setOpen={setOpen}></Manubar>
                              }
                         </div>


                    </div>
               </Container>

          </nav>
     );
};

export default Navbar;