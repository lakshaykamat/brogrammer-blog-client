import { getSortedPostsData } from "@/lib/posts"
import ListItem from "./ListItem"

type Props = {}

const Post = (props: Props) => {
    const posts = getSortedPostsData()
  return (
    <>
        <ul className="mt-6">
            {
                posts.map((post) =>{
                    return <ListItem key={post.id} post={post}/>
                })
            }
        </ul>
    </>
  )
}
export default Post