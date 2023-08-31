"use client"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

type Props = {}

export const CategorySkeleton = (props: Props) => {
    return (

        <div className=''>
            <Skeleton className='h-64 mb-4' />
            <Skeleton className="h-12" count={1} />
        </div>
    )
}
export const CategoryParent = (props: Props) => {
    return (
        <div className='mx-20'>
            <Skeleton className='h-12 mb-5' />
            <div className='grid grid-cols-1 gap-6 justify-self-stretch sm:grid-rows-2 xl:grid-cols-3'>
                <Skeleton className='h-64' />
                <Skeleton className='h-64' />
                <Skeleton className='h-64' />
            </div>
        </div>
    )
}
export default CategorySkeleton