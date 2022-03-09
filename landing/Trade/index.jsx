import wave from '../../assets/Wave.svg';
import Image from 'next/image';
import LeftSec from './LeftSec';
import RightSec from './RightSec';

const Trade = () => {

    return (
        <div className="container mt-16 md:mt-24 pb-16 px-3 md:px-0 mx-auto relative">
            <div className="absolute right-0 bottom-0 -mb-1">
                <Image src={wave} alt="Wave" />
            </div>
            <div className="md:flex md:pb-28">
                <LeftSec />
                <RightSec />
            </div>
        </div>
    )
};


export default Trade;