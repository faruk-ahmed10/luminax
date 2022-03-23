import BottomSec from "./BottomSec";
import HowItCard from "./Card";


const cardData = [
    {
        title: 'ICONS',
        btnTitle: 'apply for ido',
        listData: [
            {
                title: 'Icon Screening',
                description: 'ICONS are screened and selected through our patented rigorous and thorough selection process'
            },
            {
                title: 'IFT Creation',
                description: `LUMINA's talented team create and certify the tokens meet the highest global standards for security and utility.`
            },
            {
                title: 'Token Listed',
                description: 'IFT is listed and made available for trading for everyone. '
            },
        
        ]
    },
    {
        title: 'FANS',
        btnTitle: 'nominate an icon',
        listData: [
            {
                title: 'Join Telegram',
                description: 'Be part of the community in order to participate, be in the know and support your favorite ICONs'
            },
            {
                title: 'Stake and Refer',
                description: 'Staking the LUMIX token gives you the opportunity to be whitelisted and get on the projects super early.'
            },
            {
                title: 'Trade Them',
                description: 'Buy and trade the tokens. The more tokens you stake, the more your voting power.'
            },
        
        ]
    },
];
const HowItWorks = () => {

    return (
        <div id="howitworks" className="pt-12 md:pt-24 px-3 md:px-40 pb-12 md:pb-36 bg-secondary container mx-auto">
            <h1 className="text-center text-white text-40px md:text-56px font-bold mb-10">How It Works</h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    cardData.map((v, idx) => <HowItCard key={idx} index={idx} data={v} />)
                }
            </div>
            <div className="">
                <BottomSec />
            </div>
        </div>
    )
};

export default HowItWorks;