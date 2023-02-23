import React, { useState } from 'react'
import "./Slider.scss"
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';

const Slider = () => {

    const [currentSlide,setCurrentSlide] = useState(0)

    const data= [
        "https://media.gettyimages.com/id/1198271727/photo/abstract-wavy-object.jpg?s=612x612&w=0&k=20&c=CuuC79GvcO06K5EpBeQ2AMO68TkZS8mw9ZydJ2BMfeo=",
        "https://media.gettyimages.com/id/1353592941/photo/cotton-fabrick-flowing-by-wind-on-beige-background-stock-photo.jpg?s=612x612&w=0&k=20&c=LFjWCP_Z8VRF2PL47B3CI7LDY4HH3csjBsqx9wA4tis=",
        "https://media.gettyimages.com/id/1221473823/photo/circle-of-smoke.jpg?s=612x612&w=0&k=20&c=p_35CgCJ5xTLoZBNITLyP0dEqxXHVnRdMa_8RGxS3Jw="
    ]

    const prevSlide = () =>{
        setCurrentSlide(currentSlide===0? 2: (prev) => prev-1);
    }
    const nextSlide = () =>{
        setCurrentSlide(currentSlide===2?0: (prev)=> prev+1);
    }

  return (
    <div className='slider'>
        <div className="container" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <WestOutlinedIcon />
            </div>

            <div className='icon' onClick={nextSlide}>
                <EastOutlinedIcon />
            </div>

        </div>
    </div>
  )
}

export default Slider