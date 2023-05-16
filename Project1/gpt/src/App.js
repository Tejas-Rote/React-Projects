import React from 'react'
import './App.css'


import Footer from './containers/footer/Footer.jsx';
import Header from './containers/header/Header.jsx';
import Blog from './containers/blog/Blog.jsx';
import Features from './containers/features/Features.jsx';
import Possibility from './containers/possibility/Possibility.jsx';
import WhatGPT3 from './containers/whatGPT3/WhatGPT3.jsx';


import { Article, Brand, Cta, Navbar, } from './components';
const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />

        </div>

    )
}

export default App