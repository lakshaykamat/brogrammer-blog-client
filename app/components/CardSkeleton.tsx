import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

type Props = {}

const CardSkeleton = (props: Props) => {
  return (
    <div className='w-full h-full m-3'>
        <Skeleton className='h-64 mb-4'/>
        <Skeleton  className="h-12" count={1}/>
    </div>
  )
}
export default CardSkeleton