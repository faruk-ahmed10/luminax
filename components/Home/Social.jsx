import { BsTelegram } from "react-icons/bs";
import { FaTelegramPlane } from 'react-icons/fa';
import { FiTwitter, FiInstagram } from 'react-icons/fi';
import { TiSocialFacebookCircular } from 'react-icons/ti';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
    {
        name: 'Telegram',
        icon: <FaTelegramPlane />,
        link: 'https://t.me/Lumix_Network',
    },
    {
        name: 'Twitter',
        icon: <FiTwitter />,
        link: 'https://twitter.com/lumixnetwork'
    },
    {
        name: 'Instagram',
        icon: <FiInstagram />,
        link: 'https://instagram.com/lumixnetwork'
    },
    {
        name: 'Facebook',
        icon: <TiSocialFacebookCircular />
    },
]

const SocialBanner = () => {

    const socialRef = useRef();


    useEffect(() => {
        gsap.from(socialRef.current, {
            scrollTrigger: {
                trigger: socialRef.current
            },
            opacity: 0,
            y: '10%',
            duration: 2
        })
    }, []);


    return (
        <div ref={socialRef} className="w-[80%] mx-auto mt-20 mb-10 bg-gradient-to-r from-[#FF00CC] to-[#333399] rounded-lg">
            <div className="py-10 flex flex-col justify-center items-center">
                <h1 className="pt-5 text-4xl sm:text-[80px] font-bold text-white">
                    Join Socials  
                </h1>
                <div className="flex gap-2 pt-5 sm:pt-10">
                    {
                        socialLinks.map((v, idx) => (
                            <div key={`social_${idx}`} className="w-10 sm:w-20 h-10 sm:h-20 flex justify-center items-center p-2 rounded-lg text-4xl text-white hover:bg-dark/30 cursor-pointer hover:text-dark-sec ">
                                <a href={v.link}>
                                {
                                    v.icon
                                }
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SocialBanner;