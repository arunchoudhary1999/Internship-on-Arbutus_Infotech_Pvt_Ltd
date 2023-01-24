import React from 'react';

import { RxDoubleArrowDown } from "react-icons/rx";
import { FaUserAlt } from "react-icons/fa";

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import './homeEight.css';

export const HomeEight = () => {
  return (
    <div className='eightOne'>
        <div className='eightTwo'>
            <div className='eightTwo-one'>
                <h1>From The <span>Locker Room</span></h1>
                <hr />
                <p>Bootstrap 5 is evolving with each release to better utilize CSS variables for global theme styles, individual components, and even utilities.</p>
                <RxDoubleArrowDown className='eightTwo-img' />
            </div>

            <div className='eightTwo-two'>
            <p>Bootstrap 5 is evolving with each release to better utilize CSS variables for global theme styles, individual components, and even utilities. Bootstrap 5 is evolving with each release to better utilize CSS variables for global theme styles, individual components, and even utilities.</p>
                <div className='eightTwo-two-one'>
                    <div className='eightTwo-two-one-01'>
                        <FaUserAlt className='eightTwo-two-one-02'/>
                        <div className='eightTwo-two-one-03' >
                            <h3>Ahmed Elsayad</h3>
                            <p>Players</p>
                        </div>
                    </div>

                    <div className='eightTwo-two-one-04'>
                        <FaArrowLeft />
                        <FaArrowRight />
                    </div>

                </div>
            </div>
        </div>

        <div className='eightThree'>
            <img className='eightThree-img' src="/img/homeEight-image.png" alt="" />
        </div>
    </div>
  )
}
