import React from 'react'
import styles, { layout } from '../style'
import Button from './Button'
import { resume } from '../assets/images'

const Resume = () => {
    // this component will be used to display my resume

    return (
        <section id='resume' className={`${layout.section}`} >
            <div className={`${layout.sectionInfo}`}>
                <h2 className={`${styles.heading2}`}>Review My Professional Story</h2>
                <p className={`${styles.paragraph} mt-5`}>
                    Dive into my professional narrative, where every experience, skill, and achievement unfolds as a unique chapter. Explore the journey that has shaped my career and discover the story behind the skills and expertise I bring to the table.
                    <br />
                    You can click the button below to view my resume.
                </p>
                <a href="https://mertpatlar.com/MertPatlar.pdf" target='_blank' className='sm:mt-10 mt-6'>
                    <Button text="View Resume" styles={undefined} />
                </a>
            </div>
            <div className={`${layout.sectionImg} `}>
                <div className="scroll">
                    <img src={resume} className="rounded-xl sm:mr-10 z-[5]" alt="" />
                </div>
            </div>


        </section>
    )



}

export default Resume