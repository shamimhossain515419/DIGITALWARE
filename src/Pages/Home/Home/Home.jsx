import Contact from "../../../Component/Contact/Contact";
import MyDeatils from "../../../Component/MYDitals/MyDailtes";
import Banner from "../Bannar/Banner";
import Faqs from "../FAQs/Faqs";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import MyTime from "../Mytime/Mytime";
import Services from "../Services/Services";
import Testomonial from "../Testtomonial/Testomonial";



const Home = () => {
     return (
          <div>

               <Banner></Banner>

               <div className="my-10">
                    <MyDeatils></MyDeatils>
               </div>
               <div id="Features" className="  my-10">
                    <Features></Features>
               </div>

               <div id="Services" className="  my-10">
                    <Services></Services>
               </div>

               <div className="  my-10">
                    <MyTime></MyTime>
               </div>

               <div id="FAQ" className="  my-10">
                    <Faqs></Faqs>
               </div>
               <Testomonial></Testomonial>
               <div id="contact" className="  my-10">
                    <Contact></Contact>
               </div>

               <Footer></Footer>
          </div>
     );
};

export default Home;