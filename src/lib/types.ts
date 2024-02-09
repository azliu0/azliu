export type Log = {
  title: string
  subtitle: string
  time: string
  date: string
  published: boolean
  slug: string
}

type InfoLink = {
  title: string
  href: string
} 

export type Project = {
  title: string
  desc: string
  date: string
  link: string
  links: Array<InfoLink>
  techs: Array<string>
}

export type Link = {
  href: string
  src: string
  alt: string
}

export type Course = {
  number: string
  title: string
  links: Array<InfoLink>
  current?: boolean
  grad?: boolean
}