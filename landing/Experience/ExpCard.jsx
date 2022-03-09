import Image from 'next/image';
import { AiOutlinePlus } from 'react-icons/ai';
import line from '../../assets/line.svg';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import Modal from '../Modal/Modal';

const ExpCard = ({items, itemIdx}) => {

    const [show, setShow] = useState(false);

    const nodeRef = useRef();
    const iconRef = useRef();
    const lineRef = useRef();
    const titleRef = useRef();
    const descRef = useRef();
    const {icon, title, description, bg_color, modal_data} = items;

    useEffect(()=> {
        gsap.timeline({
            duration: 2,
            scrollTrigger: {
                        trigger: nodeRef.current,
                    }
        })
        .from(nodeRef.current,{x: !(itemIdx % 2) ? '-30%': '30%', opacity: 0})
        .from(iconRef.current, {y: -10, opacity: 0})
        .from(lineRef.current, {y: 10, opacity: 0}, "<")
        .from(titleRef.current, {y: -10, opacity: 0})
        .from(descRef.current, {y: 10, opacity: 0}, "<")
        // gsap.from(nodeRef.current, {
        //     duration: 1,
        //     opacity: 0,
        //     x: !(itemIdx % 2) ? '-10%': '10%',
        //     scrollTrigger: {
        //         trigger: nodeRef.current,
        //         start: 'center center',
        //     }
        // });
    },[]);

    return (
        <div ref={nodeRef} className={`${bg_color} px-7 py-10`}>
            <Modal show={show} closeModal={() => setShow(!show)} modalData={modal_data} title={title} />
            <div className="flex justify-between items-center">
                <div ref={iconRef} ><Image width={70} height={70}  src={icon} alt="Stake" /></div>
                <div ref={lineRef} ><Image width={150} height={70} src={line} alt="Line" /></div>
            </div>
            <div ref={titleRef} className="flex justify-between pt-5 md:pt-20 text-4xl text-white">
                <h1 className="">{title}</h1>
                <AiOutlinePlus onClick={() => setShow(!show)} className="cursor-pointer" />
            </div>
            <div className="text-white">
                <p ref={descRef} className="pt-4">
                    {description}
                </p>
            </div>
        </div>
    )
};

export default ExpCard;