import { BiCopy } from 'react-icons/bi';


const Deposit = () => {

    
    return (
        <div className="w-full rounded-lg bg-dark-gray p-8">
            <div className="">
                <h1 className="font-medium text-dark-white pb-2">Deposit</h1>
                <div className="text-right text-dark-white text-xs pb-2">LUMIX Balance: <span className="text-dark-pri/40">{234.9039393939399}</span></div>
                <div className="w-full rounded-lg flex overflow-hidden">
                    <input type="text" name="" id="" className="outline-none rounded-l-lg border-y-2 border-l-2 border-dark-pri/40 w-full bg-transparent py-2 px-2 text-xs placeholder:text-dark-pri/40" placeholder="Amount" />
                    <button className="bg-dark-sec text-dark-black text-xs px-4">Max</button>
                </div>
                <p className="text-sm my-4">
                    A minimum of 1 LUMIX required for deposits. 
                    A 10% tax is charged on deposits *
                </p>
                <div className="flex justify-between gap-5">
                    <button className="bg-dark-sec px-7 py-2 text-dark-black rounded-full font-bold">Approve</button>
                    <button className="relative bg-dark-sec px-7 py-2 text-dark-black rounded-full font-bold overflow-hidden after:content[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-dark/60">Deposit</button>
                </div>
                <div className="w-full rounded-lg border border-dark-pri/50 mt-5">
                    <ul className="p-5">
                        <li className="pb-5">
                            <h3 className="">LUMIX balance/USDT</h3>
                            <p className="text-sm font-medium text-dark-white">0.30393939 LUMIX/3000 USDT</p>
                        </li>
                        <li className="border-t border-dark-pri/40 py-5">
                            <h3 className="">Price</h3>
                            <p className="text-sm font-medium text-dark-white">0.3039393939 BNB/LUMIX</p>
                        </li>
                        <li className="border-t border-dark-pri/40 pt-5">
                            <h3 className="pb-1">Referrral Link</h3>
                            <button className="flex items-center bg-dark-pri/50 text-sm font-medium text-dark-white px-3 py-2 rounded-full">
                                <span className="pr-2"><BiCopy /></span>
                                <span className="">Copy Referral Link</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Deposit;