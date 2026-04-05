import React from "react";

export type BlogCardType = {
  route: string,
  title: string,
  description: string,
  release: string,
  image: string,
  alt: string,
  pin: boolean,
  component: React.ElementType
}

export type BlogImageType = {
  src: string | object,
  alt: string,
  caption?: string,
  caption2?: string,
  orientation?: string,
  maxW?: string | object,
  borderRadius?: string,
  captionFontFamily?: string,
  italic?: boolean
  pt?: string,
  pb?: string
}

export type BirthdayCardType = {
  title: string,
  date: string,
  route: string,
}