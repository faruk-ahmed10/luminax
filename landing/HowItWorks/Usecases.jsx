import * as React from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const UseCases = () => {

    const firstRef = React.useRef();
    const secondRef = React.useRef();
    const thirdRef = React.useRef();
    const forthRef = React.useRef();
    const secHeadRef = React.useRef();
    const fifthRef = React.useRef();
    const sixthRef = React.useRef();
    const seventhRef = React.useRef();

    React.useEffect(() => {

        gsap.timeline({duration: 0.1, scrollTrigger: {trigger: firstRef.current}})
        .from(firstRef.current, {y: 15, opacity: 0})
        .from(secondRef.current, {y: 15, opacity: 0})
        .from(thirdRef.current, {y: 15, opacity: 0})
        .from(forthRef.current, {y: 15, opacity: 0})
        .from(secHeadRef.current, {y: 15, opacity: 0})
        .from(fifthRef.current, {y: 15, opacity: 0})
        .from(sixthRef.current, {y: 15, opacity: 0})
        .from(seventhRef.current, {y: 15, opacity: 0})

    },[])

    return (
        <div className="mt-16 text-xl">
            <h1 className="font-semibold pb-5">Thanks to the blockchain application,</h1>
            <ol className="list-decimal pb-8">
                <li ref={firstRef} className="pb-3">
                    LUMIN is the currency on the decentralised LUMINA Exchange and ecosystem;
                </li>
                <li ref={secondRef} className="pb-3">
                Exchange is a launchpad for the launch of all Icon Fan Tokens IFTs®️ ;
                </li>
                <li ref={thirdRef} className="pb-3">
                With LUMIN fans acquire their IFTs. With IFTs, they interact robustly with their icons in-app in ways they could not have done on any other platform; 
                </li>
                <li ref={forthRef} className="">
                LUMIN staked on the LUMINA Exchange generates rewards and IFTs for further use and interactions. 
                </li>
            </ol>
            <h1 ref={secHeadRef} className="font-semibold pb-3">IFT (Icon Fan Tokens) is used majorly for</h1>
            <ol className="list-decimal">
                <li ref={fifthRef} className="pb-3">
                    Governance: fans vote through smart-contract on several binding polls published by their Icons;
                </li>
                <li ref={sixthRef} className="pb-3">
                Rewards: Fans earn rewards from engagements on LUM using their holdings of IFTs.
                </li>
                <li ref={seventhRef} className="">
                Staking: IFTs can be staked to earn more LUMIN tokens, Non-Fungible Token (NFT) and IFT rewards.
                </li>
            </ol>
        </div>
    )
}

export default UseCases;