import Spot from "../components/Card/Spot";
import AboutLumix from "../components/Faucet/About";
import Deposit from "../components/Faucet/Deposit";
import GetBuddy from "../components/Faucet/GetBuddy";
import PlayerLookup from "../components/Faucet/PlayerLookup";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";



const Faucet = () => {
    

    return (
        <div className="w-full">
                <Header title={'Faucet'} />
                <Spot />
                <div className="my-8 w-full grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    <Deposit />
                    <GetBuddy />
                    <PlayerLookup />
                </div>
                <AboutLumix />
        </div>
    )
}

export default Faucet;