import React from 'react'
import './home2.css'
import imgChart from '../home../../../img/Screenshot (796).png'

function Home2() {
    return (
        <div className='home2'>
            <div className="home2Left">
                <div className="homeLeft">
                    <div className="homeTitle">
                        <h4 data-aos="fade-left">Own your future <br /> with Upstox</h4>
                        <p className='homeP' data-aos="zoom-out">Investing and trading made simple, affordable <br /> and accessible for you.</p>
                    </div>
                    <div className="homeBtn" data-aos="fade-right">Get Started</div>
                </div>
            </div>
           
            <div className="home2Right">
            <img className='chartImg' src={imgChart} data-aos="fade-up" alt="" />
            </div>

        </div>
    )
}

export default Home2