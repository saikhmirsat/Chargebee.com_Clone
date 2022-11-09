import React from 'react'
import './Footer.css'
import FooterLast from './FooterLast'
import RobinLambert from './RobinLambert'

export default function Footer() {
    return (
        <div>Footer
            {/* <RobinLambert /> */}
            <div className='white'></div>
            <div className='midle-card-box'>
                <div>
                    <h1 style={
                        {
                            fontSize: "44px",
                            fontWeight: '600',
                            lineHeight: '1.5',
                            width: "80%",
                            margin: 'auto',
                            marginTop: '50px',
                            color: 'white'
                        }
                    }>
                        Get a Demo Customized to Your Subscription Workflow</h1>

                    <div className='mail-box-btn'>
                        <input type="text" placeholder='email@company.com' />
                        <button>Get a Demo</button>
                    </div>
                </div>

                <RobinLambert />

                <FooterLast />

            </div>
        </div>
    )
}
