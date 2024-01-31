import React from 'react';
import {
    Header,
    Banner,
    SuperLott,
    Roadmap,
    MobileApp,
    WhyBlockChain,
    SPLMinning,
    RevenueStructure,
    OurServices,
    Contact,
    Footer,
    FairPlatform,
    HowToPlay,
} from '../components';
const Public = () => {
    return (
        <>
            <Header />
            <div className="general-section">
                <Banner />
                <SuperLott />
                <FairPlatform />
            </div>
            <WhyBlockChain />
            <MobileApp />
                <SPLMinning />
                <RevenueStructure />
            <OurServices />
            <HowToPlay />
            <Roadmap />
            <Contact />
            <Footer />
        </>
    );
};

export default Public;
