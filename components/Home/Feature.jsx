import Image from 'next/image';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { AiOutlinePieChart } from 'react-icons/ai';

// importing assets
import  powerline from '../../assets/img/powerline.png';
import  missionmic from '../../assets/img/missionmic.png';
import right from '../../assets/img/Right.png';

const Feature = () => {

    return (
        <div className="px-[10%] py-5 mt-20" id='feature'>
            <div className="">
                <h1 className="font-bold text-center text-dark-white text-3xl sm:text-[80px] leading-[86px] mb-20">
                    <span className="relative">Powerful  
                        <span className="absolute -bottom-10 sm:-bottom-4 left-0 min-w-full">
                            <Image src={powerline} alt={'Mission Line Image'} />
                        </span>
                    </span> Feature
                </h1>
                <div className="lg:flex items-center">

                    <div className="lg:ml-20 lg:w-1/2 mt-10 lg:mt-0">
                        <div className="flex justify-between items-center mb-5 font-bold md:text-xl text-dark-white/70 border-b-2 border-white/10">
                            <h4 className="relative cursor-pointer text-dark-sec pb-2 after:absolute after:content[''] after:left-0 after:top-full after:w-full after:h-0.5 after:bg-dark-sec">Music Lovers</h4>
                            <h4 className="relative cursor-pointer pb-2 after:absolute after:content[''] after:left-0 after:top-full after:w-full after:h-0.5 after:bg-dark-sec">Upcoming artists</h4>
                        </div>
                        <div className="">
                            <h1 className="font-bold text-xl md:text-4xl text-dark-white pt-6">
                                Auto Compounding. 
                                Auto Withdrawal.
                                Sustainable cash flow.
                            </h1>
                            <p className='mt-6 text-sm md:text-base'>
                                Lumix makes your money work for you without thinking you about it. I will complete this part later but you get the general idea of what’s going on here.
                            </p>
                        </div>
                    </div>
                    <div className="mt-10 lg:w-1/2 order-first">
                        <div className="relative xs:w-80 xs:h-80 rounded-lg border-8 border-dark-white/10 flex flex-col justify-center items-center">
                            <div className="overflow-hidden">
                                <Image src={right} alt={'Mission Microphone'} height={320} width={320} />
                            </div>
                            {/* <h5 className="text-center font-semibold text-dark-white">
                                Watch to learn more
                            </h5> */}
                            <div className="absolute p-2 md:p-5 bg-green-500 rounded-lg text-dark-black top-1/2 right-0 translate-x-1/2 -translate-y-1/2 cursor-pointer">
                                <h5 className="font-medium text-xs xs:text-base">up to</h5>
                                <h1 className="font-medium text-sm xs:text-4xl">404% ROI</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <h1 className="pt-10 text-center font-bold text-2xl md:text-5xl text-dark-white">
                        Lumix is special in <br/>many ways.
                    </h1>
                    <p className="text-center text-white/70 my-5 text-sm md:text-base">
                        Lumix has a variety of features that make it the best place to start trading
                    </p>
                    <div className="pt-10 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {
                            Array(6).fill('').map((v, idx) => {
                                return (
                                    <div key={idx} className="text-center p-10 rounded-lg border-2 border-dark-white/10">
                                        <div className="flex justify-center text-4xl text-dark-sec">
                                            <AiOutlinePieChart />
                                        </div>
                                        <h1 className="font-bold text-2xl text-dark-white mt-10">Record Label</h1>
                                        <p className="mt-5 text-white/70">
                                            Buy and sell popular digital currencies, keep track of them in the one place.
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature;