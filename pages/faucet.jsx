import Spot from "../components/Faucet/Spot";
import AboutLumix from "../components/Faucet/About";
import Deposit from "../components/Faucet/Deposit";
import GetBuddy from "../components/Faucet/GetBuddy";
import PlayerLookup from "../components/Faucet/PlayerLookup";
import Header from "../components/Header";
import Head from 'next/head'
import Image from 'next/image'
import gsap from 'gsap';
import { useEffect, useRef } from "react";
import Layout from '../layouts/Layout';

export default function Faucet() {
    

    return (
        <div className="w-full px-8">
                <Header title={'Faucet'} />
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
