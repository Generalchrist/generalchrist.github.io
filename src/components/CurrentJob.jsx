import React from 'react'

import { akgun, hasanabi, moryzone, moryzonelogo } from '../assets/images'
import { currentJob } from '../constants'
import style, { layout } from '../style'


import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const options = {
  items: 5,
  center: true,
  autoplay: true,
  autoplaySpeed: 6000,
  autoplayHoverPause: true,
  loop: true,
  margin: 20,
  dots: false,
  responsive: {
    480: {
      items: 1
    },
    919: {
      items: 4
    }
  }
}

const UsedLanguages = () => (
  <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-10 xl:col-span-2">
    {currentJob.usedLanguages.map((usedLanguage) => (

      <li key={usedLanguage.name}>
        <div className="flex items-center gap-x-6">
          <div className={`w-[64px] h-[64px] rounded-full ${style.flexCenter}  `}>
            <img src={usedLanguage.icon} alt="icons" className="w-[80%] h-[80%] object-contain " />
          </div>
          {/* <img className="w-[50%] h-[50%] object-contain rounded-full" src={usedLanguage.icon} alt="" /> */}
          <div className="w-full ">
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gradient">{usedLanguage.name}</h3>
            {/* <div className="h-1 w-full z-[2] bg-neutral-200  dark:bg-neutral-600">
              <div className={`h-1 bg-blue-gradient z-[3] `} style={{width : usedLanguage.level}}></div>
            </div> */}
          </div>
        </div>
      </li>
    ))}
  </ul>
)


const CurrentJob = () => {
  return (
    <div id="current-job" className={style.paddingY}>
      <section className={`rounded-xl border border-sky-500 relative`}>
        <img src={hasanabi} className="w-[100%] rounded-xl blur-[5px] z-[1] relative" alt="" />
        <img src={akgun} className="rounded-full w-[20%] absolute z-[2] border border-sky-500 left-[80px] top-[100px]" alt="" />
        <div className="absolute right-[80px] top-[100px] z-[2] w-[768px] rounded-xl border border-sky-500 bg-gradient-to-r from-slate-800 ">
          <div className="text-gradient text-2xl font-medium font-poppins p-4">
            <p className="text-3xl">{currentJob.company}</p>
            <p className="text-base">{currentJob.title}</p>
            <p className="text-lg">{currentJob.date}</p>


            {/* a section for programming languages that i used on this company */}
            <div className="flex flex-row mt-3">
              <UsedLanguages />
            </div>
          </div>
        </div>
        {currentJob.projects.length == 1 &&
          <div className={`absolute top-[400px] z-[2] w-full text-center h-[200px]  `}>
            <div className={`flex flex-row p-6  rounded-[20px] border border-sky-500  bg-gradient-to-r  from-slate-800 m-8`}>
              <a href={currentJob.projects[0].link} target="_blank" rel="noreferrer" className='max-w-[200px]'>
                <img src={currentJob.projects[0].image} alt="" className="max-w-[100%] object-contain rounded-full" />
              </a>
              <div className="text-gradient font-medium font-poppins p-4 text-left">
                <p className="text-2xl pb-5">{currentJob.projects[0].name}</p>
                <p className="text-base">
                  The Smoke-Free Air Zone Inspection System ensures compliance with tobacco control
                  laws by enabling real-time monitoring of enforcement activities nationwide, involving
                  around 1500 inspection teams and nearly 10,000 personnel
                </p>
              </div>

            </div>
          </div>
        }
        {currentJob.projects.length > 1 &&
          <div className={`absolute top-[450px] z-[2] w-full text-center h-[300px]  `}>
            <OwlCarousel className="owl-theme"
              {...options}
            >
              {currentJob.projects.map((project, index) => (
                <div key={project.name} className={`flex flex-row p-6  rounded-[20px] currentJob-card bg-gradient-to-r from-slate-900 to-slate-700 `}>
                  <a href={project.link} className="flex " target='_blank' >
                    <img src={project.image} className="rounded-xl" alt="icons" />
                  </a>
                </div>
              ))}
            </OwlCarousel>
          </div>
        }
      </section>

    </div>
  )
}

export default CurrentJob