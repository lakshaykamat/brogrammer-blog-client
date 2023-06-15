import Image from "next/image"
import { getHeightAndWidth } from '@/utils/getHeightAndWidth'
import Link from 'next/link'
import { BsGithub, BsInstagram } from 'react-icons/bs'
type TeamProps = {
    name: string,
    bio: string,
    designation: string,
    pfp: string,
    github: string,
    instagram: string
  }
const ProfileCard = async ({ name, bio, designation, pfp, github, instagram }: TeamProps) => {
    const size = await getHeightAndWidth(pfp)
    return (
      <div className="p-4">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <Image
            src={pfp}
            width={size.width}
            height={size.height}
            alt='team pic'
            className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-slate-700 dark:text-slate-200">{name}</h2>
            <h3 className="mb-3 text-slate-400">{designation}</h3>
            <p className=" text-slate-500 mb-4">{bio}</p>
            <span className='inline-flex gap-3'>
              <Link href={`https://www.instagram.com/${instagram}/`} target='_blank' className='text-gray-500'>
                <BsInstagram className="w-6 h-6 text-gray-400 hover:text-gray-600 hover:dark:text-gray-200" />
              </Link>
              <Link href={`https://www.github.com/${github}/`} target='_blank'><BsGithub className="w-6 h-6 text-gray-400 hover:text-gray-600 hover:dark:text-gray-200" /></Link>
            </span>
  
          </div>
        </div>
      </div>
    )
  }
  export default ProfileCard