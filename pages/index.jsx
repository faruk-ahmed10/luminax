import Banner from "../components/Home/Banner";
import Faq from "../components/Home/Faq";
import Feature from "../components/Home/Feature";
import Footer from "../components/Home/Footer";
import GetStarted from "../components/Home/GetStarted";
import Header from "../components/Home/Header";
import Hero from "../components/Home/Hero";
import Mission from "../components/Home/Mission";
import SocialBanner from "../components/Home/Social";
import Stream from "../components/Home/Stream";



const Home = () => {
    return (
        <div className="bg-[#12141D] font-home">
            <Header />
            <Hero />
            <Mission />
            <Stream />
            <Feature />
            <Banner />
            <GetStarted />
            <Faq />
            <SocialBanner />
            <Footer />
        </div>
    )
}

export default Home;