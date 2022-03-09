import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import FaqItem from './FaqItem';


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

    
    
    return (
        <div id='faqs' className="px-[10%] mt-20">
            <div className="">
                <h1 className="text-4xl text-center text-dark-white font-bold   ">
                    Frequently Asked Questions
                </h1>
                <div className="mt-10">
                    {
                        faqData.map((v, idx) => <FaqItem key={idx} {...v} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Faq;