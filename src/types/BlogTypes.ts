export type BlogCardType = {
  route: string,
  title: string,
  description: string,
  release: string,
  image: string,
  alt: string
}

export type BlogImageType = {
  src: string,
  alt: string,
  caption?: string,
  caption2?: string,
  orientation?: string,
  maxW?: string
}

export type BirthdayCardType = {
  title: string,
  date: string,
  route: string,
}