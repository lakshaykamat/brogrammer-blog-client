export type BlogPost = Array<{
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
}>

export type Categories = Array<string>
export type Team = {
  data: Array<{
    id: number
    attributes: {
      name: string
      bio: string
      instagram: string
      github: string
      createdAt: string
      updatedAt: string
      publishedAt: string
      locale: string
      pfp: string
      designation: string
    }
  }>
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}
