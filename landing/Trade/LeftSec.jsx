import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const LeftSec = () => {

    const headRef = useRef();
    const strikeRef = useRef();
    const capitRef = useRef();
    const buyRef = useRef();

    useEffect(()=> {
        gsap.timeline({ 
            duration: 1,
            scrollTrigger: {
                trigger: headRef.current
            }
        })
        .from(strikeRef.current, {y: -20, opacity: 0})
        .from(headRef.current, {x: -20, opacity: 0})
        .from(capitRef.current, {y: 10, opacity: 0})
        .from(buyRef.current, {y: 10, opacity: 0}, )
    },[]);
    return (
                <div className="w-full md:w-1/2">
                    <div className="">
                        <span className="mr-3 uppercase text-sm md:text-base text-lightpeach border border-dashed tracking-widest border-lightpeach px-2 py-1 inline-block">
                            music
                        </span>
                        <span className="mr-3 uppercase text-sm md:text-base text-lightpeach border border-dashed tracking-widest border-lightpeach px-2 py-1 inline-block">
                            sports
                        </span>
                        <span className="mr-3 uppercase text-sm md:text-base text-lightpeach border border-dashed tracking-widest border-lightpeach px-2 py-1 inline-block">
                            fasions
                        </span><br/>
                        <span className="mt-5 uppercase text-sm md:text-base text-lightpeach border border-dashed tracking-widest border-lightpeach px-2 py-1 inline-block">
                            popular shows
                        </span>
                    </div>
                    <h2 ref={strikeRef} className="text-red text-2xl md:text-40px font-light mt-8 md:mt-14">
                        <s>Don’t just love them.</s>
                    </h2>
                    <h1 ref={headRef} className="text-5xl md:text-80px font-bold text-white pt-2 leading-none">
                        Trade Them.<br/>
                        Mint Them.<br/>
                        Build Wealth.
                    </h1>
                    <p ref={capitRef} className="text-white text-sm md:text-base text-opacity-70 mt-3 md:mt-10">
                        Capitalize on trends and trade with confidence through our expansive Icon Fans Token listings.
                    </p>
                    <p ref={buyRef} className="text-sm md:text-xl text-darkblue mt-3">
                        Buy, sell, and trade over 500 Icon Fan Tokens
                    </p>
                </div>
    )
};
export default LeftSec;