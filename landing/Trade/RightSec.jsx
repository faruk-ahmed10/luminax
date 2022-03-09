import * as React from 'react';
import Image from 'next/image';
import Card from './Card';
import gsap from 'gsap';
import bunro from '../../assets/profile/bunro.png';
import wizkid from '../../assets/profile/wizkid.png';
import anthony from '../../assets/profile/anthony.png';
import israel from '../../assets/profile/israel.png';


const RightSec = (props) => {

    const backRef = React.useRef();
    const fRef = React.useRef();
    const sRef = React.useRef();
    const tRef = React.useRef();
    const foRef = React.useRef();

    // Profile data....................
    const profileData = [
        {   
            profile: bunro,
            name: 'Tiwa Savage',
            sub: 'TIWA',
            val: 4.90,
            percent: {
                inc: 5.26,
                total: 0.02
            },
            style: 'top-5 left-1 md:left-2',
            ref: fRef
        },
        {   
            profile: wizkid,
            name: 'Burna Boy',
            sub: 'BUR',
            val: 4.89,
            percent: {
                inc: 1.40,
                total: 321.78
            },
            style: 'top-10 right-1 md:right-2',
            ref: sRef
        },
        {   
            profile: anthony,
            name: 'Wizkid',
            sub: 'WIZ',
            val: 4.95,
            percent: {
                inc: 10.40,
                total: 0.5
            },
            style: 'bottom-0 right-1 md:right-2',
            ref: tRef
        },
        {   
            profile: israel,
            name: '2Face Idibia',
            sub: 'TIWA',
            val: 4.55,
            percent: {
                inc: 1.40,
                total: 0.11
            },
            style: 'bottom-7 left-1 md:left-3',
            ref: foRef
        },
    ];
    // Animating
    React.useEffect(() => {

        gsap.timeline({
            duration: 1,
            scrollTrigger: {
                trigger: tRef.current
            },
        })
        .from(backRef.current, {scale: 0.8, opacity: 0})
        .from(fRef.current, {x: -15, y: -15, opacity: 0})
        .from(sRef.current, {x:  15, y: -15, opacity: 0}, '<')
        .from(tRef.current, {x:  15, y:  15, opacity: 0}, '<')
        .from(foRef.current, {x: -15, y: 15, opacity: 0}, '<')
    },[]);

    return (
                <div className="w-full md:w-1/2 flex justify-center items-center mt-10 sm:mt-0">
                    <div className="relative">
                        <div ref={backRef} className="clip-path w-88 sm:w-96 h-96 sm:h-110 bg-lightblue"></div>
                           
                            {
                                profileData.map((item, idx) => (
                                    <div key={idx} ref={item.ref} className={`absolute ${item.style}`}>
                                        <Card data={item} index={idx} />
                                    </div>
                                ))
                            }
                    </div>
                </div>
    )
};

export default RightSec;