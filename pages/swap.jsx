import Header from "../components/Header";
import Buy from '../components/Swap/Buy';
import Balance from "../components/Swap/Balance";
import Stats from '../components/Swap/Stats';
import Sell from "../components/Swap/Sell";
import { useState } from "react";
import Layout from "../layouts/Layout";


const Swap = () => {

    const [autoRecharge, setAutoRecharge] = useState(true);

    return (
        <div className="w-full px-8">
            <Header title={'Swap'} />
            <div className="w-full lg:flex gap-5">
                <Buy />
                <Sell />
            </div>
            <Balance />
            <Stats />
        </div>
    )
}

Swap.getLayout = (page) => (
    <Layout>
        {page}
    </Layout>);
    
export default Swap;