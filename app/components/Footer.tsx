import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='flex justify-between bg_primary p-6'>
        <span className='mx-6'>Copyright 2023</span>
        <div className='flex mx-6 gap-3'>
        <span>Brogrammer</span>
            <img src='instagram.png'/>
        </div>
    </div>
  )
}
export default Footer