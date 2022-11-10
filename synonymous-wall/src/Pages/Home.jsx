import React from 'react'
import BannerSlide from '../Components/Home/BannerSlide'
import Container2 from '../Components/Home/Container2'
import ImageDes from '../Components/Home/ImageDes'

import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Footer/Footer'


export default function Home() {
    return (
        <div>
            <Navbar />
            <BannerSlide />
            <Container2 />
            <ImageDes />
            <Footer />
        </div>
    )
}
