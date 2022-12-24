import React from 'react'
import './HamburgerNav.css'
import { motion } from "framer-motion"



export default function HamburgerNavbar() {

    return (

        <motion.div
            whileInView={{ x: [350, 0] }}
            transition={{ duration: 0.5 }}
            className='hamburger-menus-main-con'>
            <h3 style={{ fontSize: '14px', fontWeight: 'bold' }}>PRODUCT</h3>
            <a href="">Subscription Management</a><br />
            <a href="">Billing Automation</a><br />
            <a href="">Recurring Payments</a><br />
            <a href="">Accounting & Taxes</a><br />
            <a href="">Customer Retention</a><br />
            <a href="">Reporting & Analytics</a>
            <hr />
            <h3 style={{ fontSize: '14px', fontWeight: 'bold' }}>SOLUTIONS</h3>
            <div className='ham-1st-container'>
                <div>
                    <a href='#' style={{ color: 'black', fontSize: "14px" }}>BY ROLE</a><br />
                    <a href='#'>Finance</a><br />
                    <a href='#'>Sales</a><br />
                    <a href='#'>RevOps</a><br />
                </div>
                <div>
                    <a href='#' style={{ color: 'black', fontSize: "14px" }}>BY INDUSTRY</a><br />
                    <a href='#'>B2B SaaS</a><br />
                    <a href='#'>eCommerce</a><br />
                    <a href='#'>E-learling</a><br />
                    <a href='#'>Publishing</a><br />
                    <a href='#'>Video & OTT</a><br />
                </div>
            </div>
        </motion.div>

    )
}
