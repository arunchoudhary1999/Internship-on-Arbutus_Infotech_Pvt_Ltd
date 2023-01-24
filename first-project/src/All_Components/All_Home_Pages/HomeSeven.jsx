import React from 'react';

import { FaArrowRight } from 'react-icons/fa';

import './homeSeven.css';

export const HomeSeven = () => {
    return (
        <div>
            <div class="container text-center">
                <div class="row">
                    <div className='col-6 homeSeven01'>
                        <div class="col-2">
                            <img src="/img/homeSeven-img0701.png" alt="" />
                            <h5>Players</h5>
                        </div>
                        <div class="col-2">
                            <img src="/img/homeSeven-img0702.png" alt="" />
                            <h5>Coaches</h5>
                        </div>
                        <div class="col-2">
                            <img src="/img/homeSeven-img0703.png" alt="" />
                            <h5>Academics</h5>
                        </div>
                    </div>
                    <div class="col-6">

                        <div className="col-8 homeSeven-col8">
                            <h1 className='homeSeven-h1'>Call it a<span> Direct Hit!</span></h1>
                        </div>

                        <div className="col col-para">
                            <p>Cricket is meant to be learnt on the field. So, wr're placing you on it. Exprience a hybrid model that connects the players, coaches and academies acrocss the online and physical platforms. We're talking end-to-end tracking of growth, sessions, attendence, payments and training.</p>
                            <div className="homeSix-btn">
                                <button className="btn">Now More <FaArrowRight className="btn-icon" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
