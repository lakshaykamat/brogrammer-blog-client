export type BlogPost = {
  _id: string
  title: string
  image: string
  description: string
  body: string
  publishedAt: string
  slug: string
  category: string
  author: string,
  createdAt: string
  updatedAt: string
  __v: number
}

export type Team = Array<{
  _id: string
  name: string
  email: string
  designation: string
  bio: string
  image: string
  password: string
  date: string
  __v: number
}>

export type Categories = Array<string>
