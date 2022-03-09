import * as React from 'react';
import Image from 'next/image';
import profile from '../assets/profile.png';
import gsap from 'gsap';

// importing profile pic

import ronaldo from '../assets/profile/ronaldo.png';
import wizkid from '../assets/profile/wizkid.png';
import anthony from '../assets/profile/anthony.png';
import bunro from '../assets/profile/bunro.png';
import israel from '../assets/profile/israel.png';

// Defining profile data
const profileData = [
    {
        name: 'Cristiano Ronaldo',
        profile: ronaldo,
        val: 8.45
    },
    {
        name: 'Wizkid',
        profile: wizkid,
        val: 8.45
    },
    {
        name: 'Anthony Joshua',
        profile: anthony,
        val: 8.45
    },
    {
        name: 'Burna Boy',
        profile: bunro,
        val: 12.45,
    },
    {
        name: 'Israel Adesanya',
        profile: israel,
        val: 8.45
    }
];

// *Component

const HeroCard = () => {

    const itemsRef = React.useRef([]);
    React.useEffect(()=> {
        const tl = gsap.timeline({duration: 1, delay: 3});
        itemsRef.current.map((v, idx) => tl.from(v, {y: 5, opacity: 0}));

    });
    return (
        <div className="w-72 md:w-60 backdrop-filter backdrop-blur-md border border-blue" style={{background: '#3A61F055'}}>
            <ul className="px-5 py-4 text-white">
                {
                    profileData.map((prf, idx) => (
                        <li ref={ref => itemsRef.current[idx] = ref} key={idx} className="w-full flex justify-between items-center mb-4 text-sm">
                            <div className="flex items-center font-light">
                                <div className="w-6 h-6 mr-2 clip-path-hexagon overflow-hidden bg-lightpeach flex justify-center items-center">
                                    <Image className="min-w-full h-full" src={prf.profile} alt="Profile" />
                                </div>
                                <h3 className="">{prf.name}</h3>
                            </div>
                            <div className="">
                                <p className="">${prf.val}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default HeroCard;