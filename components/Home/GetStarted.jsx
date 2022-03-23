import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Importing assets
const powerline = '/assets/img/powerline.png';
const wave = '/assets/img/wave.svg';

const getData = [
    {
        title: 'Install Metamask',
        color: 'text-[#0077FF]',
        description: 'Download Metamask extension on a desktop browser like Chrome. You can store &amp; manage your Lumix in this Binance Chain wallet.'
    },
    {
        title: 'Buy BNB',
        color: 'text-[#EB1923]',
        description: 'Download Metamask extension on a desktop browser like Chrome. You can store & manage your Lumix in this Binance Chain wallet.'
    },
    {
        title: 'Swap for Lumix',
        color: 'text-[#DC1FFF]',
        description: 'Download Metamask extension on a desktop browser like Chrome. You can store & manage your Lumix in this Binance Chain wallet.'
    },
    {
        title: 'Deposit Lumix',
        color: 'text-[#00B488]',
        description: 'Download Metamask extension on a desktop browser like Chrome. You can store &amp; manage your Lumix in this Binance Chain wallet.'
    },
];


const GetStarted = () => {
    
    const titleRef = useRef();
    const btnRef = useRef();
    const itemsRef = useRef([]);

    useEffect(() => {
        gsap.from(titleRef.current, {
            scrollTrigger: {
                trigger: titleRef.current
            },
            opacity: 0,
            duration: 3
        })
    }, []);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: itemsRef.current,
                start: 'center bottom'
            }
        });
        // tl.from(featuresRef.current, {  });
        itemsRef.current.map((v, idx) => {
            tl.from(itemsRef.current[idx], { opacity: 0, x: '5%', duration: 1 });
        });

        tl.from(btnRef.current, {
            opacity: 0,
            y: '5%'
        });
        
    },[]);

    return (
        <div id='how' className="relative mt-20 md:pb-20 bg-gradient-to-b from-[#17192400] to-[#171924]">
            <div className="absolute left-0 z-0 -bottom-4 -mb-2">
                <Image src={wave} alt="Hero Ellipse" width={1440} height={175} />
            </div>
            <div className="px-[10%]">
                <h1 ref={titleRef} className="font-bold text-center text-dark-white text-4xl xs:text-5xl xs:leading-[56px] md:text-[80px] md:leading-[102px] mb-20">
                    <span className="relative">Get Started  
                        <span className="absolute -bottom-2 xs:-bottom-4  md:-bottom-8 left-0 min-w-full">
                            <Image src={powerline} alt={'Mission Line Image'} width={432} height={14} />
                        </span>
                    </span> in<br/>
                    4 easy steps
                </h1>
                <div className="sm:grid gap-5 grid-cols-2 lg:grid-cols-4">
                    {
                        getData.map((v, idx) => (
                            <div ref={el => itemsRef.current[idx] = el} key={idx} className="bg-dark-white rounded-lg mb-5">
                                <div className="px-5 py-10">
                                    <h1 className="font-bold text-xl text-dark-black">
                                        <span className={`${v.color}`}>{idx + 1}.</span>
                                        {v.title}
                                    </h1>
                                    <p className="text-dark/80 mt-2">
                                        Download Metamask extension on a desktop 
                                        browser like Chrome. You can store &amp; manage 
                                        your Lumix in this Binance Chain wallet.
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="my-5 flex justify-center pb-20">
                    <button ref={btnRef} className="flex justify-center items-center w-44 text-sm px-6 py-4 rounded-full hover:bg-dark-white bg-dark-sec mx-3 font-bold text-dark-black transition-colors duration-300 ease-out">
                        Buy Lumix <span className="px-2"><BsArrowRight /></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GetStarted;