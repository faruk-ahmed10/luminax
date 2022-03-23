import * as React from 'react';
import Image from 'next/image';
import modalImage from '../../assets/modal-icon.png';
import gsap from 'gsap';

const ModalSlide = ({text, show, modalRef}) => {
    

    return (
            <div ref={modalRef} className={`text-center ${show ? 'block' : 'hidden'}`}>
                <Image width={130} height={100} src={modalImage} alt="Logo" />
                <p className="py-5 text-white text-opacity-50 text-left">
                    {text} 
                </p>
            </div>
    )
}

export default ModalSlide;