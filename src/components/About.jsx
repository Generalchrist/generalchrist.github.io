import React from "react";
import style, { layout } from "../style";
import Button from "./Button";

import kalkis from "../assets/images/kalkis.webp";

const About = () => {
  return (
    <section id="about" className={layout.section}>
      <div className={`${layout.sectionImg} flex-col`}>
        <img src={kalkis} alt="" className="rounded-xl sm:mr-10 z-[5]" />
        <div className="absolute z-[0] w-[50%] h-[50%] left-0 bottom-0 blue__gradient" />
      </div>
      <div className={`justify-end ${layout.sectionInfo2} text-right `}>
        <h2 className={style.heading2}>Be Ready For A Flight</h2>
        <p className={`${style.paragraph} max-w-[470px] mt-5`}>
          Hello! My name is Mert, and I’m a full stack web developer with over 3
          years of professional experience. I specialize in building clean,
          efficient, and user-friendly web applications. I hold a Bachelor's
          degree in Computer Science from Ankara University, and I’m passionate
          about continuous learning and solving real-world problems through
          technology.
        </p>
      </div>
    </section>
  );
};

export default About;
