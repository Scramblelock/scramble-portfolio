import krang from './assets/Images/krangfull.png'
import robot from './assets/Images/robofriends.png'
import hackthenews from './assets/Images/hackthenews.png'
import toronto from './assets/Images/toronto.png'
import huddle from './assets/Images/huddle.png'
import scramble from './assets/Images/scramble.png'
import nekofudo from './assets/Images/nekofudo.png'
import osheaga from './assets/Images/osheaga.png'
import zezin from './assets/Images/zezin.png'
import crown from './assets/Images/crown.png'
import masscalc from './assets/Images/masscalc.png'
import MarcBrush from './assets/Logos/MarcBrush.png'
import MarcCode from './assets/Logos/MarcCode.png'
import MarcGraf1 from './assets/Logos/MarcGraf1.png'
import gmail from './assets/Social/gmail.png'
import facebook from './assets/Social/facebook-logo-button.png'
import github from './assets/Social/github-logo.png'
import instagram from './assets/Social/instagram.png'
import linkedin from './assets/Social/linkedin.png'
import medium from './assets/Social/medium.png'
import garage from './assets/Images/garage.png'

export const FONTS = {
  HELVETICA: 'Helvetica, sans-serif',
  HELVETICA_NEUE: 'Helvetica Neue',
  AVENIRNEXT: 'AvenirNext-Regular',
}

export const COLORS = {
  BLACK: '#000000',
  BOX_SHADOW_BLACK: 'rgba(0, 0, 0, 0.5)',
  WHITE: '#ffffff',
  GREY: 'rgba(255, 255, 255, 0.85)',
  DARK_GREY: '#979797',
  RED: '#FF0000',
}

export const CONTENT = [
  { image: MarcCode },
  { image: MarcBrush },
  { image: MarcGraf1 },
]

export const NAVIGATION = [
  {
    title: 'About',
    direction: 'about',
  },
  {
    title: 'Projects',
    direction: 'projects',
  },
  {
    title: 'Skills',
    direction: 'skills',
  },
  {
    title: 'Contact',
    direction: 'contact',
  },
]

export const ABOUT = {
  header: 'About Me',
  par1: `Based in Montréal, Québec, Canada, I'm a highly motivated, self-taught
        full-stack web developer with a diverse background in arts and sciences
        and a passion for learning new technologies. I have always pursued
        meaningful opportunities in my career and am driven by a desire to make
        a difference in people's lives.`,
  par2: `As a developer I enjoy making web pages fast and easy to use, while
        applying the latest technologies. My background as a scientist has
        helped me be a better problem solver and has given me a sharp and
        disciplined attention to detail. I also have a very strong artistic
        side, the result of being involved in Hip Hop culture (`,
  b1: `as a dancer and artist`,
  par3: `) or over 20 years. My graphic design, video editing and brush
        lettering skills developed from a love for graffiti and street art. The
        approach I took to learning dances like b-boying and locking has helped
        me become a creative artist, community leader and an effective teacher.`,
  par4: ` I've travelled the world, working with people from all walks of life.
        Following the motto of "each one, teach one", I truly believe we all
        have something special to bring to the table. `,
  b2: `Get in touch`,
  par5: ` to see what I can bring to your team!`,
}

export const SOCIAL_ACCOUNTS = [
  {
    name: linkedin,
    link: 'https://www.linkedin.com/in/scramblelock/',
  },
  {
    name: github,
    link: 'https://github.com/Scramblelock',
  },
  {
    name: facebook,
    link: 'https://www.facebook.com/scramblelock',
  },
  {
    name: instagram,
    link: 'https://www.instagram.com/scramblelock/',
  },
  {
    name: medium,
    link: 'https://medium.com/@scramblelock',
  },
  {
    name: gmail,
    link: 'mailto:scramblelock@gmail.com',
    isEmail: true,
  },
]

export const PROJECTS = [
  {
    name: 'Garage/Dynamite Clothing',
    link: 'https://garageclothing.com',
    description: 'React + Salesforce + Node + Postgres + Google Cloud',
    src: garage,
  },
  {
    name: 'Scramblelock',
    link: 'https://scramblelock.com',
    description: 'NextJS + React + Styled Components',
    src: scramble,
  },
  {
    name: 'Masscalc',
    link: 'https://masscalc.vercel.app/',
    description: 'React + Redux + Material UI + Jest',
    src: masscalc,
  },
  {
    name: 'Smart Brain',
    link: 'https://smartbrain-ten.vercel.app/',
    description: 'React + Node.js + PostgreSQL',
    src: krang,
  },
  {
    name: 'Crown Clothing',
    link: 'https://crwn-clothingltd.herokuapp.com/',
    description: 'React + Redux + Firebase + Stripe',
    src: crown,
  },
  {
    name: 'Neko Fudo',
    link: 'https://chingu-voyages.github.io/v10-geckos-team-02/',
    description: 'React + CSS (Group Project)',
    src: nekofudo,
  },
  {
    name: 'Robofriends',
    link: 'https://scramblelock.github.io/robofriends-redux-pwa/',
    description: 'React + Redux',
    src: robot,
  },
  {
    name: 'Hack The News',
    link: 'https://scramblelock.github.io/hack-the-news/',
    description: 'React + Axios',
    src: hackthenews,
  },
  {
    name: 'Osheaga Trip Planner',
    link: 'https://osheaga-busbud-challenge.vercel.app/',
    description: 'React + Axios + i18next',
    src: osheaga,
  },
  {
    name: 'Toronto Waste Lookup',
    link: 'https://scramblelock.github.io/toronto-waste-lookup/',
    description: 'React',
    src: toronto,
  },
  {
    name: 'Huddle',
    link: 'https://scramblelock.github.io/coding_challenge_11/',
    description: 'HTML + CSS + Bootstrap',
    src: huddle,
  },
  {
    name: 'Cafe Zezin',
    link: 'https://cafezezin.ca',
    description: 'Wordpress + HTML + CSS',
    src: zezin,
  },
]

export const SKILLS = [
  {
    title: 'Front End',
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'NextJS',
      'Vite',
      'Redux',
      'Emotion',
      'Material UI',
    ],
  },
  {
    title: 'Back End',
    items: ['Node', 'Express', 'PostgreSQL', 'MongoDB', 'Deno'],
  },
  {
    title: 'Design',
    items: [
      'Photoshop',
      'Illustrator',
      'Premiere Pro/Final Cut Pro',
      'Figma',
      'Procreate',
    ],
  },
  {
    title: 'Other',
    items: [
      'Certified Salesforce B2C Commerce Developer',
      'Google Cloud',
      'AWS',
      'Jest',
      'Postman',
      'Google Analytics',
      'Wordpress',
    ],
  },
]

export const FOOTER = {
  name: `MARC SAKALAUSKAS © `,
}
