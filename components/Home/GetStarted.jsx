import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';

// Importing assets
import powerline from '../../assets/img/powerline.png';

const getData = [
    {
        title: 'Install Metamask',
        description: 'Download Metamask extension on a desktop browser like Chrome. You can store &amp; manage your Lumix in this Binance Chain wallet.'
    },
    {
        title: 'Buy BNB',
        description: 'Download Metamask extension on a desktop browser like Chrome. You can store & manage your Lumix in this Binance Chain wallet.'
    },
    {
        title: 'Swap for Lumix',
        description: 'Download Metamask extension on a desktop browser like Chrome. You can store & manage your Lumix in this Binance Chain wallet.'
    },
    {
        title: 'Deposit Lumix',
        description: 'Download Metamask extension on a desktop browser like Chrome. You can store &amp; manage your Lumix in this Binance Chain wallet.'
    },
];


const GetStarted = () => {
    
    return (
        <div id='how' className="px-[10%] mt-20">
            <div className="">
                <h1 className="font-bold text-center text-dark-white text-4xl xs:text-5xl md:text-[80px] mb-10">
                    <span className="relative">Get Started  
                        <span className="absolute -bottom-2  md:-bottom-3 left-0 min-w-full">
                            <Image src={powerline} alt={'Mission Line Image'} />
                        </span>
                    </span> in<br/>
                    4 easy steps
                </h1>
                <div className="sm:grid gap-5 grid-cols-2 lg:grid-cols-4">
                    {
                        getData.map((v, idx) => (
                            <div key={idx} className="bg-dark-white rounded-lg mb-5">
                                <div className="px-5 py-10">
                                    <h1 className="font-bold text-xl text-dark-black">
                                        <span className="text-[#0077FF]">{idx + 1}.</span>
                                        {v.title}
                                    </h1>
                                    <p className="text-dark/80 mt-2">
                                        Download Metamask extension on a desktop 
                                        browser like Chrome. You can store &amp; manage 
                                        your Lumix in this Binance Chain wallet.
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="my-5 flex justify-center">
                    <button className="flex justify-center items-center w-44 text-sm px-6 py-4 rounded-full hover:bg-dark-white bg-dark-sec mx-3 font-bold text-dark-black transition-colors duration-300 ease-out">
                        Buy Lumix <span className="px-2"><BsArrowRight /></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GetStarted;