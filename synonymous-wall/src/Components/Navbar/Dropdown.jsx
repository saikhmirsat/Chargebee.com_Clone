import React from 'react'
import { useState } from 'react'
import { Product, Solution } from './NavbarItems'

export const ProductDropdown = () => {
    const [dropdown, setDropdown] = useState(false)
    return (
        <div id='ProductSubmenu' className={dropdown ? 'Product-Submenu-Open' : 'Product-Submenu-Close'} onClick={() => setDropdown(!dropdown)}>
            {
                Product.map((ele) => <p id={ele.id === 'H1' || ele.id === 'H2' || ele.id === 'H3' || ele.id === 'H4' || ele.id === 'H5' || ele.id === 'H6' ? 'ProductItem-Heading' : 'notHeading'} key={ele.id}>{ele.title}</p>)
            }
        </div>
    )
}
export const SolutionDropdown = () => {
    const [dropdown, setDropdown] = useState(false)
    return (
        <div id='SolutionSubmenu' className={dropdown ? 'Product-Submenu-Open' : 'Product-Submenu-Close'} onClick={() => setDropdown(!dropdown)}>
            {
                Solution.map((ele) => <p id={ele.id === 'H1' || ele.id === 'H2' || ele.id === 'H3' || ele.id === 'H4' || ele.id === 'H5' || ele.id === 'H6' ? 'ProductItem-Heading' : 'notHeading'} key={ele.id}>{ele.title}</p>)
            }
        </div>
    )
}
