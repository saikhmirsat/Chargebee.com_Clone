import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { ProductDropdown, SolutionDropdown } from './Dropdown'
import { useState } from 'react'
import { Divide as Hamburger } from 'hamburger-react'
import HamburgerNavbar from './HamburgerNavbar'

export default function Navbar() {
    const [DropdownProduct, setDropdownProduct] = useState(false)
    const [DropdownSolution, setDropdownSolution] = useState(false)
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <div className='navbar'>
                <div className='nav-left-item'>
                    <div className='logo'>
                        <Link to="/"><img src="https://i.ibb.co/8YbBm7c/LOGO.png" alt="LOGO" /></Link>
                    </div>
                    <div className='nav-midle-items'>
                        <span className='Products'
                            onMouseEnter={() => setDropdownProduct(true)}
                            onMouseLeave={() => setDropdownProduct(false)}
                        > <p className='mainMenueitem' >Product</p>
                            {DropdownProduct && <ProductDropdown />}
                        </span>

                        <span><Link to="/pricing">Pricing</Link></span>

                        <span className='Products'
                            onMouseEnter={() => setDropdownSolution(true)}
                            onMouseLeave={() => setDropdownSolution(false)}
                        > <p className='mainMenueitem' >Solutions</p>
                            {DropdownSolution && <SolutionDropdown />}
                        </span>

                        <span> <Link to="/customers">Customers</Link></span>

                        <span>Resources</span>

                        <span> <Link to="/partner">Partner</Link></span>

                    </div>
                </div>
                <div className='nav-right-items'>
                    <div className='glob-world'>
                        <img src="https://i.ibb.co/RDpk8vY/globe-Logo.png" alt="globe-Logo" />
                        <span>English</span>
                    </div>
                    <div className='glob-world'>
                        <img src="https://i.ibb.co/MRZV5Zh/Lock-Logo.png" alt="Lock-Logo" />
                        <Link to="/login"> <span className='lgn-ar'><div>Log in</div> <div style={{ marginLeft: '5px' }}> ❯</div></span></Link>
                    </div>
                    <button className='demo-btn'>
                        <Link to='/demoPage' style={{ color: "white", fontWeight: 'bold' }}>Get a Demo</Link><div style={{ color: "white", marginLeft: '5px', fontWeight: 'lighter' }} className='arrow'> ❯</div>
                    </button>
                </div>
            </div>
            <div className='hamburger'>


                <img src="https://i.ibb.co/8YbBm7c/LOGO.png" alt="LOGO" />

                <div>
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>

            </div>
            <div>
                {
                    isOpen ? <HamburgerNavbar /> : ""
                }
            </div>
        </>
    )
}
