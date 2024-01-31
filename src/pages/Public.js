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
            <div className="general-section2 content-padding">
                <SPLMinning />
                <RevenueStructure />
            </div>
            <OurServices />
            <HowToPlay />
            <Roadmap />
            <Contact />
            <Footer />
        </>
    );
};

export default Public;
