import React from 'react'
import './Robin.css'


export default function RobinLambert() {
    return (
        <div className='robinCard'>
            <div className='box'>
                <img className='quot' src="https://i.ibb.co/gVPKmJ9/quot.png" alt="quot" />
                <div>
                    <img src="https://webstatic.chargebee.com/assets/web/535/images/footer/robin-lambert.png" alt="Robin-img" />
                </div>
                <p className='p'>
                    Using Chargebee is also one less area we have to worry about as we scale. We know that it'll adapt to most if not all situations that'll come up in the future.
                </p>
                <h1 className='name' style={{ fontSize: "16px", fontWeight: 'bold' }}>Robin Lambert,</h1>
                <span className='p'>Co-founder & CPO,</span><span style={{ color: "blue", fontSize: '14px' }}> Livestorm</span>
            </div>
            <div className='okta'>
                <img src="https://webstatic.chargebee.com/assets/web/535/images/footer/calendly.svg" alt="" />
                <img src="https://webstatic.chargebee.com/assets/web/535/images/footer/okta.svg" alt="" />
                <img src="https://webstatic.chargebee.com/assets/web/535/images/footer/freshworks.svg" alt="" />
                <img src="https://webstatic.chargebee.com/assets/web/535/images/footer/getaccept.svg" alt="" />
            </div>
        </div>
    )
}
