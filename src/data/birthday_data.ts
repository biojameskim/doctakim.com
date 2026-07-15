import { BirthdayCardType } from "../types/BlogTypes"
import {
  GraceLo20,
  GraceLi21,
  Derek20,
  Angy20,
} from "../blog_entries/blog_entries"

// Data for Birthdays
export const birthday_data: BirthdayCardType[] = [
  {
    title: "Grace Lo's 20th",
    date: '4/7/2023',
    route: '/birthdays/grace-lo-20th',
    component: GraceLo20
  },
  {
    title: "Grace Li's 21st",
    date: '4/12/2023',
    route: '/birthdays/grace-li-21st',
    component: GraceLi21
  },
  {
    title: "Derek's 20th",
    date: '6/2/2023',
    route: '/birthdays/derek-20th',
    component: Derek20
  },
  {
    title: "Angy's 20th",
    date: '6/5/2023',
    route: '/birthdays/angy-20th',
    component: Angy20
  },
]