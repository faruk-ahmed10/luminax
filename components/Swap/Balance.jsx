
const balData = [
    {
        title: 'Price',
        token: 'BNB/LUMIX',
        token_amount: 0.299219131,
        balance: 128.61
    },
    {
        title: 'BNB Balance',
        token: 'BNB',
        token_amount: 0.13894652,
        balance: 117.531
    },
    {
        title: 'Drip Balance',
        token: 'LUMIX',
        token_amount: 0.000000000000000001,
        balance: 128.61
    },
];


const Balance = () => {


    return (
        <div className="w-full mt-8 bg-dark-gray p-8 rounded-lg">
            <h1 className="font-medium text-3xl text-dark-white">Balance</h1>
            <ul className="pt-8 sm:grid grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    balData.map((itm, idx) => (
                        <li className="mt-5 first:mt-0 sm:mt-0" key={`balace_item${idx}`}>
                            <h3 className="text-xs font-semibold text-dark-white pb-2">{itm.title}</h3>
                            <div className="w-full flex justify-between items-center">
                                <span className="font-semibold text-dark-white">{itm.token_amount}</span>
                                <span className="uppercase p-2 mx-2 bg-dark-pri/20 text-white rounded-md font-bold text-xs">{itm.token}</span>
                            </div>
                            <h5 className="text-tiny font-medium pt-1">{`${itm.token} ≈ ${itm.balance} USDT`}</h5>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Balance;