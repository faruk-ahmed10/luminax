import * as React from 'react';
import Image from 'next/image';
import app from '../../assets/mobile.svg';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const LuminaApp = () => {
    const firstRef = React.useRef();
    const secondRef = React.useRef();
    const thirdRef = React.useRef();
    const forthRef = React.useRef();
    const secHeadRef = React.useRef();
    const fifthRef = React.useRef();
    const sixthRef = React.useRef();
    const seventhRef = React.useRef();
    const eighthRef = React.useRef();
    const ninthRef = React.useRef();
    const tenthRef = React.useRef();
    const elRef = React.useRef();

    React.useEffect(() => {

        gsap.timeline({duration: 0.1, scrollTrigger: {trigger: firstRef.current}})
        .from(firstRef.current, {y: 15, opacity: 0})
        .from(secondRef.current, {y: 15, opacity: 0})
        .from(thirdRef.current, {x: 20, opacity: 0})
        .from(forthRef.current, {y: 15, opacity: 0})
        .from(secHeadRef.current, {y: 15, opacity: 0})
        .from(fifthRef.current, {x: 25, opacity: 0})
        .from(sixthRef.current, {x: 25, opacity: 0})
        .from(seventhRef.current, {x: 25, opacity: 0})
        .from(eighthRef.current, {x: 25, opacity: 0})
        .from(ninthRef.current, {x: 25, opacity: 0})
        .from(tenthRef.current, {x: 25, opacity: 0})
        .from(elRef.current, {x: 25, opacity: 0})

    },[])
    return (
        <div className="mt-16">
            <h1 className="font-semibold text-xl pb-3">The LUMINA App</h1>
            <p ref={firstRef} className="text-xl pb-3">
                This is the community where the fan experiences and participates in all the excitement. In the app, the Icon and Fan meet and experience new level of interactions.
            </p>
            <h3 ref={secondRef} className="text-xl font-semibold pt-3">Activities that happen on the app:</h3>
            <div className="flex justify-between pt-5">
                <ul className="text-xl pb-5 leading-8"> 
                    <li ref={fifthRef}  className="">– Rewards</li>
                    <li ref={sixthRef} className="">– Voting</li>
                    <li ref={seventhRef} className="">– Minting</li>
                    <li ref={eighthRef} className="">– Earn Free IFTs and LUMINs;</li>
                    <li ref={ninthRef} className="">– Trade on the Exchange;</li>
                    <li ref={tenthRef} className="">– Meet other Fans;</li>
                    <li ref={elRef} className="">– Meet Your Icon.</li>
                </ul>
                <div ref={thirdRef} className="-mt-5">
                    <Image width={200} height={300} src={app} alt="App" />
                </div>
            </div>
            <p ref={forthRef} className="text-xl">
                On the social App, fans can buy or swap other stable coins for LUMIN. They will be informed early ahead of the public about the launch of their Icon Fan Tokens. They can then stake their LUMINA token for the IFTs.
            </p>
        </div>
    )
}

export default LuminaApp;