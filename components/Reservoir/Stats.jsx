

const Stats = () => {


    return (
        <div className="w-full my-8 bg-dark-gray p-8 rounded-lg">
            <h1 className="font-medium text-3xl text-dark-white">Stats</h1>
            <div className="pt-8">
                <p className="">
                    Reservoir is The LUMIX Network’s solution for players that want benefit from non-inflationary yield farming through adding liquidity to DRIP. Here are the numbers...
                </p>
            </div>
            <div className="xs:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 pt-8">
                <div className="mt-5">
                    <h3 className="text-xs font-semibold text-dark-white/90 pb-2">Players</h3>
                    <div className="">
                        <span className="font-semibold text-dark-white">200</span>
                    </div>
                    <h5 className="text-tiny font-medium">User Count</h5>
                </div>
                <div className="mt-5">
                    <h3 className="text-xs font-semibold text-dark-white/90 pb-2">Total Value Locked</h3>
                    <div className="">
                        <span className="font-semibold text-dark-white">156.34k</span>
                    </div>
                    <h5 className="text-tiny font-medium">$4,398.32 LUMAX</h5>
                </div>
                <div className="mt-5">
                    <h3 className="text-xs font-semibold text-dark-white/90 pb-2">Rewards</h3>
                    <div className="">
                        <span className="font-semibold text-dark-white">0.00</span>
                    </div>
                    <h5 className="text-tiny font-medium">BNB</h5>
                </div>
                <div className="mt-5">
                    <h3 className="text-xs font-semibold text-dark-white/90 pb-2">Dividend Pool</h3>
                    <div className="">
                        <span className="font-semibold text-dark-white">0.38484/6756</span>
                    </div>
                    <h5 className="text-tiny font-medium">LUMAX (LUMIX/LOCKED)</h5>
                </div>
                <div className="mt-5">
                    <h3 className="text-xs font-semibold text-dark-white/90 pb-2">Contract Balance</h3>
                    <div className="">
                        <span className="font-semibold text-dark-white">45.13</span>
                        <span className="uppercase p-2 mx-2 bg-dark-pri bg-opacity-50 text-white rounded-md font-bold text-xs">BNB</span>
                    </div>
                    <h5 className="text-tiny font-medium">BNB</h5>
                </div>
                <div className="mt-5">
                    <h3 className="text-xs font-semibold text-dark-white/90 pb-2">Transactions</h3>
                    <div className="">
                        <span className="font-semibold text-dark-white">456.45</span>
                    </div>
                    <h5 className="text-tiny font-medium">Txs</h5>
                </div>
            </div>
        </div>
    )
}

export default Stats;