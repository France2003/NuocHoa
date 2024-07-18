import React from 'react'
import { SwiperSlide } from 'swiper/react'
import SwiperGallery from '../component/Swiper/SwiperGallery'

const PageHome = () => {
  return (
    <div className='containerHome'>
        <div className='banner'>
            <SwiperGallery/>
        </div>
    </div>
  )
}

export default PageHome