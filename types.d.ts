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
        category: string
        locale: string
        coverImageURL: string
        coverImage: {
          data: {
            id: number
            attributes: {
              name: string
              alternativeText: any
              caption: any
              width: number
              height: number
              formats: {
                small?: {
                  ext: string
                  url: string
                  hash: string
                  mime: string
                  name: string
                  path: any
                  size: number
                  width: number
                  height: number
                }
                medium?: {
                  ext: string
                  url: string
                  hash: string
                  mime: string
                  name: string
                  path: any
                  size: number
                  width: number
                  height: number
                }
                thumbnail: {
                  ext: string
                  url: string
                  hash: string
                  mime: string
                  name: string
                  path: any
                  size: number
                  width: number
                  height: number
                }
                large?: {
                  ext: string
                  url: string
                  hash: string
                  mime: string
                  name: string
                  path: any
                  size: number
                  width: number
                  height: number
                }
              }
              hash: string
              ext: string
              mime: string
              size: number
              url: string
              previewUrl: any
              provider: string
              provider_metadata: any
              createdAt: string
              updatedAt: string
            }
          }
        }
        authorImage: {
          data: {
            id: number
            attributes: {
              name: string
              alternativeText: string
              caption: string
              width: number
              height: number
              formats: {
                small: {
                  ext: string
                  url: string
                  hash: string
                  mime: string
                  name: string
                  path: any
                  size: number
                  width: number
                  height: number
                }
                thumbnail: {
                  ext: string
                  url: string
                  hash: string
                  mime: string
                  name: string
                  path: any
                  size: number
                  width: number
                  height: number
                }
              }
              hash: string
              ext: string
              mime: string
              size: number
              url: string
              previewUrl: any
              provider: string
              provider_metadata: any
              createdAt: string
              updatedAt: string
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
  