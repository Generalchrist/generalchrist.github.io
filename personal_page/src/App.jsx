import React from 'react'
import style from './style'

import { Navbar, Footer, About, CurrentJob, Hero, Stats, Bussiness } from './components'


const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${style.paddingX} ${style.flexCenter}`}>
      <div className={`${style.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${style.flexStart}`}>
      <div className={`${style.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${style.paddingX} ${style.flexStart}`}>
      <div className={`${style.boxWidth}`}>
        <Stats />
        <About />
        <Bussiness />
        {/* <CurrentJob /> */}
        <Footer />
      </div>
    </div>

  </div>

  
);

console.log(`__          __  _                            ______    _                _ 
\\ \\        / / | |                          |  ____|  (_)              | |
 \\ \\  /\\  / /__| | ___ ___  _ __ ___   ___  | |__ _ __ _  ___ _ __   __| |
  \\ \\/  \\/ / _ \\ |/ __/ _ \\| '_ ' _ \\ / _ \\ |  __| '__| |/ _ \\ '_ \\ / _' |
   \\  /\\  /  __/ | (_| (_) | | | | | |  __/ | |  | |  | |  __/ | | | (_| |
    \\/  \\/ \\___|_|\\___\\___/|_| |_| |_|\\___| |_|  |_|  |_|\\___|_| |_|\\__,_|

    I'm Mert Welcome to my personal page!
    `);



export default App