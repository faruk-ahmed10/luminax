import * as React from 'react';
import ReactModal from 'react-modal';
import { BsX } from 'react-icons/bs';
import modalShadow from '../../assets/modalShadow.svg';
import Image from 'next/image';

// ! styles for modal;
const customStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#0B0D28bb',
      zIndex: 100
    },
    content: {
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
    }
};


//* Component
const LuminaModal = ({children, closeModal, show, modalData, title}) => {

   
    return (
        <ReactModal  
            isOpen={show}
            ariaHideApp={true}
            overlayClassName="flex justify-center items-center" 
            className="relative z-50 text-white bg-secondary border-2 border-primary w-10/12 md:w-4/6 h-110" 
            style={customStyles}>

            <div className="px-5 py-10 md:px-36 flex flex-col justify-between items-center">
                <div className="absolute top-0 z-0">
                    <Image width={600} height={420} src={modalShadow} alt="Modal Shadow" />
                </div>
                <div className="w-full text-xl md:text-40px font-bold pt-5">
                    <h1 className="text-center">{title}</h1>
                    <div onClick={closeModal} className="absolute right-5 top-5 cursor-pointer hover:text-red"><BsX className="text-3xl" /></div>
                </div>
                <div className="pt-14 text-xl">
                    {
                        modalData && modalData.map((v, idx) => <p key={idx} className=""> {v} </p>)
                    }
                </div>
            </div>
        </ReactModal>
    )
}

export default LuminaModal;