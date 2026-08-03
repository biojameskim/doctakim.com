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
  captionLink?: string,
  caption2?: string,
  orientation?: string,
  maxW?: string | object,
  borderRadius?: string,
  captionFontFamily?: string,
  italic?: boolean
  pt?: string,
  pb?: string,
  loading?: "eager" | "lazy",
  decoding?: "async" | "auto" | "sync",
  // Responsive WebP delivery. All optional: blog entries and unmigrated gallery
  // photos pass none of these and render exactly as before.
  webpSrcSet?: string,
  fallbackSrc?: string,
  intrinsicWidth?: number,
  intrinsicHeight?: number
}

export type BirthdayCardType = {
  title: string,
  date: string,
  route: string,
  component: React.ElementType
}
