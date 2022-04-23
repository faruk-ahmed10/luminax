import { useState } from "react";
import useAsyncEffect from "use-async-effect";
import { toast } from 'react-toastify';
import { useGlobalContext, DEFAULT_SLIPPAGE } from "../../context/globalProvider";

const Sell = () => {
    const {selectedAccount, lumixBalance, sellLumix, getEstimatedReceiveBNB, updateBalance, } = useGlobalContext();
    const [autoRecharge, setAutoRecharge] = useState();
    const [sellLumixAmount, setSellLumixAmount] = useState();
    const [estimatedReceivedAmount, setEstimatedReceivedAmount] = useState();
    const [slippageAmount, setSlippageAmount] = useState(DEFAULT_SLIPPAGE);
    const [disableBuyButton, setDisableBuyButton] = useState(false);


    useAsyncEffect(async (activate) => {
        if ((isNaN(sellLumixAmount) || !Number(sellLumixAmount)) || (isNaN(slippageAmount) || !Number(slippageAmount))) {
            setEstimatedReceivedAmount('');
            return;
        }

        const receiveAmount = await getEstimatedReceiveBNB(sellLumixAmount, slippageAmount);
        if (!activate) return;

        setEstimatedReceivedAmount(receiveAmount.toFixed(4));
    }, [sellLumixAmount, slippageAmount]);


    const handleSlippageChange = (e) => {
        setSlippageAmount(e.target.value);
    }

    const handleSellAmountChange = e => {
        setSellLumixAmount(e.target.value);
    }

    const handleSetMaxAmount = async() => {
        await updateBalance(selectedAccount);
        setSellLumixAmount(Number(lumixBalance).toFixed(2));
    }

    const handleSell = async () => {
        if (!estimatedReceivedAmount) {
            return;
        }

        setDisableBuyButton(true);

        try {
            await sellLumix(sellLumixAmount, estimatedReceivedAmount);
            toast.dismiss();
            toast.success('Transaction Success');
            setSellLumixAmount('');
            setEstimatedReceivedAmount('');
            await updateBalance(selectedAccount);
        } catch (error) {
            toast.dismiss(); 
            toast.error(error?.message);
        }
        setDisableBuyButton(false);
    }

    return (
        <div className="w-full rounded-lg bg-dark-gray p-8 mt-8 lg:mt-0">
            <h1 className="font-semibold text-dark-white">Sell LUMIX</h1>
            <div className="">
                <div htmlFor="slimpage" className="text-sm py-2">Slippage</div>
                <div className="w-full rounded-lg flex text-sm items-center overflow-hidden">
                    <input type="text" value={slippageAmount} onChange={handleSlippageChange} className="w-full bg-dark-gray  rounded-l-lg border-l-2 font-medium text-dark-white border-y-2 border-dark-pri/40 flex-1 px-3 py-2 outline-none" />
                    <div className="percentage px-3 py-2 border-l border-y-2 border-dark-pri/40">%</div>
                    <button className="px-2 py-2 bg-dark-sec hover:bg-dark-sec/80 border-2 border-dark-sec hover:border-dark-sec/30 text-dark" onClick={() => setSlippageAmount(DEFAULT_SLIPPAGE)}>Auto slippage</button>
                </div>
            </div>
            <div className="pt-4">
                <div htmlFor="slimpage" className="text-sm py-2 xs:flex justify-between">
                    <div className="">Amount</div>
                    <div className=""><span className="text-dark-white">LUMIX Balance:</span> {lumixBalance}</div>
                </div>
                <div className="w-full rounded-lg flex text-sm items-center overflow-hidden">
                    <input type="text" value={sellLumixAmount} onChange={handleSellAmountChange} className="w-full bg-dark-gray rounded-l-lg border-l-2 font-medium text-dark-white border-y-2 border-dark-pri/40 flex-1 px-3 py-2 outline-none" />
                    <button className="px-2 py-2 bg-dark-sec hover:bg-dark-sec/80 text-dark border-2 border-dark-sec hover:border-dark-sec/30" onClick={handleSetMaxAmount}>Max</button>
                </div>
            </div>
            <div className="xs:flex justify-between text-sm py-4">
                <div className="">Estimate Slippage</div>
                <div className="">Slippage Tolerance: {slippageAmount}%</div>
            </div>
            <div className="xs:flex justify-between text-sm mb-3">
                <div className="">Minimum Recieved</div>
                <div className="">{estimatedReceivedAmount ? estimatedReceivedAmount + 'BNB' : ''}</div>
            </div>
            <div className="xs:flex justify-between items-center">
                <button disabled={disableBuyButton} onClick={handleSell} className="w-36 outline-none bg-dark-sec hover:bg-dark border-2 my-2 xs:my-0 border-transparent hover:border-dark-pri py-3 text-dark-black hover:text-dark-white font-bold rounded-full transition-all duration-200 ease-out disabled:bg-gray-500">Sell LUMIX</button>
                <div className="mx-1 mt-5 xs:mt-0 flex">
                    <span className="text-xs text-dark-pri">Auto recharge</span>
                    <div onClick={() => setAutoRecharge(!autoRecharge)} className={`relative w-8 h-4 rounded-full ml-2 cursor-pointer transition-all duration-500 ease-in-out ${autoRecharge ? 'bg-green-400' : 'bg-dark-pri'}`}>
                        <div className={`absolute top-0 w-4 h-4 rounded-full shadow bg-dark-white transition[left] duration-500 ease-in-out ${autoRecharge ? 'left-4' : 'left-0'}`}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sell;