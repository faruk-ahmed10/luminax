import gsap from 'gsap';
import { useRef, useEffect, useState, useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { SidebarContext } from '../../context/context';
import { Custody, userInfo } from '../../web3client';

const GetBuddy = () => {

    const [custody, setCustody] = useState(null);
    const [usrInfo, setUsrInfo] = useState(null);
    const [buddyAddress, setBuddyAddress] = useState(null);
    const { walletAddrs } = useContext(SidebarContext);

    const buddyAddressHandler = () => {
        if(!buddyAddress){
            toast.error('Please, enter Address');
            return;
        }
        Custody(buddyAddress).then(ct => setCustody(ct)).catch(err => toast.error(err));
        toast.success('Sucess');
    };
    useEffect(() => {

        if(localStorage.getItem(!'WEB3_CONNECT_CACHED_PROVIDER')) return;
        userInfo().then(ui => setUsrInfo(ui)).catch(err => toast.error(err));

    },[]);

    console.log("Custody: ", custody);
    return (
        <div className="w-full rounded-lg bg-dark-gray p-8 mt-5 xs:mt-0">
            <ToastContainer theme='dark' />
            <div className="">
                <h1 className="font-medium text-dark-white pb-8">Get a buddy</h1>
                <div className="w-full rounded-lg flex overflow-hidden">
                    <input onChange={(e) => setBuddyAddress(e.target.value)} type="text" name="" id="" className="w-full outline-none rounded-l-lg border-y-2 border-l-2 border-dark-pri/40 bg-transparent py-2 px-2 text-xs placeholder:text-dark-pri/40 focus:bg-dark/30" placeholder="Address" />
                    <button onClick={buddyAddressHandler} className="bg-dark-sec text-dark-black text-xs px-4 hover:bg-dark-sec/80">Submit</button>
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
                            <h3 className="">Current Buddy</h3>
                            <p className="text-sm font-medium text-dark-white">{ usrInfo ? (usrInfo.upline.slice(0, 8) + '...' + usrInfo.upline.slice(usrInfo.upline.length - 6)) : '...' }</p>
                        </li>
                        <li className="pb-5">
                            <h3 className="">Manager</h3>
                            <p className="text-sm font-medium text-dark-white">{custody ? (custody.manager.slice(0, 8) + '...' + custody.manager.slice(custody.manager.length - 6)) : '...'}</p>
                        </li>
                        <li className="border-t border-dark-pri/40 py-5">
                            <h3 className="">Beneficiary</h3>
                            <p className="text-sm font-medium text-dark-white">{custody ? (custody.beneficiary.slice(0, 8) + '...' + custody.beneficiary.slice(custody.beneficiary.length - 6)) : '...'}</p>
                        </li>
                        <li className="border-t border-dark-pri/40 py-5">
                            <h3 className="">Inactivity Threshold</h3>
                            <p className="text-sm font-medium text-dark-white">None</p>
                        </li>
                        {/* <li className="border-t border-dark-pri/40 pt-5">
                            <h3 className="">Manager</h3>
                            <p className="text-sm font-medium text-dark-white">Feb 2, 2022. 10am</p>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default GetBuddy;