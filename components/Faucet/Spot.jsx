import { useState, useRef, useEffect, useContext } from "react";
import gsap from 'gsap';
import { claimsAvailable, PayoutOf, totalWithdraw, userInfo, userInfoTotals, web3 } from "../../web3client";
import { SidebarContext } from "../../context/context";
import { toast } from "react-toastify";





const Spot = () => {

    const [autoRecharge, setAutoRecharge] = useState(true);
    const [alToken, setAlToken] = useState(0);
    const [mPayout, setMPayout] = useState(0);
    const [usrInfo, setusrInfo] = useState(null);
    const [usrTtlInfo, setUsrTtlInfo] = useState(null);
    const [ totWithdraw, setTotWithdraw ] = useState(0);

    const { walletAddrs } = useContext(SidebarContext);

    

    const spotItems = [
        {
            title: 'Available',
            token_amount: Number(alToken).toFixed(6),
            balance: 10098.36
        },
        {
            title: 'Deposit',
            token_amount: usrTtlInfo ? Number(web3.utils.fromWei(usrTtlInfo.total_deposits)).toFixed(6) : 0,
            balance: 10098.36
        },
        {
            title: 'Drained',
            token_amount: usrTtlInfo ? Number(web3.utils.fromWei(totWithdraw)).toFixed(6) : 0,
            balance: 10098.36
        },
        {
            title: 'Max Payout',
            token_amount: mPayout ? Number(web3.utils.fromWei(mPayout)).toFixed(6) : 0,
            balance: 10098.36
        },
        {
            title: 'Rewarded',
            token_amount: usrInfo ? usrInfo.match_bonus : 0,
            balance: 10098.36
        },
    ];


    useEffect(() => {
        if(localStorage.getItem(!'WEB3_CONNECT_CACHED_PROVIDER')) return;
        claimsAvailable().then(av=> setAlToken(av)).catch(err => console.log("Calims Error",err));
        PayoutOf().then(mp => setMPayout(mp.max_payout)).catch(err => console.log(err));
        userInfo().then(ui => setusrInfo(ui)).catch(err => console.log("User info",err));
        totalWithdraw().then(withdraw => setTotWithdraw(withdraw)).catch(err => console.log("Total Withdraw: ", err))
    },[walletAddrs])
    useEffect(() => {

        if(!walletAddrs) return;
        userInfoTotals(walletAddrs).then(ui => setUsrTtlInfo(ui)).catch(err => console.log("User info",err));
        console.log('Triggered!');
    },[walletAddrs]);
    console.log("From Spot Faucet");
    console.log("User Info: ", usrInfo);
    console.log("User TL Info: ", usrTtlInfo);
    console.log("Max Payout: ", mPayout);

    return (
        <div  className="w-full bg-dark-gray p-8 rounded-lg z-0">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-dark-white">Spot</h1>
                <div className="flex items-center">
                    <div className="hidden lg:block lg:mr-3">
                        <button className="text-sm px-6 py-2 rounded-full bg-dark-white hover:bg-dark-sec mx-3 font-bold text-dark-black transition-colors duration-300 ease-out">Deposit</button>
                        <button className="text-sm px-6 py-2 rounded-full bg-dark-white hover:bg-dark-sec mx-3 font-bold text-dark-black transition-colors duration-300 ease-out">Recharge</button>
                        <button className="text-sm px-6 py-2 rounded-full bg-dark-white hover:bg-dark-sec mx-3 font-bold text-dark-black transition-colors duration-300 ease-out">Drain</button>
                    </div>
                    <div className="flex">
                        <span className="text-xs text-dark-pri">Auto recharge</span>
                        <div onClick={() => setAutoRecharge(!autoRecharge)} className={`relative w-8 h-4 rounded-full ml-2 cursor-pointer transition-all duration-500 ease-in-out ${autoRecharge ? 'bg-green-400' : 'bg-dark-pri'}`}>
                            <div className={`absolute top-0 w-4 h-4 rounded-full shadow bg-dark-white transition[left] duration-500 ease-in-out ${autoRecharge ? 'left-4' : 'left-0'}`}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:hidden pt-8 flex flex-col sm:flex-row">
                <button className="w-full  text-sm px-4 sm:px-6 py-2 rounded-full bg-dark-white hover:bg-dark-sec mx-1 font-bold text-dark-black transition-colors duration-300 ease-out">Deposit</button>
                <button className="w-full  text-sm px-4 sm:px-6 py-2 mt-5 sm:mt-0 rounded-full bg-dark-white hover:bg-dark-sec mx-1 font-bold text-dark-black transition-colors duration-300 ease-out">Recharge</button>
                <button className="w-full  text-sm px-4 sm:px-6 py-2 mt-5 sm:mt-0 rounded-full bg-dark-white hover:bg-dark-sec mx-1 font-bold text-dark-black transition-colors duration-300 ease-out">Drain</button>
            </div>
            <div className="pt-8 grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 transition-all duration-500 ease-in-out">
                {
                    spotItems.map((itm, idx) => (
                        <div className="" key={`spot_item${idx}`}>
                            <h3 className="text-xs font-semibold text-dark-white/90 pb-2">{itm.title}</h3>
                            <div className="flex items-center">
                                <span className="font-semibold text-dark-white">{itm.token_amount}</span>
                                <span className="uppercase p-2 mx-2 bg-dark-pri/40 bg-opacity-50 text-white rounded-md font-bold text-xs">LUMIX</span>
                            </div>
                            <h5 className="text-tiny font-medium">${itm.balance}</h5>
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}

export default Spot;