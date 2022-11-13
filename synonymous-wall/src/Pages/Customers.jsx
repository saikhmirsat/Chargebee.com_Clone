import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import './Customers.css'
import { customerPageData } from './CustomersData'
import Footer from '../Footer/Footer'


export default function Customers() {
    return (
        <div>
            <Navbar />
            <div className='customer-con-1'>
                <div>
                    <h1>Chargebee powers
                        subscriptions for
                        businesses of all sizes.
                    </h1>
                    <Link to="/login"><button>Sign up for free</button></Link><span className='talktous'>Talk to us!</span>
                </div>
                <img src="https://i.ibb.co/XZDgKYb/Screenshot-2022-11-13-at-1-16-44-AM.png" alt="Screenshot-2022-11-13-at-1-16-44-AM" />
                <Link to="/customerDetailPage"><button id='ReadtheSory'></button></Link>
            </div>
            <div className='customer-con-2'>
                <img src="https://webstatic.chargebee.com/assets/web/536/images/home/testimonial/cb-study.png" alt="" />
                <p>
                    ... Integration was easy and the <span>customer support provided was excellent.</span> This is huge considering how deficient many players in the space are when ...
                </p>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginTop: '40px' }}>
                    <img src="https://webstatic.chargebee.com/assets/web/536/images/case-study/voitek.jpeg" alt="" />
                    <p>
                        Voitek Sobieszczanski, Director of Finance & Operations</p>
                </div>

            </div>
            <div className='brand-logo-con'>
                <img style={{ width: '130px', height: '30px' }} src="https://webstatic.chargebee.com/assets/web/536/images/customers/logos/freshworks-light-bg.png" alt="" />
                <img style={{ width: '130px' }} src="https://www.chargebee.com/static/resources/customers/calendly.png" alt="" />
                <img style={{ width: '170px' }} src="https://webstatic.chargebee.com/assets/web/536/images/customers/logos/linuxacademy-logo.png" alt="" />
                <img style={{ width: '80px' }} src="https://webstatic.chargebee.com/assets/web/536/images/customers/logos/fujitsu.png" alt="" />
            </div>
            <div className='customer-con-3'>
                <div className='customer-con-3-child-1'>
                    <img src="https://i.ibb.co/R0X3xXM/Mirsat-background.png" alt="Mirsat-background" />
                    <Link>
                        <h2>From 500 to 80,000 Customers:
                            How Freshdesk Unlocked Massive Scale
                        </h2>
                        <p>READ THE STORY →</p>
                    </Link>
                </div>
                <div className='customer-con-3-child-2'>
                    <img style={{ width: '130px', marginTop: '50px' }} src="https://www.chargebee.com/static/resources/customers/freedom-logo.png" alt="" />
                    <p>We didn't have another choice, we never had to choose between Chargebee and another provider. Chargebee was the clear winner.</p>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginTop: '40px' }}>
                        <img style={{ borderRadius: "50%", width: '45px', height: '45px' }} src="https://webstatic.chargebee.com/assets/web/536/images/case-study/freedom-fred.png" alt="" />
                        <p style={{ fontSize: '12px', color: "grey" }}>
                            Fred Stutzman, CEO, Freedom</p>
                    </div>
                </div>
            </div>
            <div className='brand-logo-con'>
                <img style={{ width: '140px' }} src="https://www.chargebee.com/static/resources/customers/percona.png" alt="" />
                <img style={{ width: '110px' }} src="https://www.chargebee.com/static/resources/customers/cosmos.png" alt="" />
                <img style={{ width: '150px' }} src="https://www.chargebee.com/static/resources/customers/freedom-logo.png" alt="" />
                <img style={{ width: '110px' }} src="https://www.chargebee.com/static/resources/customers/crew.svg" alt="" />
                <img style={{ width: '150px' }} src="https://www.chargebee.com/static/resources/customers/gigwell.png" alt="" />
            </div>
            <div style={{ marginTop: '200px', marginBottom: '60px' }}>
                <iframe width="750" height="447" src="https://www.youtube.com/embed/R9XgyoLQ9qw" title="How Businesses scale globally with Chargebee" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className='Customer-cardContainer'>
                <div className='Customer-cardContainer-inner'>

                    {
                        customerPageData.map((ele) =>
                            <Link to="/customers/SyncSpider">
                                <div style={{ height: '60px' }}>
                                    <img src={ele.img} alt="" />
                                </div>
                                <p>{ele.description}</p>
                                <h1 style={{ fontSize: '22px', color: 'blue', textAlign: 'right' }}>→</h1>
                            </Link>)
                    }
                </div>
            </div>
            <Footer />
        </div >
    )
}
