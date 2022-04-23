import React from 'react';
import Layout from '../layouts/Layout';
import Image from 'next/image';

const Sacrifice = () => {

    const [balance, setBalance] = React.useState();
    const [amount, setAmount] = React.useState();
    const [allownce, setAllownce] = React.useState();
    const [addrs, setAddrs] = React.useState();


    const approveHandler = () => {};
    const depositHandler = () => {};

    return (
        <div className="px-10 ">
            <div className="text-white">
                <h1 className="text-5xl font-bold">Sacrifice</h1>
                <p className="text-2xl">You have <span className="text-dark-sec">0 </span> points</p>
            </div>
            <div className="w-full rounded-lg bg-dark-gray p-8 mt-10">

                <div className="">
                    <h1 className="font-medium text-dark-sec pb-2">Current Day: <span className="">3</span></h1>
                    <div className="text-right text-sm font-medium pb-2 flex justify-between items-center">
                        <div className="text-dark-pri/80">Amount</div>
                        <div className="text-dark-white">Max</div>
                    </div>
                    <div className="w-full rounded-lg flex overflow-hidden mb-5">
                        <input onChange={(e) => setAmount(e.target.value)} value={amount} type="text" name="" id="" className="outline-none rounded-l-lg border-y-2 border-l-2 border-dark-pri/40 focus:bg-dark/30 w-full bg-transparent py-2 px-2 text-xs placeholder:text-dark-pri/40" placeholder="Amount" />
                        <select className="bg-dark-sec text-dark-black text-xs px-4 hover:bg-dark-sec/80">
                            <option value="">BNB</option>
                        </select>
                    </div>
                    <div className="text-sm font-medium">
                        <div className="text-dark-pri/80">Referral Address (Optional)</div>
                    </div>
                    <div className="w-full rounded-lg overflow-hidden mt-2 mb-5">
                        <input onChange={(e) => setAddrs(e.target.value)} value={addrs} type="text" name="" id="" className="outline-none rounded-lg border-2 text-white border-dark-pri/40 focus:bg-dark/30 w-full bg-transparent py-2 px-2 text-xs placeholder:text-dark-pri/40" placeholder="Add buddy address" />
                    </div>
                    <div className="text-right text-sm pb-2 flex justify-between items-center">
                        <div className="text-dark-pri/80">Your Points</div>
                        <div className="text-dark-white">30,090,098,890</div>
                    </div>
                    <div className="text-dark-pri/80 text-sm pb-2 flex justify-between items-center">
                        <div className="">Minimum sac amount</div>
                        <div className="">100 BUSD</div>
                    </div>
                    <div className="flex flex-col xs:flex-row justify-between gap-5">
                        <button onClick={approveHandler} className={`relative transition-all duration-500 ease-in-out bg-dark-sec px-7 py-2 text-dark-black rounded-full font-bold overflow-hidden after:content[''] ${!amount || Number(amount) < 1 || (amount === allownce) ? 'visible' : 'visible'}`}>Approve</button>
                        <button onClick={depositHandler} className={`relative bg-dark-sec px-7 py-2 text-dark-black rounded-full font-bold overflow-hidden after:content[''] ${!amount || (amount !== allownce) ? 'after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-white/30 cursor-not-allowed' : ''}`}>Deposit</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Sacrifice;

Sacrifice.getLayout = (page) => (
    <Layout>
        {page}
    </Layout>);