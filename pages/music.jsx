import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import banner from '../assets/img/banner.png';
import banner2 from '../assets/img/banner2.png';
import musictag from '../assets/img/musictag.png';
import musictag2 from '../assets/img/musictag2.png';
import Link from 'next/link';
import Layout from '../layouts/Layout';

import { BsShuffle, BsFillHeartFill, BsThreeDotsVertical } from 'react-icons/bs';
import { ImLoop } from 'react-icons/im';
import { IoPlaySkipForwardSharp, IoPlaySkipBackSharp, IoPlaySharp, IoPause } from 'react-icons/io5';
import { RiPlayList2Fill } from 'react-icons/ri';
import { MdOutlineDevicesOther, MdDone } from 'react-icons/md';
import { GiSpeaker } from 'react-icons/gi';
import { AiOutlineExpandAlt, AiOutlinePlus } from 'react-icons/ai';


const musicData = [
    {
        title: 'Colourblind',
        imgUrl: musictag,
        audioUrl: 'http://localhost:3000/bensound-dubstep.mp3',
        views: 1812421
    },
    {
        title: 'No Parallals',
        imgUrl: musictag2,
        audioUrl: 'http://localhost:3000/bensound-dubstep.mp3',
        views: 1812421
    },
    {
        title: 'Division Symbols',
        imgUrl: musictag,
        audioUrl: 'http://localhost:3000/bensound-dubstep.mp3',
        views: 1812421
    },
    {
        title: 'I am',
        imgUrl: musictag,
        audioUrl: 'http://localhost:3000/bensound-dubstep.mp3',
        views: 1812421
    },
    {
        title: 'Drift',
        imgUrl: musictag,
        audioUrl: 'http://localhost:3000/bensound-dubstep.mp3',
        views: 1812421
    },
];

const artistsData = [
    {
        title: 'Issues',
        imgUrl: musictag2
    },
    {
        title: 'Dreams on Dreamer',
        imgUrl: musictag2
    },
    {
        title: 'Isles & Glaciers',
        imgUrl: musictag2
    },
    {
        title: 'Jamies Elsewhere',
        imgUrl: musictag2
    },
    {
        title: 'Secrets',
        imgUrl: musictag2
    },
];

export default function Music(){

    const [play, setPlay] = useState(false);
    const [volume, setVolume] = useState(50);
    const [currentTime, setCurrentTime] = useState(0);
    const [selected, setSelected] = useState(1);
    const audio = useRef( typeof Audio !== "undefined" ? new Audio("http://localhost:3000/bensound-dubstep.mp3") : undefined );
    const [duration, setDuration] = useState();
    
    console.log("Music Duration: ", duration);

    const changTime = audio.current ? audio.current.currentTime : 0;

    useEffect(() => {

        play ? audio.current.play() : audio.current.pause();
        audio.current ? setDuration(audio.current.duration) : 0;
    },[play, audio]);

    useEffect(() => {

        audio.current.volume = volume/100;

    }, [volume, audio]);

    useEffect(() => setCurrentTime(audio.current.currentTime),[changTime]);

    return (
        <div className="w-full">
            <div className="min-w-full">
                <Image src={banner2} alt={'Cover Page'} />
            </div>
            <div className="px-8 mt-8">
                <div className="flex flex-col md:flex-row gap-5">
                    <div className="w-full">
                        <h1 className="text-2xl font-bold mb-3 text-dark-white">Popular</h1>
                        <ul className="flex flex-col gap-5">
                            {
                                musicData.map((ms, idx) => (
                                    <li key={idx} className="w-full flex items-center text-sm">
                                        <div className="">
                                            <Image src={ms.imgUrl} alt={'Music Tag'} width={50} height={50} />
                                        </div>
                                        <div className="w-full flex">
                                            <div className="flex items-center">
                                                <span className="px-2">{idx}</span>
                                                {selected === idx ? <span className="px-2 text-sky-600 text-2xl"><MdDone/></span> : <span onClick={() => setSelected(idx)} className="px-2 text-xl"><AiOutlinePlus/></span> }
                                            </div>
                                            <div className="flex flex-1">
                                                <h3 className="flex-1 font-semibold text-dark-white">{ms.title}</h3>
                                                <h5 className="">{ms.views}</h5>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                            <li className="text-sm">
                                <Link href="#">
                                    <a href="" className="underline text-dark-white/70">Show More</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h1 className=" text-2xl text-white font-bold mb-3">Related Artists</h1>
                        <ul className='flex flex-wrap gap-5 md:flex-col'>
                            {
                                artistsData.map((at, idx) => (
                                    <li key={idx} className="flex items-center">
                                        <div className="">
                                            <Image src={at.imgUrl} alt={'Music Photo'} width={50} height={50} className="rounded-full" />
                                        </div>
                                        <h2 className="pl-5 font-bold text-dark-white">{at.title}</h2>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                
                <div className="py-5">
                    <h1 className="text-2xl font-bold text-dark-white pb-5">Albums</h1>
                    <div className="flex">
                        <div className="">
                            <Image src={musictag} alt={'Album Photo'} width={100} height={100} />
                        </div>
                        <div className="pl-5 flex flex-col justify-between">
                            <h2 className="">2016</h2>
                            <h1 className="text-3xl text-dark-white font-bold">Dissonants</h1>
                            <div className="flex items-center">
                                <div className="text-green-500">Save</div>
                                <div className="pl-6"><BsThreeDotsVertical /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-5 border-t border-dark-gray">
                    {/* Audio Player */}
                    <div className="w-full flex flex-col items-center justify-between lg:flex-row">
                        <div className="w-full flex justify-between items-center">
                            <div className="">
                                <Image src={banner} alt={'Audio Image'} width={50} height={50} />
                            </div>
                            <div className="flex justify-between items-center flex-1">
                                <div className="pl-5">
                                    <h2 className="text-dark-white">Casio</h2>
                                    <h4 className="text-sm">Jungle</h4>
                                </div>
                                <div className="px-5"><BsFillHeartFill /></div>
                            </div>
                        </div>
                        {/* Playing Progress */}
                        <div className="w-full">
                            <div className="flex items-center">
                                <span className="pr-5 text-sm">{`${ (currentTime /60).toFixed(0) }: ${((currentTime / 60) - (currentTime / 60).toFixed(0)).toFixed(2).replace(/^(0.)/,'')}`}</span>
                                <div className="w-full lg:w-36 h-1 bg-dark-pri/50 rounded-full overflow-hidden">
                                    <div className="w-3/5 h-full bg-dark-pri"></div>
                                </div>
                                <span className="pl-5 text-sm">{duration ? `${(duration / 60).toFixed(0)}:${((duration / 60) - (duration / 60).toFixed(0)).toFixed(2).replace(/^(0.)/,'')}` : 0}</span>
                            </div>
                        </div>
                        {/* Player Handler */}
                        <div className="w-full py-2 flex items-center justify-between">
                            
                            <div className="px-2">
                                <BsShuffle />
                            </div>
                            <div className="px-2">
                                <IoPlaySkipBackSharp />
                            </div>
                            <div onClick={() => setPlay(prev => !prev)} className="w-8 h-8 px-2 transition-all duration-300 ease-out cursor-pointer rounded-full bg-dark-white flex justify-center items-center text-dark">
                                {
                                    play ? 
                                    <IoPause />:
                                    <IoPlaySharp />
                                }
                            </div>
                            <div className="px-2">
                                <IoPlaySkipForwardSharp />
                            </div>
                            <div className="px-2">
                                <ImLoop />
                            </div>
                        </div>
                        {/* Right */}
                        <div className="w-full flex justify-between items-center">
                            <div className="px-2">
                                <RiPlayList2Fill />
                            </div>
                            <div className="px-3">
                                <MdOutlineDevicesOther />
                            </div>
                            <div className="flex items-center px-3">
                                <GiSpeaker />
                                <div className="flex items-center">
                                    <input type="range" value={volume} onChange={(e) => setVolume(e.target.value)} className="w-20 h-0.5 focus:outline-none focus:shadow-none slider-thumb" />
                                </div>
                            </div>
                            <div className="font-bold text-2xl">
                                <AiOutlineExpandAlt />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Music.getLayout = (page) => (
    <Layout>
        {page}
    </Layout>);