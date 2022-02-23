
const statsData = [
    {
        title: 'Supply',
        token: 'DRIP',
        token_amount: 3783938,
        balance: 128.61
    },
    {
        title: 'Contract Balance',
        token: 'BNB',
        token_amount: 0.13894652,
        balance: 117.531
    },
    {
        title: 'Transactions',
        token: 'BNB/DRIP',
        token_amount: 0.000000000000000001,
        balance: 128.61
    },
];


const Stats = () => {


    return (
        <div className="w-full my-8 bg-dark-gray p-8 rounded-lg">
            <h1 className="font-medium text-3xl text-dark-white">Stats</h1>
            <ul className="flex justify-between flex-wrap pt-8">
                {
                    statsData.map((itm, idx) => (
                        <li className="" key={`balace_item${idx}`}>
                            <h3 className="text-xs font-semibold text-dark-white pb-2">{itm.title}</h3>
                            <div className="">
                                <span className="font-semibold text-dark-white">{itm.token_amount}</span>
                                <span className="uppercase p-2 mx-2 bg-dark-pri/20 text-white rounded-md font-bold text-xs">{itm.token}</span>
                            </div>
                            <h5 className="text-tiny font-medium py-2">{`${itm.token} ≈ ${itm.balance} USDT`}</h5>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Stats;