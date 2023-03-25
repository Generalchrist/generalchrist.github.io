import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../style'

import { angular, react, laravel } from '../assets/icons';

const FeatureCard = ({ icon, title, content, index }) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0" } feature-card  `}>
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue `}>
            <img src={icon} alt="icons" className="w-[50%] h-[50%] object-contain " />
        </div>
        <div className={`flex-1 flex flex-col ml-3`}>
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1 ">{title}</h4>
            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1 ">{content}</p>
        </div>
    </div>
)


const Features = () => {
    return (
        <section id="features" className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>Full-Stack Development <br className="sm:block hidden" /> with Leading Frameworks</h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`} >
                    React, Angular, and Laravel are three of the most
                    popular frameworks used in full-stack web development.
                    Together, these frameworks offer a powerful and flexible toolkit
                    for building high-quality web applications from start to finish.
                </p>
            </div>
            <div className={`${layout.sectionImg} flex-col `}>
                {features.map((feature, index) => (
                    <FeatureCard key={feature.id} {...feature} index={index} />
                ))}
            </div>
        </section>
    )
}



export default Features