import React from 'react';

import './homeNine.css';

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export const HomeNine = () => {

    const imageData = [
        {
            image: "/img/homeNine-image.png"
        },
        {
            image: "/img/homeNine-image.png"
        },
        {
            image: "/img/homeNine-image.png"
        },
        {
            image: "/img/homeNine-image.png"
        },
        {
            image: "/img/homeNine-image.png"
        }
    ]

    return (
        <div className='homeNine-one'>
            <div className='homeNine-two'>
                <h1><span>Featured </span>In</h1>
                <hr />
                <img src="/img/home-img06.png" alt="" />
            </div>

            <div className='homeNine-three'>
                <p>Bootstrap 5 is evolving with each release to better utilize CSS variables for global theme styles, individual components, and even utilities. We provide dozens of variables for colors, font styles, </p>
                <div className='homeNine-four'>
                <FaArrowLeft className='homeNine-fight' />
                <FaArrowRight className='homeNine-nine' />
            </div>
            </div>

            <div className='homeNine-five'>
                {
                    imageData.map(item => (
                        <div className='homeNine-six'>
                            <img className='homeNine-seven' src={item.image} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
