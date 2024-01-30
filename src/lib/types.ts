export type Log = {
  title: string
  subtitle: string
  time: string
  date: string
  published: boolean
  slug: string
}

export type ProjectLink = {
  title: string
  href: string
} 

export type Project = {
  title: string
  desc: string
  date: string
  link: string
  links: Array<ProjectLink>
  techs: Array<String>
}

export type Link = {
  href: string
  src: string
  alt: string
}