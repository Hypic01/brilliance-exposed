
import React from 'react';
import PortraitCarousel from '../components/PortraitCarousel';

const Home = ({ introComplete }) => {
    // Only pass introComplete to carousel if it needs to trigger its internal animations
    // content is NO LONGER hidden by opacity here.
    return (
        <div className="home-page">
            <main>
                 {/* 
                    Carousel is always mounted. 
                    It can start its internal cycling immediately or wait for introComplete 
                    depending on preference. Passing the prop just in case logic is needed.
                */}
                <PortraitCarousel isActive={true} />
            </main>
        </div>
    );
};

export default Home;
