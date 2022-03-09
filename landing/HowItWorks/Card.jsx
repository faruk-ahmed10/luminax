import gsap from "gsap";
import { useEffect, useRef } from "react";

const Card = ({index, data}) => {

    const { title, listData } = data;
    const headingRef = useRef();
    const cardRef = useRef();
    const listRef = useRef([]);

    // Animating the list items
    useEffect(() => {
        const tl = gsap.timeline({
            duration: 1, 
            scrollTrigger: {
                trigger: headingRef.current
            }})
            .from(cardRef.current, {x: !(index % 2) ? '-30%' : '30%', opacity: 0});
        listRef.current.map((v, idx) => tl.from(v, {y: 10, opacity: 0}));
    })
    return (
        <div ref={cardRef} className={`p-5 md:p-10 ${index === 0 ? 'bg-thinblue':'bg-white'}`}>
            <div className="flex flex-col md:flex-row justify-between md:items-center">
                <h1 ref={headingRef} className="uppercase text-40px text-gray-700 text-opacity-50 font-light">FOR <span className="font-bold text-black1">{title}</span></h1>
                {/* <button className={`transition duration-200 ease-in-out uppercase border px-5 my-5 md:my-0 py-2 text-sm font-bold ${index !== 0 ? ' text-black2 border-black2 hover:bg-gray-100 bg-opacity-50' : ' text-blue3 border-blue3 hover:bg-white'}`}>{btnTitle}</button> */}
            </div>
            <ul className="">
                {
                    listData.map((v, idx) => (
                        <li key={idx} ref={ref => listRef.current[idx] = ref} className="flex items-center py-4 md:py-8 border-b">
                            <div className={`w-8 md:w-12 h-12 md:h-14 rounded-3xl text-white text-2xl pl-5 pr-7 mr-4 flex justify-center items-center bg-black2`}>
                                <span className="font-semibold pl-2">0{idx+1}</span>
                            </div>
                            <div className="">
                                <h3 className="font-semibold text-lg md:text-2xl text-black4">{v.title}</h3>
                                <p className="text-black1 text-xs md:text-base font-medium">{v.description}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};


export default Card;