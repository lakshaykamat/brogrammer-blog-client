import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

type Props = {}

const TeamSkeleton = (props: Props) => {
  return (
    <div className='flex gap-6 items-center'>
      <Skeleton  className='h-44 mx-20'/>
      <div>
      <Skeleton  className='h-7 mb-5 w-full  mx-20'/>
      <Skeleton  className='h-4 mb-2 w-full  mx-20'/>
      <Skeleton  className='h-4 mb-2 w-full  mx-20'/>
      </div>
    </div>
  )
}
export default TeamSkeleton