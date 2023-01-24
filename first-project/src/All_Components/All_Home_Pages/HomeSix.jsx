import React from 'react';

import { FaArrowRight } from 'react-icons/fa';

import './homeSix.css';

export const HomeSix = () => {
    return (
        <div className="container container01">
            <div className="row row01">
                <div className="col-8">
                    <h1 className='homeSix-h1'>Welcome To your<span> Academy</span></h1>
                </div>
                <div className="col-4 homeFive-col-2">
                    <img src="/img/home-img06.png" alt="" />
                </div>
            </div>
            <div className='row row02'>
                <div className="col">
                    <img className='col-img01' src="/img/home-img0601.png" alt="" />
                </div>
                <div className="col col-para">
                    <p>Cricket is meant to be learnt on the field. So, wr're placing you on it. Exprience a hybrid model that connects the players, coaches and academies acrocss the online and physical platforms. We're talking end-to-end tracking of growth, sessions, attendence, payments and training.</p>
                    <div className="homeSix-btn">
                        <button className="btn">Now More <FaArrowRight className="btn-icon" /></button>
                    </div>
                </div>
                <div className="col col-3-img">
                    <img className='col-img02' src="/img/home-img0602.png" alt="" />
                </div>
            </div>
        </div>
    )
}
