import React, { useState } from 'react';

import { FaArrowRight } from "react-icons/fa";

import './homeTeen.css';

export const HomeTeen = () => {

    const [date] = useState(new Date().toLocaleDateString());
    const [time] = useState(new Date().toLocaleTimeString());

    const homeTeenData = [
        {
            more: "Know More",
            icon: <FaArrowRight />,
            image: "/img/homeTeen01.png",
            heading: "The Pandaemic and its Drastic impact on asporing",
            paragraph: "Bootstrap 5 is evolving with each release to better utilize CSS variables for global theme styles, individual components, and even utilities."
        },
        {
            more: "Know More",
            icon: <FaArrowRight />,
            image: "/img/homeTeen02.png",
            heading: "The Pandaemic and its Drastic impact on asporing",
            paragraph: "Bootstrap 5 is evolving with each release to better utilize CSS variables for global theme styles, individual components, and even utilities."
        },
        {
            more: "Know More",
            icon: <FaArrowRight />,
            image: "/img/homeTeen03.png",
            heading: "The Pandaemic and its Drastic impact on asporing",
            paragraph: "Bootstrap 5 is evolving with each release to better utilize CSS variables for global theme styles, individual components, and even utilities."
        },
        {
            more: "Know More",
            icon: <FaArrowRight />,
            image: "/img/homeTeen04.png",
            heading: "The Pandaemic and its Drastic impact on asporing",
            paragraph: "Bootstrap 5 is evolving with each release to better utilize CSS variables for global theme styles, individual components, and even utilities."
        }
    ]

    return (
        <>
        <div className="container">
        <div className="d-flex justify-content-center flex-column align-items-center">
            <h1 className='text-uppercase'>in the <span className='text-danger'>news</span></h1>
            <hr className="border border-secondary border-2 w-25 opacity-50"></hr>
        </div>
        </div>
        <div className="row">
            {
                homeTeenData.map(item => (
                    <div class="card mb-3 container border-white" style={{ maxWidth: "540px" }}>
                        <h1 className='h4 pb-2 mb-4 text-secondary border-bottom border-secondary text-end'>{date} {time} <span className='text-dark'>{item.more}</span> <span className='text-danger'>{item.icon}</span></h1>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={item.image} class="img-fluid rounded-start" alt="img" />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">{item.heading}</h5>
                                    <p class="card-text text-secondary">{item.paragraph}</p>
                                    <p class="card-text"><small class="text-muted">{date} {time}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
        </>
    )
}
