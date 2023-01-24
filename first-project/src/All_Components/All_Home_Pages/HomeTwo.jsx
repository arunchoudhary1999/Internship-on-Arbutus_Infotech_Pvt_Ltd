import React from 'react'

import { FaUserFriends, FaCloudSun, FaUserAlt, FaRocketchat } from 'react-icons/fa';

import './homeTwo.css';

export const HomeTwo = () => {

    const homeTwoData = [
        {
            image: <FaUserFriends />,
            heading: "1-on-1 Coaching",
            paragraph: "Liive and interacive sessions to learn that perfect form across." 
        },
        {
            image: <FaCloudSun />,
            heading: "Ready for every weather",
            paragraph: "Liive and interacive sessions to learn that perfect form across." 
        },
        {
            image: <FaUserAlt />,
            heading: "Professional scorecard and scouting",
            paragraph: "Liive and interacive sessions to learn that perfect form across." 
        },
        {
            image: <FaRocketchat />,
            heading: "Smart video analysis",
            paragraph: "Liive and interacive sessions to learn that perfect form across." 
        }
    ]

  return (
    <div className='homeTwo-first'>
        <div className='homeTwo-heading'>
              <h1><span>For The </span>Players</h1>  
              <hr />
        </div>

        <div className='homeTwo-container'>
            <div className='homeTwo-img'>
                <img className='img' src="./img/home-img02.png" alt="home-img02" />
            </div>

            <div className='homeTwo-data'>
                {
                    homeTwoData.map((item) => (
                        <div className='homeTwo-inside-data'>
                            <div className='homeTwo-inside-head-img'>
                                <h1 className='homeTwo-h1-img'>{item.image}</h1>
                                <h1 className='homeTwo-h1-heading'>{item.heading}</h1>
                            </div>
                            <div>
                                <p className='homeTwo-indeside-padd'>{item.paragraph}</p>
                            </div>
                            <hr className='homeTwo-hr' />
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
