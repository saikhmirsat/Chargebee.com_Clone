import React from 'react'
import './Navbar2.css'
import { Link, Navigate } from 'react-router-dom'
import { Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import { useState } from 'react'




export default function Navbar2() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState(false)

    let obj = {
        email: 'saikh@masai.com',
        password: '1234'
    }

    function SigningBtn(e) {
        e.preventDefault()
        console.log(email)
        console.log(password)

        if (email == obj.email && password == obj.password) {
            alert("Successfull Login")
            setLogin(true)

        } else {
            alert("Something Wrong")
        }

    }
    if (login) {
        return < Navigate to="/" />
    }
    return (
        <div className='navbar2'>
            <div className='nav2-box'>
                <Link to="/"><img src="https://i.ibb.co/8YbBm7c/LOGO.png" alt="LOGO" /></Link>
                <div className='sigupbtn-div'>
                    <p>Don't have an account? </p>
                    <Link to='/signup'>Sign up →</Link>
                </div>
            </div>

            <div className='login-mid-box'>
                <div className='login-mid-box-inner'>
                    <div className='login-mid-box-1'>
                        <img src="https://i.ibb.co/3p9gdQ2/purplelogo.png" alt="purplelogo" />
                        <p className='space-para'>ANNOUNCING SUMMER 2022 PRODUCT RELEASE</p>
                        <h2 style={{ width: '80%' }}>Monetize Effectively to Tackle Market Turbulence</h2>
                        <div className='box-1-img-des'>
                            <div>
                                <img src="https://i.ibb.co/2cpc4qW/Screenshot-2022-11-11-at-8-03-44-PM.png" alt="sliding" />
                            </div>
                            <div>
                                <p>Chargebee's Summer 2022 Release brings you better monetization capabilities that help you seize revenue opportunities by improving customer lifetime value, managing cashflows better, and achieving topline growth.</p>
                                <span>See what's new across our products -></span>
                            </div>
                        </div>
                    </div>
                    <div className='login-mid-box-2'>
                        <h2>Sign in to Chargebee!</h2>
                        <input type="text" placeholder='name@company.com' onChange={(e) => setEmail(e.target.value)} />
                        {/* <input type="text" /> */}
                        {/* input box 2--------- */}
                        <InputGroup size='md'>
                            <Input
                                h='40px'
                                w='100%'
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='password'
                                fontSize='15px'
                                paddingLeft='10px'
                                fontWeight='lighter'
                                border='1px solid rgb(192, 190, 190)'
                                boxShadow='inset 1px 1px 2px 0 rgb(0 0 0 / 12%)'
                                borderRadius='5px'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        {/* ------------ */}
                        <div className='sign-forget'>
                            <button onClick={SigningBtn}>Sign in</button>
                            <p>Forget password?</p>
                        </div>
                        <hr className='login-line' />
                        <p className='login-or'>or</p>
                        <div className='loging-btn-google-box'>
                            <a href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttps%2Fapp.chargebee.com%3Fid%3Dauth719227&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&client_id=1026171866281-i02klruckr6inbgfe01432nvg5eov7up.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fapp.chargebee.com&fetch_basic_profile=true&gsiwebsdk=2&service=lso&o2v=1&flowName=GeneralOAuthFlow">
                                <button className='loging-btn-google' >
                                    <img src="https://static.vecteezy.com/system/resources/previews/010/353/285/original/colourful-google-logo-on-white-background-free-vector.jpg" alt="" />
                                    Sign in with Google
                                </button>
                            </a>
                        </div>
                        <p className='single-signin'>Sign in with Single Sign-On</p>
                    </div>

                </div>
            </div>
            <p className='nav-2-last-para'>🌎 You are on our US data hosting centre. Switch to our <span style={{ color: 'royalblue', fontSize: '15px' }}>EU</span> or <span style={{ color: 'royalblue', fontSize: '15px' }}>AU</span> data hosting centre.</p>
        </div>
    )
}
