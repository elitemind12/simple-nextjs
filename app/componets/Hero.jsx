import React from "react";

const Hero = ({Heading, Message}) => {
    return(
    <div className='flex items-center justify-center mb-12 h-screen bg-fixed bg-center bg-cover custom-img'>
        {/* overlay */}
          <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
          <div className='p-5 text-white z-[2]'>
          <h2 className='text-5xl font-bold'>{Heading}</h2>
          <p className='py-5 text-xl'>{Message}</p>
          <button className='px-8 py-2 border'>Book</button>
          </div>
    </div>
    )
}

export default Hero;