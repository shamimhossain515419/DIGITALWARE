

const SwiperCard = ({ Card }) => {
     const { name, img, feedback } = Card;
     return (

          <div className=" w-full mx-auto  text-center">
               <div className=" p-10   items-center gap-3">
                    <img className=" block border-2 border-[#4174da] mx-auto h-28 w-28 rounded-full my-10 m-2 " src={img} alt="" />
                    <h1 className=" text-2xl font-normal ">  {name}</h1>
               </div>
                   <hr className=" bg-[#435992]" />
               <p className=" text-xl font-normal my-2"> {feedback} </p>
          </div>
     );
};

export default SwiperCard;