import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import { AiOutlinePieChart, AiOutlineLock } from 'react-icons/ai';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// importing assets
import  powerline from '../../assets/img/powerline.png';
import  headplay from '../../assets/img/headplay.png';
import right from '../../assets/img/Right.png';
import Ellipse from '../../assets/img/heroellipsetop.svg';
import dotwave from '../../assets/img/dotwave.svg';


// Data

const specialData = [
    {
        title: 'Record Label',
        subtitle: 'Buy and sell popular digital currencies, keep track of them in the one place.',
        icon: <AiOutlinePieChart/>,
        color: 'text-[#F27F16]'
    },
    {
        title: 'NFTs',
        subtitle: 'Buy and sell popular digital currencies, keep track of them in the one place.',
        icon: <AiOutlineLock/>,
        color: 'text-[#F178B6]'
    },
    {
        title: 'Launchpad',
        subtitle: '',
        icon: <AiOutlineLock />,
        color: 'text-[#FFDAAE]'
    },
    {
        title: 'Metaverse',
        subtitle: '',
        icon: <AiOutlineLock />,
        color: 'text-[#52BDFF]'
    },
    {
        title: 'Liquidity Pool',
        subtitle: '',
        icon: <AiOutlinePieChart />,
        color: 'text-[#F27F16]'
    },
    {
        title: 'Rewards',
        subtitle: '',
        icon: <AiOutlineLock />,
        color: 'text-[#FF6600]'
    },
];
const Feature = () => {

    const [tab, setTab] = useState(1);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const tabRef = useRef(null);
    const subRef = useRef(null);
    const boxRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: titleRef.current
            }
        });
        tl.from(titleRef.current, { opacity: 0, duration: 2  });
        tl.from(boxRef.current, { opacity: 0, x: '-100%', duration: 1 });
        tl.from(tabRef.current, { opacity: 0, y: '20%', duration: 1 });
        tl.from(subRef.current, { opacity: 0, x: '100%', duration: 1 }); 
        tl.from(descRef.current, { opacity: 0, x: '100%', duration: 1 });
        
    },[]);

    return (
        <div className="relative py-5 mt-20" id='feature'>
            <div className="absolute left-0 transform top-1/2 opacity-10">
                    <Image src={dotwave} alt="Hero Ellipse" />
            </div>
            <div className="absolute left-10 transform  -translate-y-full top-1/2">
                    <Image src={Ellipse} alt="Hero Ellipse" width={600} height={500} />
            </div>
            <div className="absolute right-10 transform  -translate-y-full top-1/2">
                    <Image src={Ellipse} alt="Hero Ellipse" width={600} height={500} />
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2  -translate-y-[20%] top-1/2">
                    <Image src={Ellipse} alt="Hero Ellipse" width={600} height={500} />
            </div>
            <div className="px-[10%]">
                <h1 ref={titleRef} className="font-bold text-center text-dark-white text-3xl sm:text-[80px] leading-[86px] mb-20">
                    <span className="relative">Powerful  
                        <span className="absolute -bottom-10 sm:-bottom-4 left-0 min-w-full">
                            <Image src={powerline} alt={'Mission Line Image'} />
                        </span>
                    </span> Feature
                </h1>
                <div className="lg:flex items-start">

                    <div className="lg:ml-20 lg:w-1/2 mt-10 lg:mt-0">
                        <div ref={tabRef} className="flex justify-between items-center mb-5 font-bold md:text-xl text-dark-white/70 border-b-2 border-white/10">
                            <h4 onClick={() => setTab(1)} className={`relative cursor-pointer pb-2 transition-all duration-200 ease-out ${tab === 1 ? 'text-dark-sec after:absolute after:left-0 after:top-full after:w-full after:h-0.5 after:bg-dark-sec' : '' }`}>
                                Music Lovers
                            </h4>
                            <h4 onClick={() => setTab(2)} className={`relative cursor-pointer pb-2 transition-all duration-200 ease-out ${tab === 2 && 'text-dark-sec after:absolute after:left-0 after:top-full after:w-full after:h-0.5 after:bg-dark-sec' } `} >
                                Upcoming artists
                            </h4>
                        </div>
                        <div className="">
                            {
                            tab === 1?
                            <h1 ref={subRef} className="font-bold text-xl md:text-4xl text-dark-white pt-6">
                                Auto Compounding. 
                                Auto Withdrawal.
                                Sustainable cash flow.
                            </h1>:
                            <h1 ref={subRef} className="font-bold text-xl md:text-4xl text-dark-white pt-6">
                                Be the record label.
                                Build momentum faster.
                                Financial Freedom.
                            </h1>}
                            {
                            tab === 1 ?
                            <p ref={descRef} className='mt-6 text-sm md:text-base'>
                                Lumix makes your money work for you without thinking you about it. I will complete this part later but you get the general idea of what’s going on here.
                            </p>:
                            <p ref={descRef} className='mt-6 text-sm md:text-base'>
                                Are you an artist looking to excel in your career? Are you looking for real life changing support and partnerships? Lumix Network offers you unequalled opportunity. Click below and request for sponsorship and you are on your way to success!!
                            </p>
                            }
                            <button className="flex justify-center items-center cursor-pointer text-sm px-6 py-4 mt-5 rounded-full hover:bg-dark-white bg-dark-sec mx-3 font-bold text-dark-black transition-colors duration-300 ease-out">
                                Request Artist Sponsorship <span className="px-2"><BsArrowRight /></span>
                            </button>
                        </div>
                    </div>
                    <div className="mt-10 lg:w-1/2 order-first">
                        {
                        tab === 1 ?
                        <div ref={boxRef} className="relative xs:w-80 xs:h-80 rounded-lg border-8 border-dark-white/10 flex flex-col justify-center items-center">
                            <div className="overflow-hidden">
                                <Image src={right} alt={'Mission Microphone'} height={320} width={320} />
                            </div>
                            {/* <h5 className="text-center font-semibold text-dark-white">
                                Watch to learn more
                            </h5> */}
                            <div className="absolute p-2 md:p-5 bg-[#30E0A1] rounded-lg text-dark-black top-2/5 right-0 translate-x-1/2 -translate-y-1/2 cursor-pointer">
                                <h5 className="font-medium text-xs xs:text-base">up to</h5>
                                <h1 className="font-medium text-sm xs:text-4xl">404% ROI</h1>
                            </div>
                        </div>:
                        <div ref={boxRef} className="relative xs:w-80 xs:h-80 rounded-lg border-8 border-dark-white/10 flex flex-col justify-center items-center">
                            <div className="overflow-hidden">
                                <Image src={headplay} alt={'Mission Microphone'} height={320} width={320} />
                            </div>
                            {/* <h5 className="text-center font-semibold text-dark-white">
                                Watch to learn more
                            </h5> */}
                            <div className="absolute p-2 md:p-5 bg-[#EF5DA8] rounded-lg text-dark-white top-2/5 right-0 translate-x-1/2 -translate-y-1/2 cursor-pointer">
                                <h5 className="font-medium text-xs xs:text-base">TIME TO</h5>
                                <h1 className="font-medium text-sm xs:text-4xl">GET NOTICED</h1>
                            </div>
                        </div>}
                    </div>
                </div>
                <div className="mt-10">
                    <h1 className="pt-10 text-center font-bold text-2xl md:text-5xl text-dark-white">
                        Lumix is special in <br/>many ways.
                    </h1>
                    <p className="text-center text-white/70 my-5 text-sm md:text-base">
                        Lumix has a variety of features that make it the best place to start trading
                    </p>
                    <div className="pt-10 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {
                            specialData.map((v, idx) => {
                                return (
                                    <div key={idx} className="text-center p-10 rounded-lg border-[3px] border-white/10">
                                        <div className={`flex justify-center text-4xl ${v.color}`}>
                                            {v.icon}
                                        </div>
                                        <h1 className="font-bold text-2xl text-dark-white mt-10">{v.title}</h1>
                                        <p className="mt-5 text-white/70">
                                            Buy and sell popular digital currencies, keep track of them in the one place.
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature;