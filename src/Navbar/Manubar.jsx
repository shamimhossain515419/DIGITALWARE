
import { Link } from 'react-router-dom'
const Manubar = ({ setOpen }) => {
     return (
          <div>
               <hr />
               <div className=' space-y-3 flex   flex-col '>
                    <div onClick={() => setOpen(true)}>
                         <a href={'#Features'}> Features</a>
                    </div>
                    <a onClick={() => setOpen(true)} href={'#Services'}> Services</a>
                    <a onClick={() => setOpen(true)} href={'#Testimonials'}> Testimonials</a>
                    <a onClick={() => setOpen(true)} href={'#FAQ'}> FAQ</a>
                    <a onClick={() => setOpen(true)} href={'#contact'}> Contact Us</a>
               </div>
          </div>
     );
};

export default Manubar;