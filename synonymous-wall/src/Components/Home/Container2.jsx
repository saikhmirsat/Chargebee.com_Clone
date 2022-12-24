import React from 'react'
import './Container2.css'


export default function Container2() {
    return (
        <div className='con2-main-box'>
            <div className='con2-inner-box'>
                <div className='con2-first-box'>
                    <div className='head-para'>
                        <h1>Designed to go Beyond Billing.</h1>
                        <p>Get the freedom to experiment, launch, and scale strategies as fast as you can think of them.</p>
                    </div>
                    <div className='animate-div-box'>
                        <img src="https://i.ibb.co/NYzLp4z/Final-Animation.gif" alt="Final-Animation" />
                    </div>
                </div>
                <div className='con2-second-box'>
                    <div>
                        <img src="https://webstatic.chargebee.com/assets/web/535/images/home/coc/icon/rethink-pricing.svg" alt="" />
                        <h1>Rethink Pricing</h1>
                        <p>Pricing models. Grandfathering. One-click roll-back. Doesn't get easier!</p>
                        <span>Learn more ➚</span>
                    </div>
                    <div>
                        <img src="https://webstatic.chargebee.com/assets/web/535/images/home/coc/icon/scale-globally.svg" alt="" />
                        <h1>Scale Globally</h1>
                        <p>Currencies, compliance & taxes, all handled already.</p>
                        <span>Learn more ➚</span>
                    </div>
                    <div>
                        <img src="https://webstatic.chargebee.com/assets/web/535/images/home/coc/icon/capture-new-segments.svg" alt="" />
                        <h1>Capture New Segments</h1>
                        <p>March upmarket, go product-led, and everywhere between.</p>
                        <span>Learn more ➚</span>
                    </div>
                    <div>
                        <img src="https://webstatic.chargebee.com/assets/web/535/images/home/coc/icon/launch-into-subscriptions.svg" alt="" />
                        <h1>Launch into Subscriptions</h1>
                        <p>Pilot a recurring revenue model without breaking what's working.</p>
                        <span>Learn more ➚</span>
                    </div>
                </div>
            </div>
            <div className='con2-last-header'>
                <h1 >Streamline Revenue Operations</h1>
                <p>Chargebee automates the lead-to-ledger workflow across your revenue stack, so you can dream, deploy, and enjoy the breeze.
                    While the MRR just keeps rolling.</p>
            </div>
            <div className='nav2'>
                <p>Subscription Automation</p>
                <p>Billing Experiments</p>
                <p>Revenue Intelligence</p>
                <p>Extensible Platform</p>
                <p>Enterprise-Grade Security</p>
            </div>
        </div>
    )
}
