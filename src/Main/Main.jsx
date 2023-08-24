import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Outlet } from 'react-router-dom'
const Main = () => {
     useEffect(() => {
          AOS.init();
     }, [])
     return (
          <div>
               
               <Navbar></Navbar>
               <div className=" mt-20">
                    <Outlet></Outlet>
               </div>

          </div>
     );
};

export default Main;