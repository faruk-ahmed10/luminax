import Image from "next/image";

// Importing assets
import bannerbottom from '../../assets/img/bannerbottom.png';

const Banner = () => {

    return (
        <div className="w-[80%] relative flex mx-auto mt-20 md:mt-32 py-5 md:py-10 px-5 md:px-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-500">
            <div className="md:w-1/2">
                <h1 className="font-bold text-[40px] text-dark-white my-5">Upcoming Artist?</h1>
                <p className="text-white/70 text-sm">
                    Lumix makes your money work for you without 
                    thinking you about it. I will complete this part 
                    later but you get the general idea of what’s
                </p>

                <button className="text-xs md:text-base px-6 py-4 rounded-full bg-dark-white hover:bg-dark-sec my-5 font-bold text-dark-black transition-colors duration-300 ease-out">
                    Request Artist Sponsorship
                </button>
                <div className="md:w-80 lg:w-auto md:absolute right-5 bottom-0 -mb-5 md:-mb-2 flex justify-center md:block">
                    <Image src={bannerbottom} alt={'People With Microphone'} />
                </div>  
            </div>
        </div>
    )
}

export default Banner;