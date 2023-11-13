import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image01 from '../assets/image-slider/1.jpg';
import Image02 from '../assets/image-slider/2.jpg';
import Image03 from '../assets/image-slider/3.jpg';
import Image04 from '../assets/image-slider/4.jpg';
import Image05 from '../assets/image-slider/5.jpg';

const ImageSlider = () => {

  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4])

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
        const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex + 1) % 5)
        return updatedIndexes
    })
  }

  useEffect(() => {
    // Set up a timer to automatically advance the images every 3 seconds (adjust the duration as needed).
    const autoplayInterval = setInterval(() => {
      handleNext();
    }, 3000); // 3000 milliseconds (3 seconds)

    // Clean up the timer when the component unmounts to avoid memory leaks.
    return () => {
      clearInterval(autoplayInterval);
    };
  }, []);

  const images = [
    Image01, Image02, Image03, Image04, Image05
  ]

  const positions = [
    'center',
    'left1',
    'left',
    'right',
    'right1'
  ]

  const imageVariants = {
    center: {x: '0%', scale: 1, zIndex: 5},
    left1: {x: '-50%', scale: 0.7, zIndex: 2},
    left: {x: '-90%', scale: 0.5, zIndex: 1},
    right: {x: '90%', scale: 0.5, zIndex: 1},
    right1: {x: '50%', scale: 0.7, zIndex: 2},
  }

  return (
    <div className='flex items-center flex-col justify-center bg-black h-screen'>
        {images.map((image, index) => (
            <motion.img 
                key={index}
                src={image}
                alt={image}
                className="rounded-[12px]"
                initial="center"
                animate={positions[positionIndexes[index]]}
                variants={imageVariants}
                transition={{ duration: 0.5 }}
                style={{ width: '40%', position: 'absolute' }}                                
            />
        ))}
    </div>
  )
}

export default ImageSlider