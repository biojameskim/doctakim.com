export type BlogCardType = {
  route: string,
  title: string,
  description: string,
  release: string,
  image: string,
  alt: string,
  pin: boolean
}

export type BlogImageType = {
  src: string,
  alt: string,
  caption?: string,
  caption2?: string,
  orientation?: string,
  maxW?: string,
  borderRadius?: string,
  captionFontFamily?: string,
  italic?: boolean
}

export type BirthdayCardType = {
  title: string,
  date: string,
  route: string,
}