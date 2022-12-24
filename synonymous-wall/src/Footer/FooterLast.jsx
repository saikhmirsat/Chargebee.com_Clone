import React from 'react'
import './FooterLast.css'


export default function FooterLast() {
    return (
        <div className='footer-box'>
            <div className='foot-items'>
                <div>
                    <h1 className='head'>Products ➤</h1>
                    <p> Subscription Management</p>
                    <p> Recurring Billing and Invoicing</p>
                    <p>Recurring Payments</p>
                    <p> Accounting and Taxes</p>
                    <p> SaaS Reporting</p>
                    <p> Enterprise Billing</p>
                    <p> Integrations</p>
                </div>
                <div>
                    <h1 className='head'> Help & Support ➤</h1>
                    <p>Security</p>
                    <p>FAQs</p>
                    <p>Status</p>
                    <p>Product Documentation</p>
                    <p>API Documentation</p>
                    <p>Supported Payment Gateways</p>
                    <p>Sitemap</p>
                </div>
                <div>
                    <h1 className='head'> Resources ➤</h1>
                    <p>Blog</p>
                    <p>Compare Payment Gateways</p>
                    <p>Tackling Payment Failures</p>
                    <p>Enterprise Billing Guide</p>
                    <p>Webinars</p>
                    <p>Events</p>
                    <p>Glossaries</p>
                    <p>Subscription Academy</p>
                </div>
                <div>
                    <h1 className='head'> Company ➤</h1>
                    <p> Customers</p>
                    <p> Partners</p>
                    <p style={{ color: "#FF7846" }}>Careers</p>
                    <p>Press</p>
                    <p>Brand Guidelines</p>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
            
            <img className='circle-log' src="https://i.ibb.co/BC8zPhq/circle-logo.png" alt="circle-logo" border="0"></img>
            <div className='social-icon'>
                <a href="https://www.facebook.com/chargebee" target="_blank"><img src="https://i.ibb.co/KXrJQj3/fb.png" alt="fb" /></a>
                <a href="https://twitter.com/chargebee" target="_blank"> <img src="https://i.ibb.co/QjpPYkn/twitter.png" alt="twitter" /></a>
                <a href="https://www.youtube.com/user/ChargeBeeStudio" target="_blank"><img src="https://i.ibb.co/SP8MKvy/Youtube.png" alt="Youtube" /></a>
                <a href="https://www.linkedin.com/company/chargebee/" target="_blank"><img src="https://i.ibb.co/WWdvxCX/lnkedin.png" alt="lnkedin" /></a>
            </div>
        </div>
    )
}

