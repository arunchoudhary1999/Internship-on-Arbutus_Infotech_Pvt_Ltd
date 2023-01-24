import React from 'react'

import { FaArrowRight, FaLocationArrow } from 'react-icons/fa';
import { BsFacebook, BsTwitter, BsInstagram, BsSkype, BsMessenger, BsTelephoneFill } from 'react-icons/bs';

export const Footer = () => {
  return (
    <footer className='bg-dark py-5'>
      <div className="container px-5 text-white clearfix">
        {/* row 01 */}
        <div className="row mb-4 float-end">
          <div className="col-12 py-2 pt-3 bg-danger d-flex align-items-center rounded-pill">
            <h1 className='text-white text-uppercase fs-3 px-4 float-start'>Susbcribe for Criconet Update</h1>
            <FaArrowRight className='text-white mx-2 float-end' />
          </div>
        </div>

        {/* row 02 */}
        <div className="row float-start">
          {/* item 01 */}
          <div className="col-md-3">
            <h1 className=''>Criconet</h1>
            <hr className="border border-danger border-2 opacity-50 w-75 float-end"></hr>
            <p className='float-start'>Lorem ipsum dolar sit amet, consectetur adipiscing elit. Suspen disse non est dignissim risus autor accumson.</p>
            <ul className='float-start list-unstyled d-flex'>
              <li className='py-1 px-3 fs-4'><BsFacebook /></li>
              <li className='py-1 px-3 fs-4'><BsTwitter /></li>
              <li className='py-1 px-3 fs-4'><BsInstagram /></li>
              <li className='py-1 px-3 fs-4'><BsSkype /></li>
            </ul>
          </div>

          {/* item 02 */}
          <div className="col-md-3">
            <h1 className=''>About Us</h1>
            <hr className="border border-danger border-2 opacity-50 w-75 float-end"></hr>
            <ul className='float-start list-unstyled'>
              <li className='py-1'>Home</li>
              <li className='py-1'>E-coaching</li>
              <li className='py-1'>Live Streaming</li>
              <li className='py-1'>Parners</li>
              <li className='py-1'>Resources</li>
              <li className='py-1'>FAQ's</li>
            </ul>
          </div>

          {/* item 03 */}
          <div className="col-md-3">
            <h1 className=''>UseFul Links</h1>
            <hr className="border border-danger border-2 opacity-50 w-75 float-end"></hr>
            <ul className='float-start list-unstyled'>
              <li className='py-1'>User agreement</li>
              <li className='py-1'>Terms</li>
              <li className='py-1'>Privacy Policy</li>
            </ul>
          </div>

          {/* item 04 */}
          <div className="col-md-3">
            <h1 className=''>Reach Us</h1>
            <hr className="border border-danger border-2 opacity-50 w-75 float-end"></hr>
            <ul className='float-start list-unstyled'>
              <li className='py-1'><BsMessenger className='mx-3 fs-4'/>Emaill: info@Criconet.com</li>
              <li className='py-1'><BsTelephoneFill className='mx-3 fs-4'/>Telephone +911234567</li>
              <li className='py-1'><FaLocationArrow className='mx-3 fs-4'/>Location: 106, Udyog Vihar Industrial Area Phase VI, Sector 37, Gurugram, Haaryan 122001</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
      <hr className="border border-danger border-2 opacity-50"></hr>
          <div className="row text-white">
          <div className="col-8">
            <h5>Download the APP: </h5>
            <img style={{width:"160px", height: "65px", margin: "0 10px" , borderRadius: "50px"}} src="/img/Google-play-Store.webp" alt="" />
            <img style={{width:"160px", height: "65px" , borderRadius: "150px"}} src="/img/apple.jfif" alt="" />
          </div>

          <div className="col-4">
            <p>Copyright @ 2022 Criconet. All rights reserved</p>
          </div>
          </div>
        </div>
    </footer>
  )
}
