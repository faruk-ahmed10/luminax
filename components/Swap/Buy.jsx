import { useState } from "react";
import useAsyncEffect from "use-async-effect";
import { toast } from 'react-toastify';
import { useGlobalContext, DEFAULT_SLIPPAGE } from "../../context/globalProvider";

const Buy = () => {
    const { selectedAccount, bnbBalance, getEstimatedReceiveLumix, buyLumix, updateBalance } = useGlobalContext();
    const [sellBnbAmount, setSellBnbAmount] = useState();
    const [estimatedReceivedAmount, setEstimatedReceivedAmount] = useState();
    const [slippageAmount, setSlippageAmount] = useState(DEFAULT_SLIPPAGE);
    const [disableBuyButton, setDisableBuyButton] = useState(false);

    useAsyncEffect(async (activate) => {
        if ((isNaN(sellBnbAmount) || !Number(sellBnbAmount)) || (isNaN(slippageAmount) || !Number(slippageAmount))) {
            setEstimatedReceivedAmount('');
            return;
        }

        const receiveAmount = await getEstimatedReceiveLumix(sellBnbAmount, slippageAmount);
        if (!activate) return;

        setEstimatedReceivedAmount(receiveAmount.toFixed(2));
    }, [sellBnbAmount, slippageAmount]);


    const handleSlippageChange = (e) => {
        setSlippageAmount(e.target.value);
    }

    const handleSellAmountChange = e => {
        setSellBnbAmount(e.target.value);
    }

    const handleSetMaxAmount = async () => {
        setSellBnbAmount(bnbBalance);
        await updateBalance(selectedAccount);
    }

    const handleBuy = async () => {
        if (!estimatedReceivedAmount) {
            return;
        }
        setDisableBuyButton(true);

        try {
            await buyLumix(estimatedReceivedAmount, sellBnbAmount);
            toast.dismiss();
            toast.success('Transaction Success');
            setSellBnbAmount('');
            setEstimatedReceivedAmount('');
            await updateBalance(selectedAccount);
        } catch (error) {
            toast.dismiss();
            toast.error(error?.message);
        }
        setDisableBuyButton(false);
    }

    return (
        <div className="w-full rounded-lg bg-dark-gray p-8">
            <h1 className="font-semibold text-dark-white">Buy LUMIX</h1>
            <div className="">
                <div htmlFor="slimpage" className="text-sm py-2">Slippage</div>
                <div className="w-full rounded-lg flex text-sm items-center overflow-hidden">
                    <input type="number" className="w-full focus:bg-dark/10 bg-dark-gray rounded-l-lg border-l-2 font-medium text-dark-white border-y-2 border-dark-pri/40 flex-1 px-3 py-2 outline-none appearance-none" value={slippageAmount} onChange={handleSlippageChange} />
                    <div className="percentage px-3 py-2 border-l border-y-2 border-dark-pri/40">%</div>
                    <button className="outline-none px-2 py-2 bg-dark-sec hover:bg-dark-sec/80 border-2 border-dark-sec hover:border-dark-sec/30 text-dark" onClick={() => setSlippageAmount(DEFAULT_SLIPPAGE)}>Auto slippage</button>
                </div>
            </div>
            <div className="pt-4">
                <div htmlFor="slimpage" className="text-sm py-2 xs:flex justify-between">
                    <div className="">Amount</div>
                    <div className=""><span className="text-dark-white">BNB Balance:</span> {bnbBalance}</div>
                </div>
                <div className="w-full rounded-lg flex text-sm items-center overflow-hidden">
                    <input value={sellBnbAmount} onChange={handleSellAmountChange} type="text" className="w-full bg-dark-gray focus:bg-dark/10 rounded-l-lg border-l-2 font-medium text-dark-white border-y-2 border-dark-pri/40 flex-1 px-3 py-2 outline-none" />
                    <button className="outline-none px-2 py-2 bg-dark-sec hover:bg-dark-sec/80 text-dark border-2 border-dark-sec hover:border-dark-sec/30" onClick={handleSetMaxAmount}>Max</button>
                </div>
            </div>
            <div className="xs:flex justify-between text-sm py-4">
                <div className="">Estimate Slippage</div>
                <div className="">Slippage Tolerance: {slippageAmount}%</div>
            </div>
            <div className="xs:flex justify-between text-sm mb-4">
                <div className="">Minimum Recieved</div>
                <div className="">{estimatedReceivedAmount ? estimatedReceivedAmount + 'LMT' : ''}</div>
            </div>
            <button disabled={disableBuyButton} onClick={handleBuy} className="w-36 outline-none mt-2 xs:mt-0 bg-dark-sec hover:bg-dark border-2 border-transparent hover:border-dark-pri py-3 text-dark-black hover:text-dark-white font-bold rounded-full transition-all duration-200 ease-out disabled:bg-gray-500">Buy LUMIX</button>
        </div>
    )
}

export default Buy;