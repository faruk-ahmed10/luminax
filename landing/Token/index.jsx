import * as React from 'react';
import Image from 'next/image';
import line from '../../assets/line.svg';
import TokenCard from './TokenCard';
import gsap from 'gsap';

//* Data for tile
const tileData = [
    {
        title: 'Public Sale Token Prize',
        sub: 'TBA',
        bg: 'bg-pink1'
    },
    {
        title: 'Maximum Token Supply',
        sub: 'TBA $LUMIN',
        bg: 'bg-skyblue',
    },
    {
        title: 'Market capitalization at listing',
        sub: 'TBA',
        bg: 'bg-red'
    },
    {
        title: 'Total circulating supply at listing',
        sub: 'TBA $LUMIN',
        bg: 'bg-lightcyan'
    },
];

const tokenomicsData = [
    {title: 'Private Sale', percent: 20},
    {title: 'Ecosystem', percent: 8},
    {title: 'Reserve', percent: 5},
    {title: 'Public Sale', percent: 14},
    {title: 'Liquidity', percent: 15},
    {title: 'Team', percent: 15},
    {title: 'Airdrop Sale', percent: 1},
    {title: 'Staking/Reward', percent: 15},
    {title: 'Advisors', percent: 7},
];

// ! Component start

const Token = () => {
    
    const tokenRef = React.useRef();

    //* Animating tile*********
    React.useEffect(()=> {
        gsap.from(tokenRef.current , {duration: 1, y: 15, opacity: 0, scrollTrigger: {trigger: tokenRef.current}});
    })
    return (
        <div className="bg-secondary">
            <div className="container mx-auto pt-24 pb-24">
                <h1 className="text-white text-center font-bold text-3xl md:text-56px leading-tight pb-18">
                    IDO, Token, Price, and<br/>
                    Vesting Schedules
                </h1>
                <div className="px-3 md:px-44 text-white flex flex-wrap">
                    
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
                        {
                            tileData.map((v, idx) => (
                                <TokenCard key={idx} data={v} index={idx} />
                            ))
                        }
                    </div>
                    <div ref={tokenRef} className="p-11 mt-10 w-full bg-purple1">
                        <h1 className="text-3xl md:text-40px font-bold pb-5">
                            Tokenomics
                        </h1>
                        <div className="md:flex flex-col md:flex-row justify-between">
                            <ul className="w-full md:w-3/4 grid grid-cols-2 md:grid-cols-3 gap-5">
                                {
                                    tokenomicsData.map((v, idx) => (
                                        <li key={idx} className="flex justify-between">
                                            <p className="font-medium">{v.title}</p>
                                            <span className="font-semibold">{v.percent}%</span>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className="relative w-full md:w-1/4 min-h-full md:flex justify-end items-end mt-10 md:mt-0">
                                <Image className="" src={line} alt="Line" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Token;