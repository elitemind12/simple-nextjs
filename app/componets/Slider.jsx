import React from "react";
import Image from "next/image";
import { sliderData } from "./SliderData";

const Slider = ({slides}) => {
    return(
        <div id='gallery'>
          <h1>Gallery</h1>
          <div>
            {sliderData.map((slide, index) => {
                return (
                    <Image src={slide.image} alt='/' width='1440' height='600' objectFit='cover' />
                )
            })}
          </div>
        </div>
    )
}

export default Slider;