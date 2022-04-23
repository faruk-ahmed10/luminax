import { useState } from 'react';
import { toast } from 'react-toastify';
import { useGlobalContext } from '../../context/globalProvider';


const PlayerLookup = () => {
    
    const [usrInfoTotals, setUsrInfoTotals] = useState();
    const [address, setAddress] = useState();
    const { selectedAccount, userInfoTotals, bnbLumixPrice } = useGlobalContext();

    const handlePlayerLookup = async () => {
        if(!selectedAccount) return;
        if(!address){
            toast.error('Address Required!');
            return;
        }
        userInfoTotals(address).then(info => setUsrInfoTotals(info)).catch(err => console.log(err));
    };

    console.log("UsrInfo: ",usrInfoTotals);

    return (
        <div  className="w-full  rounded-lg bg-dark-gray p-8 mt-5 xs:mt-0">
            <div className="">
                <h1 className="font-medium text-dark-white pb-8">Player Lookup</h1>
                <div className="w-full rounded-lg flex overflow-hidden">
                    <input onChange={(e) => setAddress(e.target.value)} type="text" name="" id="" className="w-full outline-none rounded-l-lg border-y-2 border-l-2 border-dark-pri/40 bg-transparent py-2 px-2 text-xs placeholder:text-dark-pri/40 focus:bg-dark/30" placeholder="Address" />
                    <button onClick={handlePlayerLookup} className="bg-dark-sec text-dark-black text-xs px-4 hover:bg-dark-sec/80">Submit</button>
                </div>
                <p className="text-sm my-4">
                    A buddy is how you get on LuminaX. Good things should not happen in isolation.
                </p>
                <p className="text-sm py-3">
                    We have made it easy for you to find a buddy.
                </p>
                <div className="w-full rounded-lg border border-dark-pri/50 mt-5">
                    <ul className="p-5">
                        <li className="pb-5">
                            <h3 className="">Directs</h3>
                            <p className="text-sm font-medium text-dark-white">{usrInfoTotals ? usrInfoTotals.referrals : 0}</p>
                        </li>
                        <li className="border-t border-dark-pri/40 pt-5">
                            <h3 className="">Team</h3>
                            <p className="text-sm font-medium text-dark-white">{usrInfoTotals ? usrInfoTotals.total_structure : 0}</p>
                        </li>
                        <li className="border-t border-dark-pri/40 py-5">
                            <h3 className="">Net Deposits</h3>
                            <p className="text-sm font-medium text-dark-white">{usrInfoTotals ? (usrInfoTotals.total_deposits - usrInfoTotals.airdrops_total) : 0} LUMIX</p>
                        </li>
                        <li className="border-t border-dark-pri/40 py-5">
                            <h3 className="">Net Deposits</h3>
                            <p className="text-sm font-medium text-dark-white">{bnbLumixPrice} BNB/LUMIX</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PlayerLookup;