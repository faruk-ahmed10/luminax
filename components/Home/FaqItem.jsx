import { useRef, useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const FaqItem = ({title, description}) => {

    const [acd, setAcd] = useState(false);
    const accordRef = useRef();

    const openHandler = () => {
        if(acd){
            gsap.to(accordRef.current, {height: 64, duration: 1});
            setAcd(false);
        }else{
            gsap.to(accordRef.current, {height: 'auto', duration: 1});
            setAcd(true);
        }
    };

    return (
        <div ref={accordRef}  className={`h-16 py-5 overflow-hidden bg-white/10 rounded-lg mt-5`}>
            <div className="px-5">
                <h1 className="flex justify-between items-center text-dark-white font-bold" onClick={openHandler}>
                    <span className="">{title}</span>
                    <span className="cursor-pointer text-lg">
                        {
                            !acd ? 
                            <AiOutlinePlus />:
                            <AiOutlineMinus />
                        }
                    </span>
                </h1>
                <p className="pt-4">
                        {description}
                </p>
            </div> 
        </div>
    )
}

export default FaqItem;