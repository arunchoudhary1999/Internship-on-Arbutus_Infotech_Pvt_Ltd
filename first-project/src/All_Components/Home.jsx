import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomeZero } from './All_Home_Pages/HomeZero';
import { HomeOne } from './All_Home_Pages/HomeOne';
import { HomeTwo } from './All_Home_Pages/HomeTwo';
import { HomeThree } from './All_Home_Pages/HomeThree';
import { HomeFour } from './All_Home_Pages/HomeFour';
import { HomeFive } from './All_Home_Pages/HomeFive';
import { HomeSix } from './All_Home_Pages/HomeSix';
import { HomeSeven } from './All_Home_Pages/HomeSeven';
import { HomeEight } from './All_Home_Pages/HomeEight';
import { HomeNine } from './All_Home_Pages/HomeNine';
import { HomeTeen } from './All_Home_Pages/HomeTeen';

export const Home = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeZero />} />
                <Route path="homeone" element={<HomeOne />} />
                <Route path="hometwo" element={<HomeTwo />} />
                <Route path="homethree" element={<HomeThree />} />
                <Route path="homefour" element={<HomeFour />} />
                <Route path="homefive" element={<HomeFive />} />
                <Route path="homesix" element={<HomeSix />} />
                <Route path="homeseven" element={<HomeSeven />} />
                <Route path="homeeight" element={<HomeEight />} />
                <Route path="homenine" element={<HomeNine />} />
                <Route path="hometeen" element={<HomeTeen />} />
            </Routes>
        </BrowserRouter>
    )
}
