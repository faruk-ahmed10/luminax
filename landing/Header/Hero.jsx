import * as React from 'react';
import Image from 'next/image';
import { FaTelegramPlane, FaTwitter, FaInstagram } from 'react-icons/fa';
import heroImage from '../../assets/HeroImage.svg';
import Vector from '../../assets/Vector.svg';
import HeroCard from './HeroCard';
import logo1 from '../../assets/logo1.svg';

// Animation
import gsap from 'gsap';
import { useEffect } from 'react';
import InitModal from '../Modal/Modal';

const Hero = () => {
    
    const titleRef = React.useRef();
    const subtitRef = React.useRef();
    const telRef = React.useRef();
    const instaRef = React.useRef();
    const twitRef = React.useRef();
    const cardRef = React.useRef();

    useEffect(() => {
        gsap.timeline({duration: 2, opacity: 0})
            .from(titleRef.current, {x: 50, duration: 1})
            .from(subtitRef.current, {y: 5, opacity: 0})
            .from(instaRef.current, {x: '-30%', opacity: 0, rotate: 180})
            .from(twitRef.current, {x: '-30%', opacity: 0, rotate: 180})
            .from(telRef.current, {x: '-30%', opacity: 0, rotate: 180})
            .from(cardRef.current, {x: '110%', opacity: 0})
    });
    return (
        <div className="container mx-auto">
            <div className="relative z-10 flex flex-col-reverse md:flex-row md:py-20 md:pl-10 px-3">
                
                <div className="w-full md:w-1/2">
                    <div className="">
                        <p className="uppercase text-xs md:text-base tracking-widest font-semibold text-lightpeach border border-dashed border-lightpeach px-2 py-1 inline-block">
                            icon fan tokens
                        </p>
                    </div>
                    <div ref={titleRef} className="my-9 text-white">
                        <h1 className="uppercase text-xl md:text-40px leading-normal font-secondary">
                            Launchpad for<br/> Entertainment<br/> and Sports  
                            <span className="relative">
                                <span className="relative z-10"> Icons</span>
                                <span className="absolute z-0 left-2 -top-1 md:-top-3">
                                    <Image src={Vector} alt="Icons" />
                                </span>
                            </span>
                        </h1>
                    </div>
                    <div ref={subtitRef} className="">
                        <p className="pb-10 text-white text-sm md:text-xl font-light">
                            The world first platform that allows you to go beyond 
                            loving your favorite icons. Trade them, mint them, build
                             wealth and better connections.
                        </p>
                    </div>
                    <div className="flex text-white pb-5 md:pb-0">
                        <div ref={telRef} className="w-10 h-10 md:w-18 md:h-18 rounded-full p-2 mr-3 bg-cyan text-base md:text-4xl flex justify-center items-center cursor-pointer hover:bg-blue">
                            <a href="https://t.me/+JhdsbU8LGQBlNTYx" rel="noreferrer" target="_blank"><FaTelegramPlane /></a>
                        </div>
                        <div ref={twitRef} className="w-10 h-10 md:w-18 md:h-18 rounded-full p-2 mr-3 bg-cyan text-base md:text-4xl flex justify-center items-center cursor-pointer hover:bg-blue">
                            <FaTwitter />
                        </div>
                        <div ref={instaRef} className="w-10 h-10 md:w-18 md:h-18 rounded-full p-2 mr-3 bg-cyan text-base md:text-4xl flex justify-center items-center cursor-pointer hover:bg-blue">
                            <FaInstagram />
                        </div>
                    </div>
                </div>
                <div className="relative w-full md:w-1/2 flex flex-col justify-center items-center pb-10">
                    <Image src={heroImage} alt="Hero Image" />
                    <div ref={cardRef} className="md:absolute bottom-4 right-0 -mt-20">
                        <HeroCard />
                    </div>
                </div>
                <InitModal />
            </div>
        </div>
    )
};
export default Hero;