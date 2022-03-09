import * as React from 'react';
import Image from 'next/image';
import mobile from '../../assets/mobile.svg';
import {FaCheckCircle} from 'react-icons/fa';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Slide from './Slide';
import PowerofIft from './Powerofift';
import UseCases from './Usecases';
import Ecosystem from './Ecosystem';
import LuminaApp from './LuminaApp';
gsap.registerPlugin(ScrollTrigger);


 
const BottomSec = () => {

    const [active, setActive] = React.useState(0);
    const bottomRef = React.useRef();
    const firstRef = React.useRef();
    const secondRef = React.useRef();
    const uiRef = React.useRef();
    const triRef = React.useRef([]);

    // Animating bottom section 
    React.useEffect(()=> {

        const tl = gsap.timeline({
            duration: 1,
            scrollTrigger: {
                trigger: bottomRef.current
            }
        })
        .from(bottomRef.current, {y: 25, opacity: 0});

        triRef.current.map((v, idx) => tl.from(v, {x: 15, opacity: 0}));
        tl.from(firstRef.current,{y: -15, opacity: 0});
        tl.from(secondRef.current, {y: 15, opacity: 0});
        tl.from(uiRef.current, {x: '15%', opacity: 0});

    },[]);

    return (
        <div id="ecosystem" ref={bottomRef} className="w-full mt-10 py-10 md:py-20 px-5 md:px-28 text-black1" style={{background: '#FFF7ED'}}>
            <h1 className="font-bold text-3xl md:text-56px leading-tight">
                Icon-Fan Engagement<br/>
                <span className="text-2xl md:text-56px">Tokenized. Re-imagined.</span>
            </h1>
            <ul className="mt-5 md:mt-12 flex flex-wrap">
                {
                    ['The Power of IFT', 'Use Cases', 'Ecosystem', 'Lumina App'].map((v, idx) => (
                        <>
                            <li key={`v_${idx}`} ref={ref => triRef.current[idx] = ref} onClick={() => setActive(idx)} className={`text-xs md:text-sm transition duration-1000 ease-in-out font-bold mr-3 md:mr-8 px-3 py-2 rounded-full cursor-pointer ${active === idx ? 'bg-black text-white': 'text-gray-700'}`}>
                                {v}
                            </li>
                        </>
                    ))
                }
            </ul>
            <div className="">
                {
                    active === 1 ? <UseCases />:
                        active === 2 ? <Ecosystem />:
                            active === 3 ? <LuminaApp />:
                                <PowerofIft />
                }
            </div>
        </div>
    )
};

export default BottomSec;