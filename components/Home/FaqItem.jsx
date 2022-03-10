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
            gsap.to(accordRef.current, {height: 64, duration: 1, paddingTop: '20px', paddingBottom: '20px'});
            setAcd(false);
        }else{
            gsap.to(accordRef.current, {height: 'auto' , paddingTop: '20px', paddingBottom: '20px', duration: 1 });
            setAcd(true);
        }
    };
    console.log("Faq Item Height: ", accordRef);
    return (
        <div ref={accordRef}  className={`h-16 overflow-hidden bg-white/5 rounded-lg mt-5 py-5`}>
            <div className="px-5">
                <h1 className="flex justify-between items-center text-dark-white font-bold text-xl" onClick={openHandler}>
                    <span className="">{title}</span>
                    <span className="cursor-pointer text-xl">
                        {
                            !acd ? 
                            <AiOutlinePlus />:
                            <AiOutlineMinus />
                        }
                    </span>
                </h1>
                <p className="pt-4 text-white/70">
                        {description}
                </p>
            </div> 
        </div>
    )
}

export default FaqItem;