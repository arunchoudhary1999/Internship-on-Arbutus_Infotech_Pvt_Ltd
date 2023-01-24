import React from 'react';

import { FaArrowRight, FaMapMarkerAlt, FaRegCalendarAlt } from 'react-icons/fa';
import { GiCricketBat } from "react-icons/gi";

import './homeFive.css';

export const HomeFive = () => {

    const homeFiveData = [
        {
            image: "/video/bg-video.mp4",
            heading: "Simple Headline",
            paragraph: "A written source of information, designed specifically."
        },
        {
            image: "/video/bg-video.mp4",
            heading: "Simple Headline",
            paragraph: "A written source of information, designed specifically."
        },
        {
            image: "/video/bg-video.mp4",
            heading: "Simple Headline",
            paragraph: "A written source of information, designed specifically."
        }
    ]

    return (
        <div className='homeFive'>
            <div className='homeFive-one'>
                <h1 className='homeFive-h1'>Live<span> Streaming</span></h1>
                <hr />
            </div>

            <div className='homeFive-two'>
                <div className='homeFive-two01'>
                    <p>Watch that local tournament from the comfort of yout home with professional e-sorecards, 360-degree video caputre and live social streams. Choose your match!</p>
                </div>
                <div className="homeFive-icon">
                    <div className="icon_2"><FaArrowRight className="btn" /></div>
                </div>
            </div>

            <div className='homeFive-three'>
                {
                    homeFiveData.map((item) => (
                        <div className='homeFive-four'>
                            <div>
                                <video className="video01" controls>
                                    <source src={item.image} type="video/mp4" />
                                </video>
                            </div>

                            <div className='homeFive-five'>
                                <h1>{item.heading}</h1>
                                <p>{item.paragraph}</p>
                                <div className='homeFive-five01'>
                                    <p><FaMapMarkerAlt className='homeFive-five-icon' />location</p>
                                    <p><FaRegCalendarAlt className='homeFive-five-icon' />calender</p>
                                    <p><GiCricketBat className='homeFive-five-icon' />Ground</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
