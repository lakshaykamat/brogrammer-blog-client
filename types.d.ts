export type BlogPost = {
  data: Array<{
    id: number
    attributes: {
      title: string
      createdAt: string
      updatedAt: string
      publishedAt: string
      content: string
      description?: string
      slug: string
      author: string
      creation: string
      locale: string
      coverImageURL: string
      authorImageURL: string
      categoryF: string
      category: {
        data: {
          id: number
          attributes: {
            createdAt: string
            updatedAt: string
            publishedAt: string
            name: string
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

export type Categories = {
  data: Array<{
    id: number
    attributes: {
      createdAt: string
      updatedAt: string
      publishedAt: string
      name: string
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
