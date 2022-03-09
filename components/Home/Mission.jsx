import Image from 'next/image';
import { BsFillPlayCircleFill } from 'react-icons/bs';

// Importing assets
import mission from '../../assets/img/missionline.png';
import missionmic from '../../assets/img/missionmic.png';


const Mission = () => {

    return (
        <div id="mission" className="py-5">
            <div className="px-[10%]">
                <h1 className="font-bold text-center text-3xl text-dark-white sm:text-5xl lg:text-[80px] mb-10 lg:mb-20">
                    Our
                    <span className="relative"> Mission 
                        <span className="absolute -bottom-4 lg:-bottom-8 left-2 min-w-full">
                            <Image src={mission} alt={'Mission Line Image'} />
                        </span>
                    </span>
                </h1>
                <div className="md:flex items-center">
                    <div className="sm:w-80 sm:h-80 relative lg:w-1/3 rounded-lg border-8 border-dark-white/10 flex flex-col justify-center items-center py-5 lg:py-10">
                        <div className="">
                            <Image src={missionmic} alt={'Mission Microphone'} layout={'intrinsic'} />
                        </div>
                        <h5 className="text-center font-semibold text-dark-white">
                            Watch to learn more
                        </h5>
                        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 text-dark-sec text-7xl cursor-pointer">
                            <BsFillPlayCircleFill />
                        </div>
                    </div>
                    <div className="md:w-2/3 md:px-16 lg:px-28 ">
                        <h2 className="font-bold pt-10 text-2xl sm:text-4xl text-dark-white">
                            Our mission is to help build sustainable wealth out of the <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-700 to-dark-sec"> artist-fan economy</span> 
                        </h2>
                        <p className="mt-5 text-sm sm:text-base text-white/40">
                            Lumix makes your money work for you without thinking you about it. I will complete this part later but you get the general idea of what’s going on here.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission;