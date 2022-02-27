import { useState } from "react";



const Sell = ({ title, btnTitle, }) => {

    const [autoRecharge, setAutoRecharge] = useState(true);

    return (
        <div className="w-full rounded-lg bg-dark-gray p-8 mt-8 lg:mt-0">
            <h1 className="font-semibold text-dark-white">Withdraw</h1>
            <div className="">
                <div htmlFor="slimpage" className="text-sm py-2">Slippage</div>
                <div className="w-full rounded-lg flex text-sm items-center overflow-hidden">
                    <input type="text" className="w-full bg-dark-gray focus:bg-dark/10 rounded-l-lg border-l-2 font-medium text-dark-white border-y-2 border-dark-pri/40 flex-1 px-3 py-2 outline-none" />
                    <div className="percentage px-3 py-2 border-l border-y-2 border-dark-pri/40">%</div>
                    <button className="px-2 py-2 bg-dark-sec border-2 border-dark-sec text-dark">Auto slippage</button>
                </div>
            </div>
            <div className="pt-4">
                <div htmlFor="slimpage" className="text-sm py-2 xs:flex justify-between">
                    <div className="">Amount</div>
                    <div className=""><span className="text-dark-white  ">LUMIX Balance:</span> 4500.7858</div>
                </div>
                <div className="w-full rounded-lg flex text-sm items-center overflow-hidden">
                    <input type="number" className="w-full bg-dark-gray focus:bg-dark/10 rounded-l-lg border-l-2 font-medium text-dark-white border-y-2 border-dark-pri/40 flex-1 px-3 py-2 outline-none" />
                    <button className="px-2 py-2 bg-dark-sec text-dark border-2 border-dark-sec ">Max</button>
                </div>
            </div>
            <div className="xs:flex justify-between text-sm py-4">
                <div className="">Estimate Slippage</div>
                <div className="">Slippage Tolerance: 3%</div>
            </div>
            <div className="xs:flex justify-between text-sm">
                <div className="">Minimum Recieved</div>
                <div className="">245 BNB</div>
            </div>
            <div className="xs:flex justify-between items-center">
                <button className="w-36 my-5 xs:my-0 xs:mt-3 bg-dark-sec hover:bg-transparent border-2 border-transparent hover:border-dark-pri px-7 py-2 text-dark-black focus:text-dark-white rounded-full font-bold">Withdraw</button>
                <div className="mx-1  flex">
                    <span className="text-xs text-dark-pri">Auto recharge</span>
                    <div onClick={() => setAutoRecharge(!autoRecharge)} className={`relative w-8 h-4 rounded-full ml-2 cursor-pointer transition-all duration-500 ease-in-out ${autoRecharge ? 'bg-green-400' : 'bg-dark-pri'}`}>
                        <div className={`absolute top-0 w-4 h-4 rounded-full shadow bg-dark-white transition[left] duration-500 ease-in-out ${autoRecharge ? 'left-4' : 'left-0'}`}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sell;