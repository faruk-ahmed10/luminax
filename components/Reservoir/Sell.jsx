import { useState } from "react";
import useAsyncEffect from 'use-async-effect';
import { useGlobalContext, APPROVAL_AMOUNT } from '../../context/globalProvider';
import { toast } from "react-toastify";


const Sell = () => {
    const { reservoirContract, selectedAccount, lumixBalance, updateBalance, updateReservoirStats, getAllownce, toWei, fromWei } = useGlobalContext();
    const [amount, setAmount] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [estimatedReceivedAmount, setEstimatedReceivedAmount] = useState('');


    useAsyncEffect(async (activate) => {
        if ((isNaN(amount) || !Number(amount))) {
            setEstimatedReceivedAmount('');
            return;
        }

        const receiveAmount = await reservoirContract.calculateTaxedLiquidityToBnb(toWei(amount)).call();
        if (!activate) return;
        console.log('receiveAmount', receiveAmount);
        setEstimatedReceivedAmount(Number(fromWei(receiveAmount)).toFixed(4));
    }, [amount]);

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    }

    const handleSell = async () => {
        if ((isNaN(amount) || !Number(amount)) || amount <= 0) {
            toast.warn('Please enter a valid amount');
            setAmount('');
            return;
        }

        try {
            setDisabled(true);
            const allowance = await getAllownce(process.env.NEXT_PUBLIC_RESERVOIR_ADDRESS, selectedAccount);
            if (Number(allowance) < Number(amount)) {
                await approve(process.env.NEXT_PUBLIC_RESERVOIR_ADDRESS, APPROVAL_AMOUNT, selectedAccount);
                toast.dismiss();
                toast.success('Approved successfully');
            }


            await reservoirContract.sell(toWei(amount)).send({ from: selectedAccount }).on('transactionHash', (hash) => {
                return toast.loading(<div>
                    <p>View Tx:</p>
                    <a href={`${process.env.NEXT_PUBLIC_EXPLORER_URL}/tx/${hash}`} target="_blank" className='underline' rel="noreferrer">{hash.substring(0, 28)}...</a>
                </div>);
            });

            toast.dismiss();
            toast.success('Successfully Sell');
            setAmount('');
            await updateBalance(selectedAccount);
            await updateReservoirStats();
        } catch (error) {
            toast.error(error?.message);
        }
        setDisabled(false);
    }

    return (
        <div className="w-full rounded-lg bg-dark-gray p-8 mt-8 lg:mt-0">
            <h1 className="font-semibold text-dark-white">Withdraw</h1>
            <div className="pt-4">
                <div htmlFor="slimpage" className="text-sm py-2 xs:flex justify-between">
                    <div className="">Amount</div>
                    <div className=""><span className="text-dark-white  ">LUMIX Balance:</span> {lumixBalance}</div>
                </div>
                <div className="w-full rounded-lg flex text-sm items-center overflow-hidden">
                    <input onChange={handleAmountChange} value={amount} type="text" className="w-full bg-dark-gray focus:bg-dark/10 rounded-l-lg border-l-2 font-medium text-dark-white border-y-2 border-dark-pri/40 flex-1 px-3 py-2 outline-none" />
                    <button className="px-2 py-2 bg-dark-sec hover:bg-dark-sec/80 text-dark border-2 border-dark-sec/30" onClick={() => setAmount(lumixBalance)}>Max</button>
                </div>
            </div>
            <div className="xs:flex justify-between text-sm mt-3">
                <div className="">Estimate Recieved</div>
                <div className="">{estimatedReceivedAmount ? estimatedReceivedAmount + ' BNB' : ''}</div>
            </div>
            <div className="xs:flex justify-between items-center">
                <button  onClick={handleSell} disabled={disabled} className="disabled:bg-gray-600 w-36 my-5 xs:my-0 xs:mt-3 bg-dark-sec hover:bg-transparent border-2 border-transparent hover:border-dark-pri px-7 py-2 text-dark-black hover:text-dark-sec focus:text-dark-white rounded-full font-bold">Withdraw</button>
            </div>
        </div>
    )
}

export default Sell;