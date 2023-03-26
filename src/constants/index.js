import { angular, react, laravel, umbraco } from '../assets/icons/';
import { dien , aproje, discovery, breezair, climate, emregok, plastika } from '../assets/images/projects';


export const navLinks = [
  {
    id: "home",
    title: "Home"
  },
  {
    id: "about",
    title: "About"
  },
  {
    id: "features",
    title: "Features"
  },
  {
    id: "current-job",
    title: "Current Job"
  },
  {
    id: "socials",
    title: "Socials"
  },

];

export const features = [
  {
    id: "feature-1",
    icon: angular,
    title: "Angular",

    content:
      "Angular is a comprehensive front-end framework that offers features like data binding, dependency injection, and observables, making it ideal for building large-scale applications.",
  },
  {
    id: "feature-2",
    icon: react,
    title: "React",
    content:
      "React is a powerful front-end library that allows developers to build interactive and dynamic user interfaces.",
  },
  {
    id: "feature-3",
    icon: laravel,
    title: "Laravel",
    content:
      "Laravel is a robust back-end PHP framework that offers features like routing, middleware and Eloquent ORM.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "On Live Project",
    value: "30+",
  },
  {
    id: "stats-2",
    title: "Projects Completed",
    value: "100+",
  },
  {
    id: "stats-3",
    title: "Years of Coding Experience",
    value: "3",
  },


];

export const footerLinks = [
  {
    title: "Projects Links",
    links: [
      {
        name: "BeeRyder",
        link: "https://github.com/Generalchrist/BeeRyderRent",
      },
      {
        name: "E-Trade",
        link: "https://github.com/Generalchrist/E-Trade_Demo/",
      },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        name: "Address",
        link: "https://goo.gl/maps/tpERQfMXkAo9NhGA6",
      },
      {
        name: "Mail",
        link: "mailto:meertpatlar@gmail.com",
      },
    ],
  },
  {
    title: "Social Links",
    links: [
      {
        name: "Github",
        link: "https://github.com/Generalchrist",
      },
      {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/mert-patlar/",
      },
      {
        name: "Instagram",
        link: "https://www.instagram.com/generallchrs/",
      },
    ],
  },
];

export const currentJob = {
  title: "Full Stack Developer",
  company: "Moryzone",
  date: "2022 - Present",
  usedLanguages: [
    {
      name: "Umbraco Cms",
      level   : "95%",
      icon: umbraco,
    },
    {
      name: "Angular",
      level   : "88%",
      icon: angular,
    },
    {
      name: "Laravel",
      level   : "80%",
      icon: "https://laravel.com/img/logomark.min.svg",
    },
    {
      name: "React",
      level   : "70%",
      icon: react,
    },
    {
      name: ".NET Core",
      level   : "70%",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png",
    },
  ],
  projects: [
    {
      name: "Dien",
      link: "https://dienenerji.com/",
      image: dien,
    },
    {
      name: "aProje",
      link: "https://a-proje.com/",
      image: aproje,
    },
    {
      name: "Discovery",
      link: "http://discoverymakina.moryzone.com/",
      image: discovery,
    },
    {
      name: "Breezair",
      link: "http://breezair.moryzone.com/",
      image: breezair
    },
    {
      name: "Climate",
      link: "http://climatewizard.moryzone.com/",
      image: climate
    },
    {
      name: "Emregok",
      link: "http://emregokdemir.com.tr/",
      image: emregok
    },
    {
      name: "Plastika",
      link: "http://plastika.mory.tech/",
      image: plastika
    }
  ],
      
};


