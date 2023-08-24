import { useState } from 'react';
import { AiOutlineMinus } from 'react-icons/ai';
import { CgMathPlus } from 'react-icons/cg';

const Accordions = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto  max-w-[1000px] p-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border-2 rounded-1 "
        >
          <button
            className={`w-full ${openIndex==index? "bg-[#2a5e77] text-white" : ""}  flex items-center gap-4  text-start text-[#95A0FF] text-xl  px-4 py-2 focus:outline-none`}
            onClick={() => toggleAccordion(index)}
          >
             <span>{
               openIndex==index?<AiOutlineMinus size={24}></AiOutlineMinus> : <CgMathPlus size={24}> </CgMathPlus>
            }</span>
             <span> {item.title}</span>
          </button>
          {openIndex === index && (
            <div className="p-4 text-lg duration-300">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordions;
