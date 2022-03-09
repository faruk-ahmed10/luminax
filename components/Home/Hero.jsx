import Image from "next/image";
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { useRef, useEffect } from 'react';
import gsap from "gsap";
// Importing assets
import musicdance from '../../assets/img/musicdance.png';
import mic from '../../assets/img/microphone.png';
import upline from '../../assets/img/upline.png';

const Hero = () => {

    const titleRef = useRef(null);
    const descRef = useRef(null);
    const btnRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.from(titleRef.current, { opacity: 0, duration: 3  });
        tl.from(descRef.current, { opacity: 0, x: '100%', duration: 1 });
        tl.from(btnRef.current, { opacity: 0, y: '150%' });
        
    },[]);

    return (
        <div className="min-h-screen relative overflow-hidden">
            <div className="">
                <div className="absolute bottom-0 -mb-2">
                    <Image src={musicdance} alt="Background Image" />
                </div>
                <div className="absolute bottom-0 left-0 -mb-2">
                    <Image src={mic} alt="Microphone" />
                </div>
            </div>
            <div className="absolute top-0 left-0 min-w-full max-h-full bg-dark/50">
                <div className="w-10/12 lg:w-1/2 mx-auto min-h-screen flex flex-col justify-center items-center">
                    <div ref={titleRef} className="text-center">
                        <h1 className="text-lg xs:text-3xl lg:text-6xl font-medium text-white lg:leading-[66px]">
                            Get paid 
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-700 to-dark-sec"> 1.1% ROI daily </span> 
                            backing your favorite <br/>
                            <span className="relative"> upcoming artistes <span className="absolute -bottom-7 left-0 min-w-full"><Image src={upline} alt="Under Style" /></span> </span>
                        </h1>
                    </div>
                    <div ref={descRef} className="text-center">
                        <p className="text-xs xs:text-sm lg:text-lg mt-7 mb-5">
                            Lumix is a deflationary high reward contract powering
                            entertainment on the BSC network. 
                            This first of its kind protocol decentralises artists’ 
                            sponsorship, rewarding you as a backer with a daily 1% return on your investment
                        </p>
                    </div>
                    <div ref={btnRef} className="text-center">
                        <div className="my-5">
                            <button className="w-56 text-sm px-6 py-2 mb-2 sm:mb-0 rounded-full bg-dark-white hover:bg-dark-sec mx-3 font-bold text-dark-black transition-colors duration-300 ease-out">Buy Lumix</button>
                            <button className="w-56 text-sm px-6 py-2 rounded-full bg-dark-white hover:bg-dark-sec mx-3 font-bold text-dark-black transition-colors duration-300 ease-out">Join Telegram</button>
                        </div>
                        <div className="flex justify-center items-center text-dark-white">
                            <div className="mr-3">
                                <BsFillPlayCircleFill />
                            </div>
                            <h2 className="">
                                Watch Video to learn more
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;