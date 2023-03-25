import React from 'react'

import { moryzone, moryzonelogo } from '../assets/images'
import { currentJob } from '../constants'
import style from '../style'

const UsedLanguages = () => (
  <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-10 xl:col-span-2">
    {currentJob.usedLanguages.map((usedLanguage) => (

      <li key={usedLanguage.name}>
        <div className="flex items-center gap-x-6">
        <div className={`w-[64px] h-[64px] rounded-full ${style.flexCenter}  `}>
            <img src={usedLanguage.icon} alt="icons" className="w-[80%] h-[80%] object-contain " />
        </div>
          {/* <img className="w-[50%] h-[50%] object-contain rounded-full" src={usedLanguage.icon} alt="" /> */}
          <div className="w-full">
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gradient">{usedLanguage.name}</h3>
            <div className="h-1 w-full z-[2] bg-neutral-200  dark:bg-neutral-600">
              <div className={`h-1 bg-blue-gradient z-[3] w-[${usedLanguage.level}]  `}></div>
            </div>
          </div>
        </div>
      </li>
    ))}


  </ul>
)


const CurrentJob = () => {
  return (
    <div className={style.paddingY}>
      <section className={`rounded-xl border border-sky-500 relative`}>
        <img src={moryzone} className="w-[100%] rounded-xl blur-[5px] z-[1] relative" alt="" />
        <img src={moryzonelogo} className="rounded-full w-[25%] absolute z-[2] border border-sky-500 left-[80px] top-[100px] " alt="" />
        <div className="absolute right-[50px] top-[100px] z-[2] w-[768px] rounded-xl border border-sky-500 bg-gradient-to-r from-slate-800 ">
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
      </section>

    </div>
  )
}

export default CurrentJob