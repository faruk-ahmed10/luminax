import * as React from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const PowerofIft = () => {

    const firstRef = React.useRef();
    const secondRef = React.useRef();
    const thirdRef = React.useRef();

    React.useEffect(() => {

        gsap.timeline({duration: 1, scrollTrigger: {trigger: firstRef.current}})
        .from(firstRef.current, {y: -10, opacity: 0})
        .from(secondRef.current, {opacity: 0}, "<")
        .from(thirdRef.current, {y: 10, opacity: 0}, "<")

    },[])

    return (
        <div className="mt-16 text-xl">
            <p ref={firstRef} className="pb-8">
                LUMINA enables popular sports and entertainment icons and shows to create their own unique Icon Fan Token IFT®️ that can be used for numerous functions on the LUMINA exchange and ecosystem. Both Fans and Icons will have new exciting experiences in the LUM social app where it all happens.
            </p>
            <p ref={secondRef} className="pb-8">
                The Icon Fan Token IFT®️is at the heart of the LUMINA ecosystem. It gives fans the power to voice their opinions and positions. It also allows them to  earn gifts and immense opportunities as they exercise the privileges of their IFTs.
            </p>
            <p ref={thirdRef} className="">
                Icons use these IFTs on the social app to select from their most active fans for special treats like backstage meetings, auditions, featuring in new projects, sponsorships, merchandises, NFTs, autographs and many many more benefits.
            </p>
        </div>
    )
}

export default PowerofIft;