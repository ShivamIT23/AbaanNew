import React from 'react'
import ChocolateSide from '../ChocolateSide/ChocolateSide'
import { motion } from 'framer-motion'

export default function Instagram({startAnimation}) {
  return (
    <motion.div
    key={startAnimation ? "start" : "stop"}
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{once: true}}
      style={{
        background: `linear-gradient(135deg,#EAF8F9 8%, #F8EAE1 43%, #F5F9FC 64%, #EFD7EF 99%)`,
      }}
      className="min-h-[90svh] h-fit relative w-[100svw]"
    >
      <div className="absolute -bottom-32 lg:-bottom-64 left-0 w-0 md:w-36 lg:w-60 z-[20]">
        <ChocolateSide />
      </div>
      <div className="flex flex-col items-center h-fit gap-8 px-[10vw] pt-28">
        <div className=" flex flex-col gap-7 items-center max-h-fit relative">
          <h3 className="globalHeaderFont text-5xl lg:text-6xl pt-4">
            Follow Us on <span>Instagram </span>
          </h3>
          <p className="text-[#646464]">
          Join our Instagram community for updates, special deals, and more!
          </p>
        </div>
        <div className="grid grid-cols-5 gap-8 w-fit py-6 h-fit relative">
            <img src="/images/insta1.png" alt="" className='col-span-1 relative z-[10] drop-shadow-sm' />
            <img src="/images/insta2.png" alt="" className='col-span-1 relative z-[10] drop-shadow-sm' />
            <img src="/images/insta3.png" alt="" className='col-span-1 relative z-[10] drop-shadow-sm' />
            <img src="/images/insta4.png" alt="" className='col-span-1 relative z-[10] drop-shadow-sm' />
            <img src="/images/insta5.png" alt="" className='col-span-1 relative z-[10] drop-shadow-sm' />
            <div className='absolute w-20 aspect-square top-0 -left-6 bg-[#EC1D23] rounded-full hover:shadow-md hover:scale-125 transition'></div>
            <div className='absolute w-20 aspect-square bottom-0 -right-8 bg-[#683292] rounded-full hover:shadow-md hover:scale-125 transition'></div>
        </div>
      </div>
    </motion.div>
  )
}
