import RoadCard from "./RoadCard";

const roadmapData = [
    {
        title: 'Q4, 2021',
        list: [
            'Strategic Plan',
            'Whitepaper Completion', 
            'Community Launch on Telegram, Twitter, and Instagram', 
            'Platform Design and Technical Demonstration',
            'Signing of first ICON',
        ]
    },
    {
        title: 'Q1, 2022',
        list: [
            'Marketing',
            'Building the Two Smart Contracts',
            'Smart Contract Audit',
            'IDO',
            'First IFT Launch',
            'Listing on Coinmarketcap, Coingeko'
        ]
    },
    {
        title: 'Q2, 2022',
        list: [
            'More IFT launch',
            'Partnership',
            'Community Launch on Telegram, Twitter, and Instagram',
            'Platform Design and Technical Demonstration',
            'Signing of first ICON'
        ]
    },
    {
        title: 'Q3, 2022',
        list: [
            'More IFT launch',
            'LUMINA Exchange',
            'LUMIX Mobile App', 
        ]
    },
];

const Roadmap = () => {

    return (
        <div id="roadmap" className="container mx-auto mt-14 md:mt-24 px-3 md:px-80 pb-16 md:pb-36">
            <h1 className="text-center text-white text-40px md:text-56px font-bold pb-28 mb-20 md:mb-10">Roadmap</h1>
            <div className="w-full mt-10 md:mt-24">
                <div className="w-0 md:w-1/2 ml-2 md:ml-0  h-full border-r-2 border-gray-600">
                    {
                        roadmapData.map((v, idx) => <RoadCard key={idx} index={idx} data={v} />)
                    }
                </div>
            </div>
        </div>
    )
};
export default Roadmap;