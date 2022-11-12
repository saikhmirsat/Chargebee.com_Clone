import React from 'react'
import { Link, Navigate } from 'react-router-dom';
import './Signup.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react';

let obj = {
  email: 'saikh@masai.com',
  password: '1234'
}

export default function Signup() {
  const [value, setValue] = useState()
  const [email, setEmail] = useState("")
  const [signUp, setSignUp] = useState(false)




  function SignUpBtn() {
    if (email === obj.email) {
      alert('SignUp Successfull')
      setSignUp(true)
    } else {
      alert('Something Wrong')
    }
  }

  if (signUp) {
    return <Navigate to='/login' />
  }
  return (
    <div className='signup-container'>
      <div className='signup-container-inner'>
        <div className='bg-purple'>
          <div id='swiper-con'>
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide><img style={{ height: '103%', width: '100%' }} src="https://i.ibb.co/qxtfB7K/Screenshot-2022-11-12-at-10-05-11-AM.png" alt="image1" /></SwiperSlide>
              <SwiperSlide><img style={{ height: '100%', width: '100%' }} src="https://i.ibb.co/KNzsKmv/Screenshot-2022-11-12-at-10-06-41-AM.png" alt="image2" /></SwiperSlide>
              <SwiperSlide><img style={{ height: '100%', width: '100%' }} src="https://i.ibb.co/jRyvcJ6/Screenshot-2022-11-12-at-10-06-06-AM.png" alt="image3" /></SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div>
          <div className='inpuBox-box'>
            <div style={{ width: '100%' }} className='nav2-box'>
              <Link to="/"><img src="https://i.ibb.co/8YbBm7c/LOGO.png" alt="LOGO" /></Link>
              <div className='sigupbtn-div'>
                <Link to='/login'>Login →</Link>
              </div>
            </div>
            <h2 className='crt-sand-acc'>Create Your Sandbox Account</h2>
            <div className='inpu-main-box'>
              <h3>Work email</h3>
              <input type="email" placeholder='(eg) john.m@company.com' onChange={(e) => setEmail(e.target.value)} />
              <h3>Phone number</h3>
              <PhoneInput
                international
                countryCallingCodeEditable={false}
                defaultCountry="IN"
                value={value}
                onChange={() => setValue(value)}
              />

              <div className='signup-checkbox'>
                <input type="checkbox" />
                <p>I want to be notified about the awesome happenings* at Chargebee</p>
              </div>
              <button className='signup-btn' onClick={SignUpBtn}>
                Complete Signup →
              </button>
              <p style={{ color: 'grey', fontSize: '13px', fontWeight: 'lighter', marginTop: '50px', lineHeight: '1.6' }}>By clicking on Complete Signup, you agree to our Terms and you acknowledge having read our Privacy Notice</p>
              <p style={{ color: 'grey', fontSize: '10px', fontWeight: 'lighter', lineHeight: '1.9' }}>*This includes periodic newsletters, emails about usage tips, billing practices, and other communications. You can opt out anytime within the app.</p>
              <p style={{ color: 'grey', fontSize: '13px', fontWeight: 'lighter' }}>Your data hosting is <span style={{ color: 'grey', fontSize: '13px', fontWeight: 'bold' }}>UR Region</span></p>
            </div>
          </div>
          <img style={{ width: '50%', position: 'relative', left: '24%', marginTop: '20px' }} src="https://i.ibb.co/GtBRX8Y/Screenshot-2022-11-12-at-4-40-13-PM.png" alt="Screenshot-2022-11-12-at-4-40-13-PM" border="0"></img>
        </div>
      </div>
    </div>
  )
}
