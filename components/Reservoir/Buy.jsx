


const Buy = () => {

    return (
        <div className="w-full rounded-lg bg-dark-gray p-8">
            <h1 className="font-semibold text-dark-white">Buy and Deposit</h1>
            <div className="w-full">
                <div htmlFor="slimpage" className="text-sm py-2">Slippage</div>
                <div className="w-full rounded-lg flex text-sm items-center overflow-hidden">
                    <input type="text" className="w-full bg-dark-gray focus:bg-dark/10 rounded-l-lg border-l-2 font-medium text-dark-white border-y-2 border-dark-pri/40 flex-1 px-3 py-2 outline-none" />
                    <div className="percentage px-3 py-2 border-l border-y-2 border-dark-pri/40">%</div>
                    <button className="px-2 py-2 bg-dark-sec hover:bg-dark-sec/80 border-2 border-dark-sec hover:dark-sec/80 hover:border-dark-sec/30 text-dark">Auto slippage</button>
                </div>
            </div>
            <div className="pt-4">
                <div htmlFor="slimpage" className="text-sm py-2 xs:flex justify-between">
                    <div className="">Amount</div>
                    <div className=""><span className="text-dark-white  ">BNB Balance:</span> 4500.7858</div>
                </div>
                <div className="w-full rounded-lg flex text-sm items-center overflow-hidden">
                    <input type="text" className="w-full bg-dark-gray focus:bg-dark/10 rounded-l-lg border-l-2 font-medium text-dark-white border-y-2 border-dark-pri/40 flex-1 px-3 py-2 outline-none" />
                    <button className="px-2 py-2 bg-dark-sec hover:bg-dark-sec/80 text-dark border-2 border-dark-sec hover:border-dark-sec/30">Max</button>
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
            <button className="w-36 mt-5 xs:mt-3 bg-dark-sec hover:bg-transparent border-2 border-transparent hover:border-dark-pri px-7 py-2 text-dark-black hover:text-dark-white focus:text-dark-white rounded-full font-bold">Buy</button>
        </div>
    )
}

export default Buy;