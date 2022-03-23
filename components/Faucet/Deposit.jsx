import { BiCopy } from 'react-icons/bi';
import Copy from '../../assets/img/Line.svg';
import Image from 'next/image';
import gsap from 'gsap';
import { useEffect, useRef, useState, useContext } from 'react';
import { approve, balanceOf } from '../../web3client';
import { toast } from 'react-toastify';
import {SidebarContext} from '../../context/context'; 


const Deposit = () => {

    const [balance, setBalance] = useState();
    const [amount, setAmount] = useState();

    const { walletAddrs } = useContext(SidebarContext);

    const approveHandler = () => {
        if(!amount){
            toast.error('Amount is required!');
            return;
        }
        approve(amount)
        .then(rs => {
            setAmount('');
            toast.success('Approved!');
        }).
        catch(err => toast.error(err.message));
    
    };

    useEffect(() => {
        if(localStorage.getItem(!'WEB3_CONNECT_CACHED_PROVIDER')) return;
        balanceOf().then(bl => setBalance(bl)).catch(err => console.log(err));
    },[walletAddrs]);
    
    return (
        <div className="w-full rounded-lg bg-dark-gray p-8">
            <div className="">
                <h1 className="font-medium text-dark-white pb-2">Deposit</h1>
                <div className="text-right text-dark-white text-xs pb-2">LUMIX Balance: <span className="text-dark-pri/40">{234.9039393939399}</span></div>
                <div className="w-full rounded-lg flex overflow-hidden">
                    <input onChange={(e) => setAmount(e.target.value)} value={amount} type="text" name="" id="" className="outline-none rounded-l-lg border-y-2 border-l-2 border-dark-pri/40 focus:bg-dark/30 w-full bg-transparent py-2 px-2 text-xs placeholder:text-dark-pri/40" placeholder="Amount" />
                    <button className="bg-dark-sec text-dark-black text-xs px-4 hover:bg-dark-sec/80">Max</button>
                </div>
                <p className="text-sm my-4">
                    A minimum of 1 LUMIX required for deposits. 
                    A 10% tax is charged on deposits *
                </p>
                <div className="flex flex-col xs:flex-row justify-between gap-5">
                    <button onClick={approveHandler} className="bg-dark-sec hover:bg-transparent border-2 border-transparent  hover:border-dark-pri hover:text-dark-white px-7 py-2 text-dark-black rounded-full font-bold transition-all duration-200">Approve</button>
                    <button className="relative bg-dark-sec px-7 py-2 text-dark-black rounded-full font-bold overflow-hidden after:content[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-dark/60">Deposit</button>
                </div>
                <div className="w-full rounded-lg border border-dark-pri/50 mt-6">
                    <ul className="p-5">
                        <li className="pb-5">
                            <h3 className="">LUMIX balance/USDT</h3>
                            <p className="text-sm font-medium text-dark-white">{balance} LUMIX/3000 USDT</p>
                        </li>
                        <li className="border-t border-dark-pri/40 py-5">
                            <h3 className="">Price</h3>
                            <p className="text-sm font-medium text-dark-white">0.3039393939 BNB/LUMIX</p>
                        </li>
                        <li className="border-t border-dark-pri/40 pt-5">
                            <h3 className="pb-1">Referrral Link</h3>
                            <button className="shadow flex items-center bg-dark-white/10 hover:bg-dark-white/5 text-tiny xs:text-sm font-medium text-dark-white px-4 py-2 rounded-full">
                                <Image src={Copy} alt="Copy Icon" />
                                <span className="pl-2">Copy Referral Link</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Deposit;