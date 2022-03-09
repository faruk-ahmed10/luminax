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

    const titleRef = useRef();

    useEffect(() => {
        gsap.from(titleRef.current, {
            scrollTrigger: {
                trigger: titleRef.current
            },
            opacity: 0,
            y: 5,
            duration: 2
        });
        
    },[]);


    return (
        <div className="relative mt-20">
            <div className="absolute -left-2 -bottom-2 opacity-25">
                <Image src={dotwave} alt={'Dot Wave'} />
            </div>
            <div className="px-[10%]">
                <h1 ref={titleRef} className="font-bold text-center text-dark-white text-3xl xs:text-4xl md:text-[80px] mt-10 mb-20">
                    Stream-To-  
                    <span className="relative">
                        Earn 
                        <span className="absolute -bottom-2 md:-bottom-4 left-0 w-full">
                            <Image src={earnline} alt={'Mission Line Image'} />
                        </span>
                    </span>
                </h1>
                <div className="md:flex items-center">

                    
                    <div className="md:w-1/2">
                        <button className="border-2 border-dark-ter text-dark-ter uppercase rounded text-xs py-1 px-2 font-bold mb-5">
                            PASSIVE INCOME FOR FANS
                        </button>
                        <h1 className="text-white font-bold text-4xl">
                            Lumix turns streaming into sustainable passive income for <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-700 to-dark-sec"> fans</span>. 
                        </h1>
                        <p className="mt-5 text-white/40">
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