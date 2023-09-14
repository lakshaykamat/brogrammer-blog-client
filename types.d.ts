// export type BlogPost = {
//   _id: string
//   title: string
//   image: string
//   description: string
//   body: string
//   publishedAt: string
//   slug: string
//   category: string
//   author: string,
//   createdAt: string
//   updatedAt: string
//   __v: number
// }
export type BlogPost = {
  data: Array<{
    id: number
    attributes: {
      title: string
      image: string
      description: string
      body: string
      author: string
      publish: string
      slug: string
      createdAt: string
      updatedAt: string
      publishedAt: string
      locale: string
      category: {
        data: {
          id: number
          attributes: {
            name: string
            createdAt: string
            updatedAt: string
            publishedAt: string
          }
        }
      }
      localizations: {
        data: Array<any>
      }
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

export type Categories = {
  data: Array<{
    id: number
    attributes: {
      name: string
      createdAt: string
      updatedAt: string
      publishedAt: string
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
