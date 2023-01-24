import React from 'react';

import { FaArrowRight } from 'react-icons/fa';

import './homeFour.css';

export const HomeFour = () => {
    return (
        <div className='homeFour'>
            <div className='homeFour-one'>
                <h1 className='h1'><span>Criconet </span>Community</h1>
                <hr />
            </div>

            <div className='homeFour-two'>
                <div className='homeFour-left'>
                    <p>Learn the right techinoquies and skills through one-of-akind expensive that takes you form amateur to professional in no time. Choose your coach, pick your time and start improving today!</p>
                    <div className="home-btn">
                        <button className="btn">Join Now <FaArrowRight className="btn-icon" /></button>
                    </div>
                </div>

                <div className='homeFour-right'>
                    <img src="/img/home-img04.png" alt="" />
                </div>
            </div>
        </div>
    )
}
