import { useState } from "react";

const spotItems = [
    {
        title: 'Available',
        token_amount: 0.27894652,
        balance: 10098.36
    },
    {
        title: 'Deposit',
        token_amount: 423.34,
        balance: 10098.36
    },
    {
        title: 'Drained',
        token_amount: 0.13894652,
        balance: 10098.36
    },
    {
        title: 'Max Payout',
        token_amount: 0.13894652,
        balance: 10098.36
    },
    {
        title: 'Rewarded',
        token_amount: 45.13894652,
        balance: 10098.36
    },
];



const Spot = () => {

    const [autoRecharge, setAutoRecharge] = useState(true);

    return (
        <div className="w-full bg-dark-gray p-8 rounded-lg">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-dark-white">Spot</h1>
                <div className="flex items-center">
                    <div className="hidden md:block">
                        {/* <button className="text-sm px-4 py-2 rounded-full bg-dark-white hover:bg-dark-sec mx-1 font-bold text-dark-black transition-colors duration-300 ease-out">Deposit</button> */}
                        <button className="text-sm px-4 py-2 rounded-full bg-dark-white hover:bg-dark-sec mx-1 font-bold text-dark-black transition-colors duration-300 ease-out">Recharge</button>
                        <button className="text-sm px-4 py-2 rounded-full bg-dark-white hover:bg-dark-sec mx-1 font-bold text-dark-black transition-colors duration-300 ease-out">Drain</button>
                    </div>
                    <div className="mx-1 flex">
                        <span className="text-xs text-dark-pri">Auto recharge</span>
                        <div onClick={() => setAutoRecharge(!autoRecharge)} className={`relative w-8 h-4 rounded-full ml-2 cursor-pointer transition-all duration-500 ease-in-out ${autoRecharge ? 'bg-green-400' : 'bg-dark-pri'}`}>
                            <div className={`absolute top-0 w-4 h-4 rounded-full shadow bg-dark-white transition[left] duration-500 ease-in-out ${autoRecharge ? 'left-4' : 'left-0'}`}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:hidden pt-8">
                <button className="text-sm px-4 py-2 rounded-full bg-dark-white hover:bg-dark-sec mx-1 font-bold text-dark-black transition-colors duration-300 ease-out">Deposit</button>
                <button className="text-sm px-4 py-2 rounded-full bg-dark-white hover:bg-dark-sec mx-1 font-bold text-dark-black transition-colors duration-300 ease-out">Recharge</button>
                <button className="text-sm px-4 py-2 mt-5 md:mt-0 rounded-full bg-dark-white hover:bg-dark-sec mx-1 font-bold text-dark-black transition-colors duration-300 ease-out">Drain</button>
            </div>
            <div className="pt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 transition-all duration-500 ease-in-out">
                {
                    spotItems.map((itm, idx) => (
                        <div className="" key={`spot_item${idx}`}>
                            <h3 className="text-xs font-semibold text-dark-white/90 pb-2">{itm.title}</h3>
                            <div className="">
                                <span className="font-semibold text-dark-white">{itm.token_amount}</span>
                                <span className="uppercase p-2 mx-2 bg-dark-pri/40 bg-opacity-50 text-white rounded-md font-bold text-xs">LUMIX</span>
                            </div>
                            <h5 className="text-tiny font-medium">${itm.balance}</h5>
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}

export default Spot;