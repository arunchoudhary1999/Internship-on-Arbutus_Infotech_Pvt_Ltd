import React from "react";

import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

import "./homeZero.css";

export const HomeZero = () => {
    return (
        <div>
            <div>
                <div className="home-first">
                    <div className="home-text">
                        <h1><span>Watch. Learn. Play.</span></h1>
                        <h1>All on one Platform</h1>
                        <p>
                            We're brinnging all the players, scouts, coaches, and fans
                            togehter t build a community that breathes and lives cricket.
                            Whether finding your next e-coach or watching that local match,
                            we've got you covered.
                        </p>
                        <div className="home-btn">
                            <button className="btn" onClick={() => {alert("READ This :- We're brinnging all the players, scouts, coaches, and fans togehter t build a community that breathes and lives cricket. Whether finding your next e-coach or watching that local match, we've got you covered.")}}>Now More <FaArrowRight className="btn-icon" /></button>
                        </div>
                    </div>

                    <div className="home-video">
                        <video className="video" controls>
                            <source src="/video/bg-video.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="home-icon">
                        <div className="icon_1" onClick={() => {alert("Previous..")}}><FaArrowLeft className="btn" /></div>
                        <div className="icon_2" onClick={() => {alert("Next..")}}><FaArrowRight className="btn" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
