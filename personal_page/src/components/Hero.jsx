import React from 'react'
import style from '../style'
import Main from '../assets/images/hero.webp'

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${style.paddingY}`}>
    <div className={`flex-1 ${style.flexStart}
    flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <span className="text-white">Full Stack Web Developer</span>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">A <span className="text-gradient">Young Developer</span>  <br className="sm:block hidden" />
          For All Software Products
        </h1>
      </div>
        <p className={`${style.paragraph} max-w-[470px] mt-5`}>
          Computer engineering student with some coding experience and a strong desire to expand their technical knowledge.
          </p>
    </div>
    <div className={`flex-1 flex ${style.flexCenter} md:my-0 my-10 relative`}>
      <img src={Main} alt="mert patlar" className="w-[100%] p-3 relative z-[5] rounded-3xl" />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
  </section>
)

export default Hero