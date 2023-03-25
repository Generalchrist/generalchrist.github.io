import React from 'react'
import { github, linkedin } from '../assets/icons';
import { fare } from '../assets/images';
import styles, { layout } from '../style';
const Socials = () => (
  <section id="socials" className={layout.sectionReverse} >
    <div className={layout.sectionImgReverse}>
      <img src={fare} alt="mert patlar fare" className="w-[100%] h-[100%] relative z-[5] " />
      <div className="absolute z-3 -left-1/2 top-10 w-[50%] h-[50%] rounded-full white__gradient " />
      <div className="absolute z-0 -left-1/2 bottom-10 w-[50%] h-[50%] rounded-full pink__gradient " />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Look At My Socials</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Connect with me on GitHub and LinkedIn to stay up-to-date
        on my latest projects and professional achievements. My GitHub
        profile showcases my coding skills and portfolio, while my LinkedIn
        page highlights my work experience and skills. Don't hesitate to reach
        out if you have any questions or if you'd like to collaborate on a project</p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <a href="https://github.com/Generalchrist" target="_blank">
            <img src={github} className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer " alt="github mert patlar" />
          </a>
          <a href="https://www.linkedin.com/in/mert-patlar/" target="_blank">
            <img src={linkedin} className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" alt="linkedin mert patlar" />
          </a>
        </div>
    </div>

  </section>
)

export default Socials