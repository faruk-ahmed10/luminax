import { useState, useRef, useEffect } from "react";
import useAsyncEffect from 'use-async-effect';
import gsap from 'gsap';
import { useGlobalContext } from '../../context/globalProvider';
import { toast } from "react-toastify";


const Spot = () => {
    const { reservoirContract, selectedAccount, fromWei, reservoirStats, reservoirTotalDeposit, updateReservoirStats } = useGlobalContext();
    const spotRef = useRef();

    useEffect(() => {
        gsap.from(spotRef.current, { y: 50, duration: 2, zIndex: 0 });
    }, []);

    useAsyncEffect(async () => {
        if(reservoirContract) {
            updateReservoirStats();
        }
    }, [reservoirContract]);



    const recharge = async () => {
        if (!reservoirContract) return;
        try {
            await reservoirContract.reinvest().send({ from: selectedAccount }).on('transactionHash', (hash) => {
                return toast.loading('Recharging...');
            });
            toast.dismiss();
            toast.success('Recharge Successful');
            await updateReservoirStats();
        } catch (error) {
            toast.error(error?.message);
        }
    }

    const drain = async () => {
        if (!reservoirContract) return;

        try {
            await reservoirContract.sweep().send({ from: selectedAccount }).on('transactionHash', (hash) => {
                toast.loading('Drain in Progress...')
            });
            toast.dismiss();
            toast.success('Drain Successful');
            await updateReservoirStats();
        } catch (error) {
            toast.error(error?.message);
        }
    }

    return (
        <div ref={spotRef} className="w-full bg-dark-gray p-8 rounded-lg z-0">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-dark-white">Spot</h1>
                <div className="flex items-center">
                    <div className="hidden lg:block lg:mr-3">
                        <button onClick={recharge} className="text-sm px-6 py-2 rounded-full bg-dark-white hover:bg-dark-sec mx-3 font-bold text-dark-black transition-colors duration-300 ease-out">Recharge</button>
                        <button onClick={drain} className="text-sm px-6 py-2 rounded-full bg-dark-white hover:bg-dark-sec mx-3 font-bold text-dark-black transition-colors duration-300 ease-out">Drain</button>
                    </div>
                </div>
            </div>
            <div className="lg:hidden pt-8 flex flex-col sm:flex-row">
                <button className="w-full  text-sm px-4 sm:px-6 py-2 mt-5 sm:mt-0 rounded-full bg-dark-white hover:bg-dark-sec mx-1 font-bold text-dark-black transition-colors duration-300 ease-out">Recharge</button>
                <button className="w-full  text-sm px-4 sm:px-6 py-2 mt-5 sm:mt-0 rounded-full bg-dark-white hover:bg-dark-sec mx-1 font-bold text-dark-black transition-colors duration-300 ease-out">Drain</button>
            </div>
            <div className="pt-8 grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 transition-all duration-500 ease-in-out">
                <div>
                    <h3 className="text-xs font-semibold text-dark-white/90 pb-2">Available</h3>
                    <div className="flex items-center">
                        <span className="font-semibold text-dark-white">{fromWei(reservoirStats?.[2] ?? '')}</span>
                        <span className="uppercase p-2 mx-2 bg-dark-pri/40 bg-opacity-50 text-white rounded-md font-bold text-xs">BNB</span>
                    </div>
                </div>
                <div>
                    <h3 className="text-xs font-semibold text-dark-white/90 pb-2">Deposit</h3>
                    <div className="flex items-center">
                        <span className="font-semibold text-dark-white">{fromWei(reservoirStats?.[2] ?? '')}</span>
                        <span className="uppercase p-2 mx-2 bg-dark-pri/40 bg-opacity-50 text-white rounded-md font-bold text-xs">LAMA</span>
                    </div>
                </div>
                <div>
                    <h3 className="text-xs font-semibold text-dark-white/90 pb-2">Drained</h3>
                    <div className="flex items-center">
                        <span className="font-semibold text-dark-white">{fromWei(reservoirStats?.[1] ?? '')}</span>
                        <span className="uppercase p-2 mx-2 bg-dark-pri/40 bg-opacity-50 text-white rounded-md font-bold text-xs">BNB</span>
                    </div>
                </div>
                <div>
                    <h3 className="text-xs font-semibold text-dark-white/90 pb-2">Stake</h3>
                    <div className="flex items-center">
                        <span className="font-semibold text-dark-white">{fromWei(String(reservoirTotalDeposit))}%</span>
                        {/* <span className="uppercase p-2 mx-2 bg-dark-pri/40 bg-opacity-50 text-white rounded-md font-bold text-xs">%</span> */}
                    </div>
                </div>
                <div>
                    <h3 className="text-xs font-semibold text-dark-white/90 pb-2">Compounds</h3>
                    <div className="flex items-center">
                        <span className="font-semibold text-dark-white">{Number(fromWei(reservoirStats?.[13] ?? '')).toFixed(2)}</span>
                        <span className="uppercase p-2 mx-2 bg-dark-pri/40 bg-opacity-50 text-white rounded-md font-bold text-xs">LUMIX</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Spot;