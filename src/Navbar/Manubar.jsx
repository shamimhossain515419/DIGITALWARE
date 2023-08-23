
import { Link } from 'react-router-dom'
const Manubar = ({ setOpen }) => {
     return (
          <div>
               <hr />
               <div className=' space-y-3 flex   flex-col '>
                    <Link to={'#'}> Features</Link>
                    <Link to={'#Services'}> Services</Link>
                    <Link to={'#Testimonials'}> Testimonials</Link>
                    <Link to={'#FAQ'}> FAQ</Link>
                    <Link to={'/contact'}> Contact Us</Link>
               </div>
          </div>
     );
};

export default Manubar;