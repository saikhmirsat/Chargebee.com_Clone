import React from 'react'
import './Footer.css'
import FooterLast from './FooterLast'
import RobinLambert from './RobinLambert'

export default function Footer() {
    return (
        <div className='footerPart'>
            {/* <RobinLambert /> */}
            <div className='white'></div>
            <div className='midle-card-box'>
                <div>
                    <h1 className='mid-card-box-head'>Get a Demo Customized to Your Subscription Workflow</h1>

                    <div className='mail-box-btn'>
                        <input type="text" placeholder='email@company.com' />
                        <button>Get a Demo</button>
                    </div>
                </div>

                <RobinLambert />
            </div>
            <FooterLast />
        </div>
    )
}
