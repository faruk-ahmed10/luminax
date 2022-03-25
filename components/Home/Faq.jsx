import { useState, useRef, useEffect } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Image from 'next/image';
import FaqItem from './FaqItem';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Import assets
import Ellipse from '../../assets/img/heroellipsetop.svg';


const faqData = [
    {
        title: 'What is Lumina?',
        description: 'LUMINA (LUMI) is a digital currency for entertainment platforms, and adoptable across a wide range of industries. It aims to foster a blockchain ecosystem built for entertainment icons, including Music, TV and Sports;'
    },
    {
        title: 'How do I participate in the private sale?',
        description: 'Join the telegram community. Stake the LUMINA token, the total minimum to stake will be announced pre any token launch'
    },
    {
        title: 'How are the icons selected?',
        description: 'ICONS are screened and selected through our patented rigorous and thorough blockchain selection algorithm SLECT that ensures that the chosen Icons meet our requirements and most importantly will give their fans an experience of a lifetime on our platform.        '
    },
    {
        title: 'Tell me more about the use cases',
        description: 'The Icon Fan Token IFT®️is at the heart of the LUMINA ecosystem. It gives fans the power to voice their opinions and positions. It also allows them to  earn gifts and immense opportunities as they exercise the privileges of their IFTs. Icons use these IFTs on the social app LUMINA to select from their most active fans for special treats like backstage meetings, auditions, featuring in new projects, sponsorships, merchandises, NFTs, autographs and many many more benefits.'
    },
    {
        title: 'When does LUMINA launch?',
        description: 'Q1, 2022'
    },
];

const Faq = () => {

    const titleRef = useRef();
    const itemsRef = useRef([]);
    const [acd, setAcd] = useState(null);
    


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
        tl.from(itemsRef.current, { opacity: 0, duration: 2 });
        // tl.from(featuresRef.current, {  });
        itemsRef.current.map((v, idx) => {
            tl.from(itemsRef.current[idx], { opacity: 0, y: '3%', duration: 1 });
        });
        
    },[]);

    return (
        <div id='faqs' className="relative pt-20 md:pt-28">
            <div className="absolute left-1/2 -translate-x-1/2 z-5 -top-5 z-20 pt-10">
                    <Image src={Ellipse} alt="Hero Ellipse" width={600} height={500} />
            </div>
            <div className="px-[10%]">
                <h1 ref={titleRef} className="text-4xl text-center text-dark-white font-bold   ">
                    Frequently Asked Questions
                </h1>
                <div className="mt-10">
                    {
                        faqData.map((v, idx) => <FaqItem key={idx} {...v} acd={acd === idx ? true : false} clicked={() => acd === idx ? setAcd(null) : setAcd(idx)} />)
                    }
                    <div className="">
                        <button className="text-dark-sec font-medium pl-5 my-5 text-xl">Load More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq;