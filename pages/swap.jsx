import Header from "../components/Header";
import Buy from '../components/Swap/Buy';
import Balance from "../components/Swap/Balance";
import Stats from '../components/Swap/Stats';
import Sell from "../components/Swap/Sell";
import { useState } from "react";





const Swap = () => {

    const [autoRecharge, setAutoRecharge] = useState(true);

    return (
        <div className="w-full">
            <Header title={'Swap'} />
            <div className="w-full flex flex-col md:flex-row gap-5">
                <Buy />
                <Sell />
            </div>
            <Balance />
            <Stats />
        </div>
    )
}

export default Swap;