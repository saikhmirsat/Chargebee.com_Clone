import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Footer/Footer'
import '../Pages/Customers.css'

export default function SyncSpiderDetail() {
    return (
        <div>
            <Navbar />
            <div className='cos-container'>
                <div className='container-box-1'>
                    <img src="https://i.ibb.co/8YmHWNt/Screenshot-2022-11-13-at-3-56-55-PM.png" alt="Screenshot-2022-11-13-at-3-56-55-PM" />
                    {/* <p>A mortgage-CRM that helps Loan Officers and their teams systematize the mortgage process and cultivate relationships with their partners in the real estate space.</p> */}
                </div>
                <div className='container-box-2'>
                    <img src="https://images.ctfassets.net/a7hvy8sclsq6/4KQMyH8cjSCpej40xWnVtP/24a9b5586ff08545c627722f44b4a925/ss_logo_blue.svg" alt="" />
                    <h1>How SyncSpider made offline and online payments possible for their customers with Chargebee</h1>
                    <p>Chargebee helped Syncspider expand their business globally by making their billing system compliant to global taxation and by enabling online and offline payments.</p>
                </div>
            </div>
            <div className='cos-container-2'>
                <div style={{ borderRight: '1px solid rgb(198, 196, 196)' }}>

                    <p className='con-2-head'> What SyncSpider was looking for:</p>
                    <p className='con-2-para'>Automate recurring billing</p>
                    <p className='con-2-para'>Possibility to enable offline payments for specific users</p>
                    {/* <p className='con-2-head'>Unreliable and incorrect SaaS metrics</p> */}
                    {/* <p className='con-2-para'>Whiteboard was not anchored on the right SaaS success metrics (MRR, ARR, Churn, etc.)</p> */}
                </div>
                <div>
                    <p className='con-2-head'>After Chargebee</p>
                    <p className='con-2-para'>Streamlined recurring billing operations with a slew of features</p>
                    {/* <p className='con-2-head'>RevenueStory for accurate subscription analytics</p> */}
                    <p className='con-2-para'>Scaled from being a European company to global markets </p>
                    <p className='con-2-para'>Flexibility to accept online and offline payments with dunning capabilities </p>
                </div>
            </div>
            <div className='cos-con-3-head'>
                <h1>See how Chargebee is a trusted
                    partner in 4500+ growth stories</h1>
                <button>Get a Demo</button>
            </div>

            <hr style={{ width: '80%', margin: 'auto', marginTop: '80px', marginBottom: '50px' }} />

            <div className='cos-container-4'>
                <div className='cos-container-4-child1'>
                    <h1>The Problem</h1>
                    <p>Having started with PayPal to process payments, Whiteboard had to rely heavily on manual billing, which restricted them from further enhancing their customer onboarding experience.</p>
                    <p>Soon, they moved to Braintree for processing recurring payments and managing their subscriptions. Braintree lacked the solid automation to recover revenue from payment failures and send email communications for follow-ups. With inconsistent policies surrounding deactivation and cancelation, a member of the Whiteboard team had to spend hours chasing customers for payments, every week — not the best use of their time, which would otherwise be used for onboarding customers.</p>
                    <p>Whiteboard also found that they were not anchored to the right SaaS success metrics. In their early days, the acquisition of new customers was a bigger focal point than retention. “Anchoring to traditional, transactional metrics (like new sales) made us short-sighted. We weren't paying enough attention to churn or expansion or recurring revenue,” Ben Laughter, (former) VP, Customer Success & Operations at Whiteboard said.</p>
                    <h1>The Solution</h1>
                    <p>One of Whiteboard’s biggest fears, while evaluating a billing solution, was data quality while migrating existing customers into the system. Double billing existing customers and sending them incorrect notifications were some of the reasons that made Whiteboard averse to migration risks.</p>
                    <p>But Chargebee’s implementation and migration specialists ensured that the transition was smooth. While onboarding all new customers via Chargebee instead of Braintree, Whiteboard also spent time building out their preferences, email templates, user profiles, product catalogs, and coupons.</p>
                    <h1>The Pay-off</h1>
                    <p>The automated emails that go out from Chargebee for all manner of events including upcoming and successful renewals, quotes, and subscription changes have helped Whiteboard stay on top of all their customers, resulting in great financial relationships.</p>
                    <p>Chargebee’s Revenue Recovery Suite was another significant contributor to Whiteboard’s growth. The dunning tools helped them standardize and automate the vast majority of their processes when payments fail, reducing churn by almost 100%.</p>
                    <p>Chargebee’s RevenueStory also made it easy to anchor their critical SaaS metrics such as MRR, ARR, Churn, Expansion, etc, because of which, they were able to better understand the need for quality sales and onboarding, and for building stronger customer relationships.</p>
                    <br />
                    <div className='sp-para'>
                        <p >We decided on Chargebee largely because of the flexibility and support offered where importing existing data was concerned. It took some time and consultation, but Chargebee made it pretty easy and did a great job of mitigating risk as we migrated.</p>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSS-jqJ733tnPSLw4KeNoa8Nj8JDNKiPGC75hJHDzLS-LukEbfqPEUMJDVf-0q69oTgQ0&usqp=CAU" alt="" />
                        <h2>Ben Laughter</h2>
                    </div>
                </div>
                <div className='cos-container-4-child2'>
                    <img src="https://i.ibb.co/9pfLJx4/Tech-Stack-Mirsat.png" alt="Tech-Stack-Mirsat" />
                </div>
            </div>
            <Footer />
        </div>
    )
}
