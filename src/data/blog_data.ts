import { BlogCardType } from "../types/BlogTypes"
import {
  FreshmanStory,
  GrowingUp,
  MySister,
  TreasureHunt,
  SophomoreSlump,
  WistfulMemories,
  BestLatte,
  OutofContext,
  MrsLupsaiu,
  FaceTime,
  Prayer,
  WhyCornell,
  GodsLove,
  LoveLetter,
  ChasingTheSun,
} from "../blog_entries/blog_entries";

// Data for Stories in Blog
export const story_data: BlogCardType[] = [
  {
    route: '/blog/treasure-hunt',
    release: 'October 2022',
    title: 'Treasure Hunt',
    description: "I'm on a hunt.",
    image: "/images/blog_pictures/Treasure-Hunt/treasure-hunt.jpeg",
    alt: "Dad and Me",
    pin: true,
    component: TreasureHunt
  },
  {
    route: '/blog/out-of-context',
    release: 'February 2026',
    title: 'Out of Context',
    description: "Just a little unexpected.",
    image: "https://res.cloudinary.com/doypjterz/image/upload/v1771476193/cover_iobzb4.jpg",
    alt: 'Family Photo',
    pin: false,
    component: OutofContext
  },
  {
    route: '/blog/best-latte',
    release: 'April 2025',
    title: 'The Best Latte of My Life',
    description: "A warm sip.",
    image: "/images/blog_pictures/Best-Latte/latte_cover.jpg",
    alt: 'A cup of latte',
    pin: false,
    component: BestLatte
  },
  {
    route: '/blog/wistful-memories',
    release: 'April 2024',
    title: 'Wistful Memories',
    description: "The memories that come and go.",
    image: "/images/blog_pictures/Wistful-Memories/wistful-memories.jpeg",
    alt: 'Family Photo',
    pin: false,
    component: WistfulMemories
  },
  {
    route: '/blog/sophomore-slump',
    release: 'May 2023',
    title: 'The Sophomore Slump',
    description: "Halfway done.",
    image: "/images/blog_pictures/The-Sophomore-Slump/ss_cover.jpeg",
    alt: 'Dum moment',
    pin: false,
    component: SophomoreSlump
  },
  {
    route: '/blog/my-sister',
    release: 'August 2022',
    title: 'My Sister',
    description: "I don't tell very many people about my sister.",
    image: "/images/blog_pictures/My-Sister/my_sister_cover.jpg",
    alt: 'Me, my brother, and my sister',
    pin: false,
    component: MySister
  },
  {
    route: '/blog/growing-up',
    release: 'June 2022',
    title: 'Growing Up',
    description: "Youth is fleeting.",
    image: "/images/blog_pictures/Growing-Up/growing-up.jpeg",
    alt: 'Baby James',
    pin: false,
    component: GrowingUp
  },
  {
    route: '/blog/my-freshman-college-story',
    release: 'May 2022',
    title: 'My Freshman College Story',
    description: "It's been a hell of a year.",
    image: "/images/blog_pictures/My-Freshman-College-Story/freshman-story.jpeg",
    alt: 'Dum moment',
    pin: false,
    component: FreshmanStory
  }
]

// Data for Thoughts in Blog
export const thoughts_data: BlogCardType[] = [
  {
    route: '/blog/gods-love',
    release: 'April 2026',
    title: "Thoughts about God's Love",
    description: "Shadows.",
    image: "https://res.cloudinary.com/doypjterz/image/upload/v1774994859/DSC02651_nigimm.jpg",
    alt: 'Dad, bro, and me running',
    pin: true,
    component: GodsLove
  },
  {
    route: '/blog/why-cornell',
    release: 'December 2025',
    title: 'Why I chose Cornell',
    description: "Making decisions.",
    image: "https://res.cloudinary.com/doypjterz/image/upload/v1767230153/cornell-cover-min_aruv2b.jpg",
    alt: 'Olin Library',
    pin: false,
    component: WhyCornell
  },
  {
    route: '/blog/prayer',
    release: 'June 2023',
    title: 'Prayer',
    description: "Sometimes, I just don't wanna pray.",
    image: "/images/blog_pictures/Prayer/pray_cover.jpeg",
    alt: 'Brother and Me.',
    pin: false,
    component: Prayer
  },
  {
    route: '/blog/facetime',
    release: 'May 2023',
    title: 'FaceTime',
    description: "I hate facetime.",
    image: "/images/blog_pictures/FaceTime/ft_cover.jpg",
    alt: 'Mrs.Lupsaiu and me',
    pin: false,
    component: FaceTime
  },
  {
    route: '/blog/dear-mrs-lupsaiu',
    release: 'December 2022',
    title: 'Dear Mrs. Lupsaiu',
    description: "I wish there was more time.",
    image: "/images/blog_pictures/Dear-Mrs-Lupsaiu/me and lupsaiu.jpg",
    alt: 'Mrs.Lupsaiu and me',
    pin: false,
    component: MrsLupsaiu
  },
]

// Data for Fiction in Blog
export const fiction_data: BlogCardType[] = [
  {
    route: '/blog/chasing-the-sun',
    release: 'April 2026',
    title: 'Chasing the sun',
    description: "",
    image: "https://res.cloudinary.com/doypjterz/image/upload/v1776139067/chasing-the-sun_agoobm.png",
    alt: '',
    pin: false,
    component: ChasingTheSun
  },
  {
    route: '/blog/letter-to-former-lover',
    release: 'January 2026',
    title: 'A letter to a former lover',
    description: "",
    image: "https://res.cloudinary.com/doypjterz/image/upload/v1775339771/gemini_1_lp9oi2.png",
    alt: '',
    pin: false,
    component: LoveLetter
  },
]