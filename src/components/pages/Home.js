import React from 'react';
import Navbar from '../navbar/Navbar';
import LeftSide from "../left-side-bar/LeftSide";

const Home = () => {
    return <div className="w-full">
        <div className="fixed top-0 <-10 w-full bg-white">
            <Navbar/>
        </div>
        <div className="flex bg-gray-100">
            <div className="flex-auto w-[20%] fixed top-12">
                <LeftSide/>
            </div>
        </div>
    </div>;
};

export default Home;