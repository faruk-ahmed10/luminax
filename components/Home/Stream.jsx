import { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Importing assets
import earnline from '../../assets/img/earnline.png';
import streamgirl from '../../assets/img/streamgirl.png';
import dotwave from '../../assets/img/dotwave.svg';
import wave from '../../assets/img/wave.svg';
gsap.registerPlugin(ScrollTrigger);


const Stream = () => {

    const titleRef = useRef(null);
    const descRef = useRef(null);
    const subRef = useRef(null);
    const btnRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: titleRef.current
            }
        });
        tl.from(titleRef.current, { opacity: 0, duration: 2  });
        tl.from(btnRef.current, { opacity: 0, x: '-100%' });
        tl.from(subRef.current, { opacity: 0, x: '-100%', duration: 1 });
        tl.from(descRef.current, { opacity: 0, x: '-100%', duration: 1 });
        
    },[]);


    return (
        <div className="relative mt-20 pt-10">
            <div className="absolute -left-2 -bottom-2 opacity-25">
                <Image src={dotwave} alt={'Dot Wave'} />
            </div>
            <div className="px-[10%]">
                <h1 ref={titleRef} className="font-bold text-center text-dark-white text-3xl xs:text-4xl md:text-[80px] mt-10 mb-20">
                    Stream-To-  
                    <span className="relative">
                        Earn 
                        <span className="absolute -bottom-2 md:-bottom-2 left-0 w-full">
                            <Image src={earnline} alt={'Mission Line Image'} />
                        </span>
                    </span>
                </h1>
                <div className="md:flex items-center">

                    
                    <div className="md:w-1/2">
                        <button ref={btnRef} className="border-2 border-dark-ter text-dark-ter uppercase rounded text-xs py-1 px-2 font-bold mb-5">
                            PASSIVE INCOME FOR FANS
                        </button>
                        <h1 ref={subRef} className="text-white font-bold text-4xl">
                            Lumix turns streaming into sustainable passive income for <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-700 to-dark-sec"> fans</span>. 
                        </h1>
                        <p ref={descRef} className="mt-5 text-white/70">
                            Lumix makes your money work for you without thinking you about it. I will complete this part later but you get the general idea of what’s going on here.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <div className="-mb-2">
                            <Image src={streamgirl} alt={'Stream Girl'} />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="relative z-50 -bottom-2 min-w-full h-28">
                <Image src={wave} alt={'Wave'} layout="fill" />
            </div> */}
            {/* <div className="curve w-full h-20 bg-red-500"></div> */}
            {/* <style jsx>{`
                .curve {
                    clip-path: ellipse(100% 100% at 100% 90%);
                }
                `}
            </style> */}
        </div>
    )
}

export default Stream;