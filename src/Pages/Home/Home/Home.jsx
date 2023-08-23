import Banner from "../Bannar/Banner";
import Features from "../Features/Features";
import Services from "../Services/Services";



const Home = () => {
     return (
          <div>

               <Banner></Banner>
               <div className="  my-10">
                    <Features></Features>
               </div>
               <div className="  my-10">
                    <Services></Services>
               </div>


          </div>
     );
};

export default Home;