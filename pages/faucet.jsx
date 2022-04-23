import Spot from "../components/Faucet/Spot";
import AboutLumix from "../components/Faucet/About";
import Deposit from "../components/Faucet/Deposit";
import GetBuddy from "../components/Faucet/GetBuddy";
import PlayerLookup from "../components/Faucet/PlayerLookup";
import Header from "../components/Header";
import Layout from '../layouts/Layout';
import { ToastContainer } from "react-toastify";
// import Head from 'next/head'
// import Image from 'next/image'
// import gsap from 'gsap';
// import { useEffect, useRef, useState, useContext } from "react";
// import { SidebarContext } from "../context/context";
// import { claimsAvailable } from "../web3client";


export default function Faucet() {
    // const [userInfo, setUserInfo] = useState();
    // const { walletAddrs } = useContext(SidebarContext);
    // const [avail, setAvail] = useState();

    // useEffect(() => {

    //     claimsAvailable().then(bl=> setAvail(bl)).catch((err) => console.log(err));

    // },[]);

    return (
        <div className="w-full px-8">
            <Header title={'Faucet'} />
            <ToastContainer theme="dark" />
            <Spot />
            <div className="my-8 xs:grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                <Deposit />
                <GetBuddy />
                <PlayerLookup />
            </div>
            <AboutLumix />
        </div>
    )
}

Faucet.getLayout = (page) => (
    <Layout>
        {page}
    </Layout>);
