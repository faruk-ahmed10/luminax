


const Buy = () => {



    return (
        <div className="w-full rounded-lg bg-dark-gray p-8">
            <h1 className="font-semibold text-dark-white">Buy LUMIX</h1>
            <div className="">
                <div htmlFor="slimpage" className="text-sm py-2">Slippage</div>
                <div className="w-full rounded-lg flex text-sm items-center overflow-hidden">
                    <input type="text" className="w-full focus:bg-dark/10 bg-dark-gray rounded-l-lg border-l-2 font-medium text-dark-white border-y-2 border-dark-pri/40 flex-1 px-3 py-2 outline-none" />
                    <div className="percentage px-3 py-2 border-l border-y-2 border-dark-pri/40">%</div>
                    <button className="outline-none px-2 py-2 bg-dark-sec hover:bg-dark-sec/80 border-2 border-dark-sec text-dark">Auto slippage</button>
                </div>
            </div>
            <div className="pt-4">
                <div htmlFor="slimpage" className="text-sm py-2 xs:flex justify-between">
                    <div className="">Amount</div>
                    <div className=""><span className="text-dark-white  ">BNB Balance:</span> 4500.7858</div>
                </div>
                <div className="w-full rounded-lg flex text-sm items-center overflow-hidden">
                    <input type="text" className="w-full bg-dark-gray focus:bg-dark/10 rounded-l-lg border-l-2 font-medium text-dark-white border-y-2 border-dark-pri/40 flex-1 px-3 py-2 outline-none" />
                    <button className="outline-none px-2 py-2 bg-dark-sec hover:bg-dark-sec/50 text-dark border-2 border-dark-sec">Max</button>
                </div>
            </div>
            <div className="xs:flex justify-between text-sm py-4">
                <div className="">Estimate Slippage</div>
                <div className="">Slippage Tolerance: 3%</div>
            </div>
            <div className="xs:flex justify-between text-sm mb-4">
                <div className="">Minimum Recieved</div>
                <div className="">245 BNB</div>
            </div>
            <button className="w-36 outline-none mt-2 xs:mt-0 bg-dark-sec hover:bg-dark border-2 border-transparent hover:border-dark-pri py-3 text-dark-black hover:text-dark-white font-bold rounded-full transition-all duration-200 ease-out">Buy LUMIX</button>
        </div>
    )
}

export default Buy;