import Navbar from "../Navbar/Navbar";

import { Outlet } from 'react-router-dom'
const Main = () => {
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