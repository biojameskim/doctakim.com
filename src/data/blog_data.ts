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
  HerFace,
} from "../blog_entries/blog_entries";

// Data for Stories in Blog
export const story_data: BlogCardType[] = [
  {
    route: '/blog/treasure-hunt',
    release: 'October 2022',
    title: 'Treasure Hunt',
    description: "I'm on a hunt.",
    image: "https://images.doctakim.com/blogs/stories/treasure-hunt/treasure-hunt-f266d57c4c.jpg",
    alt: "Dad and Me",
    pin: true,
    component: TreasureHunt
  },
  {
    route: '/blog/out-of-context',
    release: 'February 2026',
    title: 'Out of Context',
    description: "Just a little unexpected.",
    image: "https://images.doctakim.com/blogs/stories/out-of-context/cover-iobzb4-ef372ecb28.jpg",
    alt: 'Family Photo',
    pin: false,
    component: OutofContext
  },
  {
    route: '/blog/best-latte',
    release: 'April 2025',
    title: 'The Best Latte of My Life',
    description: "A warm sip.",
    image: "https://images.doctakim.com/blogs/stories/best-latte/latte-cover-692c7703f1.jpg",
    alt: 'A cup of latte',
    pin: false,
    component: BestLatte
  },
  {
    route: '/blog/wistful-memories',
    release: 'April 2024',
    title: 'Wistful Memories',
    description: "The memories that come and go.",
    image: "https://images.doctakim.com/blogs/stories/wistful-memories/wistful-memories-171e9dde14.jpg",
    alt: 'Family Photo',
    pin: false,
    component: WistfulMemories
  },
  {
    route: '/blog/sophomore-slump',
    release: 'May 2023',
    title: 'The Sophomore Slump',
    description: "Halfway done.",
    image: "https://images.doctakim.com/blogs/stories/sophomore-slump/ss-cover-130030750a.jpg",
    alt: 'Dum moment',
    pin: false,
    component: SophomoreSlump
  },
  {
    route: '/blog/my-sister',
    release: 'August 2022',
    title: 'My Sister',
    description: "I don't tell very many people about my sister.",
    image: "https://images.doctakim.com/blogs/stories/my-sister/my-sister-cover-d92f456090.jpg",
    alt: 'Me, my brother, and my sister',
    pin: false,
    component: MySister
  },
  {
    route: '/blog/growing-up',
    release: 'June 2022',
    title: 'Growing Up',
    description: "Youth is fleeting.",
    image: "https://images.doctakim.com/blogs/stories/growing-up/growing-up-bbeddacb11.jpg",
    alt: 'Baby James',
    pin: false,
    component: GrowingUp
  },
  {
    route: '/blog/my-freshman-college-story',
    release: 'May 2022',
    title: 'My Freshman College Story',
    description: "It's been a hell of a year.",
    image: "https://images.doctakim.com/blogs/stories/freshman-story/freshman-story-e0ebcbe7f7.jpg",
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
    image: "https://images.doctakim.com/blogs/thoughts/gods-love/dsc02651-nigimm-c1f66cb2e9.jpg",
    alt: 'Dad, bro, and me running',
    pin: true,
    component: GodsLove
  },
  {
    route: '/blog/why-cornell',
    release: 'December 2025',
    title: 'Why I chose Cornell',
    description: "Making decisions.",
    image: "https://images.doctakim.com/blogs/thoughts/why-cornell/cornell-cover-min-aruv2b-5c5778b24d.jpg",
    alt: 'Olin Library',
    pin: false,
    component: WhyCornell
  },
  {
    route: '/blog/prayer',
    release: 'June 2023',
    title: 'Prayer',
    description: "Sometimes, I just don't wanna pray.",
    image: "https://images.doctakim.com/blogs/thoughts/prayer/pray-cover-5a9c5ebb7e.jpg",
    alt: 'Brother and Me.',
    pin: false,
    component: Prayer
  },
  {
    route: '/blog/facetime',
    release: 'May 2023',
    title: 'FaceTime',
    description: "I hate facetime.",
    image: "https://images.doctakim.com/blogs/thoughts/facetime/ft-cover-3a0920ec8e.jpg",
    alt: 'Mrs.Lupsaiu and me',
    pin: false,
    component: FaceTime
  },
  {
    route: '/blog/dear-mrs-lupsaiu',
    release: 'December 2022',
    title: 'Dear Mrs. Lupsaiu',
    description: "I wish there was more time.",
    image: "https://images.doctakim.com/blogs/thoughts/dear-mrs-lupsaiu/me-and-lupsaiu-82cd99a82e.jpg",
    alt: 'Mrs.Lupsaiu and me',
    pin: false,
    component: MrsLupsaiu
  },
]

// Data for Fiction in Blog
export const fiction_data: BlogCardType[] = [
  {
    route: '/blog/her-face',
    release: 'June 2026',
    title: 'Her face',
    description: "",
    image: "https://images.doctakim.com/blogs/fiction/her-face/her-face-db55e5d16e.jpg",
    alt: '',
    pin: false,
    component: HerFace
  },
  {
    route: '/blog/chasing-the-sun',
    release: 'April 2026',
    title: 'Chasing the sun',
    description: "",
    image: "https://images.doctakim.com/blogs/fiction/chasing-the-sun/chasing-the-sun-88c234e013.jpg",
    alt: '',
    pin: false,
    component: ChasingTheSun
  },
  {
    route: '/blog/letter-to-former-lover',
    release: 'January 2026',
    title: 'A letter to a former lover',
    description: "",
    image: "https://images.doctakim.com/blogs/fiction/letter-to-former-lover/letter-to-former-lover-3061067e4f.jpg",
    alt: '',
    pin: false,
    component: LoveLetter
  },
]