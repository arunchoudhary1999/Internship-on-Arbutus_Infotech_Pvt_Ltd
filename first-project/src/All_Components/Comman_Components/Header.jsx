import React from "react";
import { FaAngleDown } from 'react-icons/fa';


import "./header.css";

export const Header = () => {
  return (
    <div className="navigation_first">
      <nav className="navigation_second">
        <a href="/">
          <img className="navigation_logo" src="/img/logo.png" alt="logo_img" />
        </a>

        <div>
          <ul className="navigation_ul">
            <li>Features</li>
            <li className="dropdown">
              <label className="dropbtn">Services <FaAngleDown /></label>
              <ul className="dropdown-content">
                <li>E-coaching</li>
                <li>Live streaming</li>
                <li>Partners</li>
                <li>Resourses</li>
              </ul>
            </li>
            <li className="dropdown">
              <label className="dropbtn">E-coaching <FaAngleDown /></label>
              <ul className="dropdown-content">
                <li>Services</li>
                <li>Love streaming</li>
                <li>Partners</li>
                <li>Resourses</li>
              </ul>
            </li>
            <li>Love streaming</li>
            <li className="dropdown"> 
              <label className="dropbtn">Partners <FaAngleDown /></label>
              <ul className="dropdown-content">
                <li>Services</li>
                <li>Love streaming</li>
                <li>E-coaching</li>
                <li>Resourses</li>
              </ul>
            </li>
            <li className="dropdown">
              <label className="dropbtn">Resourses <FaAngleDown /></label>
              <ul className="dropdown-content">
                <li>Services</li>
                <li>Love streaming</li>
                <li>Partners</li>
                <li>Features</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="navigation_btn">
          <button className="btn btn_1" onClick={() => {alert("Hello! This is Notice Board")}}>Notice Board</button>
          <button className="btn btn_2" onClick={() => {alert("Well-Come! You are Sucessfully Sign In ")}}>Sign In</button>
        </div>
      </nav>
    </div>
  );
};
