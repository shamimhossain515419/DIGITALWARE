
import {
     Accordion,
     AccordionItem,
     AccordionItemHeading,
     AccordionItemButton,
     AccordionItemPanel,
} from 'react-accessible-accordion';

import Accordions from './Accordions';

const Faqs = () => {
     const accordionItems = [
          { title: 'How to get our services?', content: 'The process of working with us is straightforward, first we have to examine your situation by going on a quick call with you. On the call we will see how we can help you and how we can serve you in the best way possible and then we will propose a solution to your problems.' },
          { title: 'What are your prices?', content: 'The pricing depends on the package you are willing to take. We also offer custom packages catered to specifically your needs.' },
          { title: 'What services do you provide?', content: 'We offer a variety of services starting from Channel Management to Content Generation, SEO, Thumbnail Designing, Video Editing..' },
          { title: 'What is the estimated elivery time?', content: 'It can vary from 24h – 48h depending on the content you provide us for service.' },
          // Add more items as needed
     ];
     return (
          <div>
 <div className=" text-center  my-14">
                         <h1 className="   tracking-widest text-4xl text-[#95A0FF] font-semibold my-4  uppercase  "> FAQS</h1>
                    </div>
               
               <Accordions items={accordionItems}></Accordions>
          </div>
     );
};

export default Faqs;