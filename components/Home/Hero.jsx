import Image from "next/image";
import Link from 'next/link';
import { BsFillPlayCircleFill, BsArrowRight } from 'react-icons/bs';
import { useRef, useEffect } from 'react';
import gsap from "gsap";
// Importing assets
const musicdance = '/assets/img/herobg.png';
const upline = '/assets/img/upline.png';
const TopEllipse = '/assets/img/heroellipsetop.svg';
const RightEllipse = '/assets/img/heroellipseright.svg';
const LeftEllipse = '/assets/img/heroellipseleft.svg';


const Hero = () => {

    const titleRef = useRef(null);
    const descRef = useRef(null);
    const btnRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.from(titleRef.current, { opacity: 0, duration: 1  });
        tl.from(descRef.current, { opacity: 0, x: '10%', duration: 1 });
        tl.from(btnRef.current, { opacity: 0, y: '10%' });
        
    },[]);

    return (
        <div className="min-h-screen relative overflow-hidden">
            <div className="">
                <div className="absolute min-w-full bottom-0 -mb-2 text-center">
                    <Image src={musicdance} alt="Background Image" width={1500} height={300} />
                </div>
                <div className="absolute top-5 left-1/4 -mb-2">
                    <Image src={TopEllipse} alt="Hero Ellipse" width={400} height={400} />
                </div>
                <div className="absolute right-10 bottom-10 -mb-2">
                    <Image src={RightEllipse} alt="Hero Ellipse" width={400} height={400} />
                </div>
                <div className="absolute left-10 z-10 bottom-10 -mb-2">
                    <Image src={LeftEllipse} alt="Hero Ellipse" width={400} height={400} />
                </div>
            </div>
            <div className="absolute top-0 left-0 min-w-full max-w-full max-h-full bg-dark/30">
                <div className="w-10/12 lg:w-1/2 mx-auto min-h-screen flex flex-col justify-center items-center">
                    <div ref={titleRef} className="text-center">
                        <h1 className="text-lg xs:text-3xl lg:text-6xl font-medium text-white lg:leading-[66px]">
                            Get paid 
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C87716] to-dark-sec"> 1.1% ROI daily </span> 
                            backing your favorite <br/>
                            <span className="relative"> upcoming artistes <span className="absolute -bottom-4 lg:-bottom-8 left-0 min-w-full"><Image src={upline} alt="Under Style" width={500} height={15} fill="responsive" /></span> </span>
                        </h1>
                    </div>
                    <div ref={descRef} className="text-center">
                        <p className="text-xs xs:text-sm lg:text-lg mt-7 mb-5 pt-2 text-white/70">
                            Lumix is a deflationary high reward contract powering
                            entertainment on the BSC network. 
                            This first of its kind protocol decentralises artists’ 
                            sponsorship, rewarding you as a backer with a daily 1% return on your investment
                        </p>
                    </div>
                    <div ref={btnRef} className="text-center">
                        <div className="xs:my-5 xs:flex">
                            <Link href="/swap">
                                <a className="w-56 xs:w-48 sm:w-56 flex items-center justify-center text-sm px-6 py-3 mb-2 xs:mb-0 rounded-full bg-dark-white hover:bg-dark-sec mx-3 font-bold text-dark-black transition-colors duration-300 ease-out">
                                    Buy Lumix<span className="px-2 text-2xl"><BsArrowRight /></span>
                                </a>
                            </Link>
                            <button className="w-56 xs:w-48 sm:w-56 flex items-center justify-center text-sm px-6 py-3 rounded-full bg-dark-white hover:bg-dark-sec mx-3 font-bold text-dark-black transition-colors duration-300 ease-out">Join Telegram<span className="px-2 text-2xl"><BsArrowRight /></span></button>
                        </div>
                        <div className="flex justify-center items-center text-dark-white mt-2 md:mt-0">
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