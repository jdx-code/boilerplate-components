import React from 'react'
import Footer from '../components/Footer'
import GalleryLightbox from '../components/GalleryLightbox'
import Hero from '../components/Hero'
import ImageSlider from '../components/ImageSlider'


const Home = () => {
  return (
    <div id="main">               
        <Hero />     
        <ImageSlider />   
        <GalleryLightbox />          
        <Footer />
    </div>
  )
}

export default Home