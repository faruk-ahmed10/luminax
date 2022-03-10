import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
// Importing assets
import mission from '../../assets/img/missionline.png';
import missionmic from '../../assets/img/missionmic.png';


const Mission = () => {

    const titleRef = useRef(null);
    const descRef = useRef(null);
    const subRef = useRef(null);
    const listRef = useRef(null);
    const boxRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: titleRef.current
            }
        });
        tl.from(titleRef.current, { opacity: 0, duration: 2  });
        tl.from(boxRef.current, { opacity: 0, x: '-100%', duration: 2 });
        tl.from(subRef.current, { opacity: 0, x: '100%', duration: 1 });
        tl.from(descRef.current, { opacity: 0, x: '100%', duration: 1 });
        tl.from(listRef.current, { opacity: 0, y: '150%' });
        
    },[]);

    return (
        <div id="mission" className="py-5 mt-10 overflow-hidden">
            <div className="px-[10%]">
                <h1 ref={titleRef} className="font-bold text-center text-3xl text-dark-white sm:text-5xl lg:text-[80px] mb-10 lg:mb-20">
                    Our
                    <span className="relative"> Mission 
                        <span className="absolute -bottom-4 lg:-bottom-8 left-2 min-w-full">
                            <Image src={mission} alt={'Mission Line Image'} />
                        </span>
                    </span>
                </h1>
                <div className="md:flex items-center">
                    <div ref={boxRef} className="sm:w-80 sm:h-80 relative lg:w-1/3 rounded-lg border-8 border-dark-white/10 flex flex-col justify-center items-center py-5 lg:py-10 bg-[#111121]">
                        <div className="">
                            <Image src={missionmic} alt={'Mission Microphone'} layout={'intrinsic'} />
                        </div>
                        <h5 className="text-center font-semibold text-dark-white">
                            Watch to learn more
                        </h5>
                        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 text-dark-sec text-7xl cursor-pointer">
                            <BsFillPlayCircleFill />
                        </div>
                    </div>
                    <div className="md:w-2/3 md:px-16 lg:px-28 mt-5 md:mt-0">
                        <h2 ref={subRef} className="font-bold  text-2xl sm:text-4xl text-dark-white">
                            Our mission is to help build sustainable wealth out of the <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-700 to-dark-sec"> artist-fan economy</span> 
                        </h2>
                        <p ref={descRef} className="mt-5 text-sm sm:text-base text-white/70">
                            Lumix makes your money work for you without thinking you about it. I will complete this part later but you get the general idea of what’s going on here.
                        </p>
                        <ul ref={listRef} className="mt-3">
                            <li className="flex items-center font-medium mb-1 cursor-pointer">
                                <span className="text-dark-sec pr-2"><BsFillPlayCircleFill/></span>
                                <p className="text-dark-white hover:text-dark-sec">How Lumix works for fans</p>
                            </li>
                            <li className="flex items-center font-medium mb-1 cursor-pointer">
                                <span className="text-dark-sec pr-2"><BsFillPlayCircleFill/></span>
                                <p className="text-dark-white hover:text-dark-sec">How Lumix works for Artist</p>
                            </li>
                            <li className="flex items-center font-medium mb-1 cursor-pointer">
                                <span className="text-dark-sec pr-2"><BsFillPlayCircleFill/></span>
                                <p className="text-dark-white hover:text-dark-sec">Understanding how Lumix compounding works</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission;