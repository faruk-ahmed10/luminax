import { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
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
        tl.from(btnRef.current, { opacity: 0, x: '-5%' });
        tl.from(subRef.current, { opacity: 0, x: '-5%', duration: 1 });
        tl.from(descRef.current, { opacity: 0, y: '5%', duration: 1 });
        
    },[]);


    return (
        <div className="relative md:mt-20 pt-10 bg-gradient-to-b from-[#17192400] to-[#171924] overflow-y-hidden">
            <div className="absolute -left-2 -bottom-2 opacity-20">
                <Image src={'/assets/img/dotwave.svg'} alt={'Dot Wave'} width={500} height={900} />
            </div>
            <div className="absolute left-20 z-5 top-1/2">
                    <Image src={'/assets/img/heroellipsetop.svg'} alt="Hero Ellipse" width={600} height={500} />
            </div>
            <div className="absolute left-0 z-10 bottom-0 -mb-2">
                    <Image src={'/assets/img/wave.svg'} alt="Hero Ellipse" width={1440} height={141} />
            </div>
            <div className="px-[10%]">
                <h1 ref={titleRef} className="font-bold text-center text-dark-white text-3xl xs:text-4xl md:text-[80px] md:mt-10 mb-20">
                    Stream-To-  
                    <span className="relative">
                        Earn 
                        <span className="absolute -bottom-2 md:-bottom-2 left-0 w-full">
                            <Image src={'/assets/img/earnline.png'} alt={'Mission Line Image'} width={166} height={10} />
                        </span>
                    </span>
                </h1>
                <div className="md:flex items-center md:pt-10 md:pb-20 ">
                    
                    <div className="md:w-1/2 lg:pr-20">
                        <div className="text-center md:text-left">
                            <button ref={btnRef} className="border-2 border-dark-ter text-dark-ter uppercase rounded text-xs py-1 px-2 font-bold mb-5">
                                PASSIVE INCOME FOR FANS
                            </button>
                        </div>
                        <h1 ref={subRef} className="text-white text-center md:text-left font-bold text-xl xs:text-2xl md:text-4xl">
                            Lumix turns streaming into sustainable passive income for <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C87716] to-dark-sec"> fans</span>. 
                        </h1>
                        <p ref={descRef} className="mt-5 text-xs text-center md:text-left md:text-sm text-white/70">
                            Streaming takes place across uncountable number of platforms today and are a major source of rewards for artists. The Lumix Community provides a ready source of streaming for our artists and are thereby rewarded for this support. 
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <div className="-z-1 md:-mb-24 lg:-mb-4">
                            <Image src={'/assets/img/streamgirl.png'} alt={'Stream Girl'} width={446} height={482} />
                        </div>
                    </div>
                </div>
            </div>
            
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