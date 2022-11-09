import React from 'react'
import { useState } from 'react'
import { Product } from './NavbarItems'

export const ProductDropdown = () => {
    const [dropdown, setDropdown] = useState(false)
    return (
        <div id='ProductSubmenu' className={dropdown ? 'Product-Submenu-Open' : 'Product-Submenu-Close'} onClick={() => setDropdown(!dropdown)}>
            {
                Product.map((ele) => <p id={ele.id == 'H1' || ele.id == 'H2' || ele.id == 'H3' || ele.id == 'H4' || ele.id == 'H5' || ele.id == 'H6' ? 'ProductItem-Heading' : 'notHeading'} key={ele.id}>{ele.title}</p>)
            }
            {/* <div id='ProductSupport'>
                Supports:
                Preferred Partners
                <span> Stripe,</span><span> Paypal,</span><span> Braintree,</span><span> Checkout.com,</span><span> GoCardless,</span> and 27 other payment gateways.
                Seamless integration with<span> Xero,</span><span> QuickBooks,</span><span> Zendesk,</span> Salesforce + 18 more.
            </div> */}
        </div>
    )
}
