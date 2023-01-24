import React from 'react';

import './homeThree.css';

export const HomeThree = () => {

    const homeThreeData = [
        {
            image: "/img/coach01.webp",
            heading: "Simple Headline",
            paragraph: "A written source of information, designed specifically"
        },
        {
            image: "/img/coach02.webp",
            heading: "Simple Headline",
            paragraph: "A written source of information, designed specifically"
        },
        {
            image: "/img/coach03.jpg",
            heading: "Simple Headline",
            paragraph: "A written source of information, designed specifically"
        },
        {
            image: "/img/coach04.jpg",
            heading: "Simple Headline",
            paragraph: "A written source of information, designed specifically"
        }
    ]

    return (
        <div className='homeThree-first'>
            <div className='homeThree-heading'>
                <h1 className='h1'>E-Coaching</h1>
                <hr />
            </div>
            <div className='homeThree-heading01'>
                <div className='homeThree-p'>
                    <p>A written source of information, designed specifically for the use of students, on a particular subject or field of study that is usually developed based on a syllabus and geared </p>
                </div>

                <div>
                    <div className='homeThree-data'>
                        {
                            homeThreeData.map((item) => (
                                <div className='homeThree-data01'>
                                    <div className='homeThree-head-img'>
                                        <img className='homeThree-h1-img' src={item.image} alt="" />
                                        <div className='homeThree-h1' >
                                        <h2 className='homeThree-h1-heading'>{item.heading}</h2>
                                        <p className='homeThree-indeside-padd'>{item.paragraph}</p>
                                    </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
