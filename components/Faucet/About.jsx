import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import about from '../../assets/img/about.png';


const AboutLumix = () => {

    const aboutRef = useRef();

    useEffect(()=> {

        gsap.from(aboutRef.current, { 
            scrollTrigger: {
                trigger: aboutRef.current,
                start: "center bottom"
            }, 
            y: 50,
            duration: 1
            });

    },[]);

    return (
        <div className="w-full flex flex-col md:flex-row p-10 my-5 bg-dark-gray rounded-lg">
            <div className="pr-5 grow">
                <h5 className="uppercase text-xs font-bold mb-2">About Lumix</h5>
                <h1 className="text-xl text-dark-white py-2">Helping fans and icons build massive wealth</h1>
                <p className="py-2">
                    The LUMIX Network’s Faucet is a low-risk, high reward contract that operates similarly to a high yield certificate of deposit by paying out 1% daily return on investment up to 365%.
                </p>
                <p className="text py-2">
                    Players can compound and extend their earnings through deposits, hydrating (compounding) rewards as well as through team based referrals.
                </p>
            </div>
            <div className="lg:pl-5 w-full md:w-64 mt-5 md:mt-0">
                <Image src={about} alt="About Image" />
            </div>
        </div>
    )
}

export default AboutLumix;