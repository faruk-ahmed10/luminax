import { useRef, useState, useEffect } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const FaqItem = ({title, description, acd, clicked}) => {

    
    const accordRef = useRef();

    useEffect(() => {
        if(!acd){
            gsap.to(accordRef.current, {height: 0, duration: 1});
        }else{
            gsap.to(accordRef.current, {height: 'auto' , duration: 1 });
        }
    }, [acd]);

    console.log("Faq Item Height: ", accordRef);
    return (
        <div   className={`overflow-hidden bg-white/5 rounded-lg mt-5 py-5`}>
            <div className="px-5">
                <h1 className="flex justify-between items-center text-dark-white font-bold text-xl" onClick={clicked}>
                    <span className="">{title}</span>
                    <span className="cursor-pointer text-xl">
                        {
                            !acd ? 
                            <AiOutlinePlus />:
                            <AiOutlineMinus />
                        }
                    </span>
                </h1>
                <p ref={accordRef} className={`h-0 text-white/70 overflow-hidden ${acd ? 'pt-4' : 'pt-0'}`}>
                        {description}
                </p>
            </div> 
        </div>
    )
}

export default FaqItem;