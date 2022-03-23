import gsap from 'gsap';
import * as React from 'react';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Accordion = ({data}) => {
    const [active, setActive] = React.useState(false);
    const accordRef = React.useRef();
    
    const {title, description} = data;

    const openHanlder = () => {
        if(active){
            gsap.to(accordRef.current, {height: 76, duration: 1});
            setActive(false);
        }else{
            gsap.to(accordRef.current, {height: 'auto', duration: 1});
            setActive(true);
        }
    };
    return (
        <div className={`w-full md:w-3/4 transition-all duration-500 ease-in-out mx-auto text-white mb-2 px-10 ${active ? 'bg-secondary py-5' : 'py-0'}`}>
            <div ref={accordRef} className="font-medium overflow-hidden" style={{height: '76px'}}>
                <div className={`flex justify-between items-center md:text-2xl ${!active ? 'border-b' : ''} mb-0 border-white border-opacity-20`}>
                    <h1 className="text-white font-bold py-5 transition duration-500 ease-in-out ">{title}</h1>
                    <div className={`cursor-pointer select-none hover:text-blue ${active ? 'text-blue' : ''}`} onClick={openHanlder}>{active ?  <AiOutlineMinus /> : <AiOutlinePlus />}</div>
                </div>
                <p className="text-base mt-2 pb-10">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Accordion;