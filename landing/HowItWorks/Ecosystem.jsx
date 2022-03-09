import * as React from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Ecosystem = () => {

    const firstRef = React.useRef();
    const secondRef = React.useRef();
    const thirdRef = React.useRef();

    React.useEffect(() => {

        gsap.timeline({duration: 1, scrollTrigger: {trigger: firstRef.current}})
        .from(firstRef.current, {y: 10, opacity: 0})
        .from(secondRef.current, {y: 10, opacity: 0})
        .from(thirdRef.current, {y: 10, opacity: 0})

    },[])
    return (
        <div className="mt-16">
            <h1 className="font-semibold text-xl pb-3">The LUMINA Ecosystem consists of </h1>
            <ol className="list-decimal text-xl">
                <li ref={firstRef} className="pb-3">The LUMINA®️ Token which is the digital currency that powers the whole ecosystem. </li>
                <li ref={secondRef} className="pb-3">The LUMINA®️ Social App where all the icon - fan experience takes place. It all happens there.</li>
                <li ref={thirdRef} className="">The LUMINA ExchangeThis is where all the trading of LUMIN and IFTs®️ take place. All the IFTs will be launched on the Exchange.</li>
            </ol>
        </div>
    )
}

export default Ecosystem;