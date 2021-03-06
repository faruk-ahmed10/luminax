import Buy from "../components/Reservoir/Buy";
import Header from "../components/Header";
import Stats from "../components/Reservoir/Stats";
import Spot from "../components/Reservoir/Spot";
import Sell from "../components/Reservoir/Sell";
import Layout from "../layouts/Layout";


export default function Reservoir(){
    return (
        <div className="w-full px-8">
            <Header title={'Reservoir'} />
            <Spot />
            <div className="w-full lg:flex flex-row gap-5 mt-8">
                <Buy />
                <Sell />
            </div>
            <Stats />
        </div>
    )
}

Reservoir.getLayout = (page) => (
    <Layout>
        {page}
    </Layout>);