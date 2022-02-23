


const Buy = () => {
    return (
        <div className="w-full md:w-[49%] rounded-lg bg-dark-gray p-8">
            <h1 className="font-semibold text-dark-white">Buy LUMIX</h1>
            <div className="">
                <div htmlFor="slimpage" className="text-sm py-2">Slippage</div>
                <div className="w-full rounded-lg border-2 border-dark-pri/40 flex text-sm items-center overflow-hidden">
                    
                    <input type="number" className="bg-dark-gray flex-1 px-2 py-1 outline-none" />
                    <span className="percentage px-3 border-l border-dark-pri/40">%</span>
                    <button className="px-2 py-1 bg-dark-sec text-dark">Auto slippage</button>
                </div>
            </div>
            <div className="pt-4">
                <div htmlFor="slimpage" className="text-sm py-2 flex justify-between">
                    <div className="">Amount</div>
                    <div className=""><span className="text-dark-white  ">BNB Balance:</span> 4500.7858</div>
                </div>
                <div className="w-full rounded-lg border-2 border-dark-pri/40 flex text-sm items-center overflow-hidden">
                    <input type="number" className="bg-dark-gray flex-1 px-2 py-1 outline-none" />
                    <button className="px-2 py-1 bg-dark-sec text-dark">Max</button>
                </div>
            </div>
            <div className="flex justify-between text-sm py-4">
                <div className="">Estimate Slippage</div>
                <div className="">Slippage Tolerance: 3%</div>
            </div>
            <div className="flex justify-between text-sm mb-4">
                <div className="">Minimum Recieved</div>
                <div className="">245 BNB</div>
            </div>
            <button className="w-36 bg-dark-sec py-3 text-dark-black font-bold rounded-full">Buy LUMIX</button>
        </div>
    )
}

export default Buy;