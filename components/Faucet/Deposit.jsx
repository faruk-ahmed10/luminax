import { BiCopy } from 'react-icons/bi';
import Copy from '../../assets/img/Line.svg';
import Image from 'next/image';
import useAsyncEffect from "use-async-effect";
import gsap from 'gsap';
import { useEffect, useRef, useState, useContext } from 'react';
// import { approve, balanceOf, deposit, getAllownce } from '../../web3client';
import { toast } from 'react-toastify';
import { APPROVAL_AMOUNT, useGlobalContext } from '../../context/globalProvider';


const Deposit = () => {
    const [amount, setAmount] = useState('');
    const [allownce, setAllownce] = useState(0);
    const [addrs, setAddrs] = useState('');
    const [approved, setApproved] = useState(false);
    const [deposited, setDeposited] = useState(false);

    const { selectedAccount, lumixBalance, bnbLumixPrice, deposit, approve, isConnected, getAllownce } = useGlobalContext();

    const approveHandler = async () => {
        if (!isConnected) return toast.error('Please, Connect your account!');
        if (amount > allownce || isNaN(amount)) return;

        try {
            await approve(process.env.NEXT_PUBLIC_FAUCET_ADDRESS, APPROVAL_AMOUNT, selectedAccount);
            toast.dismiss();
            toast.success('Approved!');
            setApproved(true);
            setDeposited(false);
        } catch (error) {
            toast.error(error?.message || 'Approve failed');
        }
    };

    const depositHandler = async () => {
        if (!isConnected) return toast.error('Please, Connect your account!');

        if (amount > allownce) return;
        if (isNaN(amount) || !amount || amount < 1) {
            toast.error('Amount is required!');
            return;
        }

        try {
            await deposit(amount);
            toast.dismiss();
            setAmount('');
            setDeposited(true);
            setApproved(false);
            toast.success('Deposit successfull');
        } catch (error) {
            toast.error(error?.message ?? err ?? 'Deposit failed')
        }
        
    };


    useAsyncEffect(async (activate) => {
        if (!selectedAccount) return;
        try {
            const bal = await getAllownce(process.env.NEXT_PUBLIC_FAUCET_ADDRESS, selectedAccount);
            if (!activate) return;
            setAllownce(Number(bal));
        } catch (error) {
            console.log(error);
        }

    }, [selectedAccount, approved]);

    useEffect(() => setDeposited(false), [deposited]);


    return (
        <div className="w-full rounded-lg bg-dark-gray p-8">
            <div className="">
                <h1 className="font-medium text-dark-white pb-2">Deposit</h1>
                <div className="text-right text-dark-white text-xs pb-2">LUMIX Balance: <span className="text-dark-pri/40">{lumixBalance}</span></div>
                <div className="w-full rounded-lg flex overflow-hidden">
                    <input onChange={(e) => setAmount(Number(e.target.value))} value={amount} type="text" name="" id="" className="outline-none rounded-l-lg border-y-2 border-l-2 border-dark-pri/40 focus:bg-dark/30 w-full bg-transparent py-2 px-2 text-xs placeholder:text-dark-pri/40" placeholder="Amount" />
                    <button className="bg-dark-sec text-dark-black text-xs px-4 hover:bg-dark-sec/80">Max</button>
                </div>
                <div className="w-full rounded-lg overflow-hidden mt-2">
                    <input onChange={(e) => setAddrs(e.target.value)} value={addrs} type="text" name="" id="" className="outline-none rounded-lg border-2 border-dark-pri/40 focus:bg-dark/30 w-full bg-transparent py-2 px-2 text-xs placeholder:text-dark-pri/40" placeholder="Add buddy address" />
                </div>
                <p className="text-sm my-4">
                    A minimum of 1 LUMIX required for deposits.
                    A 10% tax is charged on deposits *
                </p>
                <div className="flex flex-col xs:flex-row justify-between gap-5">
                    <button onClick={approveHandler} className={`relative transition-all duration-500 ease-in-out bg-dark-sec px-7 py-2 text-dark-black rounded-full font-bold overflow-hidden after:content[''] ${!amount || Number(amount) < 1 || (amount < allownce) ? 'invisible' : 'visible'}`}>Approve</button>
                    <button onClick={depositHandler} className={`relative bg-dark-sec px-7 py-2 text-dark-black rounded-full font-bold overflow-hidden after:content[''] ${!amount || (amount > allownce) ? 'after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-white/30 cursor-not-allowed' : ''}`}>Deposit</button>
                </div>
                <div className="w-full rounded-lg border border-dark-pri/50 mt-6">
                    <ul className="p-5">
                        <li className="pb-5">
                            <h3 className="">LUMIX balance/USDT</h3>
                            <p className="text-sm font-medium text-dark-white">{lumixBalance} LUMIX/3000 USDT</p>
                        </li>
                        <li className="border-t border-dark-pri/40 py-5">
                            <h3 className="">Price</h3>
                            <p className="text-sm font-medium text-dark-white">{bnbLumixPrice} BNB/LUMIX</p>
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