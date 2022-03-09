import * as React from 'react';
import Image from 'next/image';
import {FaCheckCircle} from 'react-icons/fa';
import mobile from '../../assets/mobile.svg';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



const Slide = ({active, data}) => {

    const {title, description1, description2} = data;
    const firstRef = React.useRef();
    const secondRef = React.useRef();
    const servicesRef = React.useRef();
    const uiRef = React.useRef();

     // Animating bottom section 
     React.useEffect(()=> {

        const tl = gsap.timeline({
            duration: 0.5,
            scrollTrigger: {
                trigger: firstRef.current
            }
        })
        tl.from(firstRef.current,{y: -15, opacity: 0});
        tl.from(secondRef.current, {y: 15, opacity: 0});
        tl.from(uiRef.current, {x: '15%', opacity: 0});
        tl.from(servicesRef.current, {y: 25, opacity: 0});

    },[active]);

    return (
      <div className={active ? 'block' : 'hidden'}>
                <div className="flex flex-col-reverse md:flex-row mt-16">
                    <div className="w-full md:w-2/3 md:pr-20 text-black1">
                        <p ref={firstRef} className="">
                            { title + ' ' + description1}
                        </p>
                        <p ref={secondRef} className="pt-10">
                            {description2}
                        </p>
                    </div>
                    <div ref={uiRef} className="w-full md:w-1/3">
                        <Image src={mobile} alt="Mobile" />
                    </div>
                </div>
      </div>  
    )
}

export default Slide;