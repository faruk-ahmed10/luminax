import { BsTelegram } from "react-icons/bs";
import { FaTelegramPlane } from 'react-icons/fa';
import { FiTwitter, FiInstagram } from 'react-icons/fi';
import { TiSocialFacebookCircular } from 'react-icons/ti';

const socialLinks = [
    {
        name: 'Telegram',
        icon: <FaTelegramPlane />
    },
    {
        name: 'Twitter',
        icon: <FiTwitter />
    },
    {
        name: 'Instagram',
        icon: <FiInstagram />
    },
    {
        name: 'Facebook',
        icon: <TiSocialFacebookCircular />
    },
]

const SocialBanner = () => {


    return (
        <div className="w-[80%] mx-auto mt-20 bg-gradient-to-r from-[#FF00CC] to-[#333399] rounded-lg">
            <div className="py-10 flex flex-col justify-center items-center">
                <h1 className="text-4xl sm:text-[80px] font-bold text-white">
                    Join Socials    
                </h1>
                <div className="flex gap-2 pt-5 sm:pt-10">
                    {
                        socialLinks.map((v, idx) => (
                            <div key={`social_${idx}`} className="w-10 sm:w-20 h-10 sm:h-20 flex justify-center items-center p-2 rounded-lg text-4xl text-white hover:bg-dark/30 cursor-pointer hover:text-dark-sec ">
                                {
                                    v.icon
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SocialBanner;