import Contact from "../../../Component/Contact/Contact";
import MyDeatils from "../../../Component/MYDitals/MyDailtes";
import Banner from "../Bannar/Banner";
import Faqs from "../FAQs/Faqs";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";



const Home = () => {
     return (
          <div>

               <Banner></Banner>

               <div className="  my-10">
                    <MyDeatils></MyDeatils>
               </div>
               <div className="  my-10">
                    <Features></Features>
               </div>

               <div className="  my-10">
                    <Services></Services>
               </div>
               <div className="  my-10">
                    <Faqs></Faqs>
               </div>
               <div className="  my-10">
                    <Contact></Contact>
               </div>

               <Footer></Footer>
          </div>
     );
};

export default Home;