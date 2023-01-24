import React from 'react';

import { FaWifi } from 'react-icons/fa';
import { FaRegCircle } from 'react-icons/fa';
import { FaTv } from 'react-icons/fa';
import { FaSmile } from 'react-icons/fa';
import { FaBullhorn } from 'react-icons/fa';
import { FaPlayCircle } from 'react-icons/fa';


import './homeOne.css'

export const HomeOne = () => {

  const homeOneData = [
    {
      image: <FaWifi />,
      heading: "Live Coaching",
      paragraph: "Personalized insights from best/world-class/exprienced coaches."
    },
    {
      image: <FaRegCircle />,
      heading: "Easy to Search",
      paragraph: "Personalized insights from best/world-class/exprienced coaches."
    },
    {
      image: <FaTv />,
      heading: "Live Streaming",
      paragraph: "Personalized insights from best/world-class/exprienced coaches."
    },
    {
      image: <FaSmile/>,
      heading: "User-Friendly Interface",
      paragraph: "Personalized insights from best/world-class/exprienced coaches."
    },
    {
      image: <FaBullhorn />,
      heading: "Top-Reated Coaches",
      paragraph: "Personalized insights from best/world-class/exprienced coaches."
    },
    {
      image: <FaPlayCircle />,
      heading: "Multiple Payment",
      paragraph: "Personalized insights from best/world-class/exprienced coaches."
    }
  ]

  return (
    <div className='homeOne-first '>
      <h1><span>Why </span>Criconet ?</h1>
      <div className='homeOne-second'>
        <div className='homeOne-table'>
          {
            homeOneData.map((item) => (
                <div className='inside-map'>
                  <div className='box'>
                  <td className='box1'>{item.image}</td>
                  </div>
                  <div className='box'>
                  <td className='box2'>{item.heading}</td>
                  </div>
                  <div className='box'>
                  <td className='box3'>{item.paragraph}</td>
                  </div>
                </div>
            ))
          }
        </div>

        <div>
          <img src="./img/home-img01.png" alt="" />
        </div>
      </div>
    </div>
  )
}


