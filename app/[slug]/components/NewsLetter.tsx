'use client'
import { BsFacebook, BsTwitter, BsWhatsapp } from 'react-icons/bs'
import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton
} from "react-share";

type Props = {
    title: string,
    url: string,
    hastag: string
}

const NewsLetter = ({ title, url, hastag }: Props) => {
    return (
        <section className="py-8 xl:h-screen xl:fixed xl:right-10 xl:top-20">
            <div className="container px-4 mx-auto">
                <span className="block mb-3 text-2xl font-bold text-slate-600 dark:text-slate-200">Subscribe to Our Newsletter</span>
                <span className="block mb-6 text-sm text-slate-500 dark:text-slate-300">
                    Stay up to date with the latest articles, news, and updates from our blog.
                </span>
                <form className="flex flex-col md:flex-row">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 mb-2 text-base md:w-64 rounded-l-md md:mb-0 focus:outline-none"
                        required
                    />
                    <button
                        type="submit"
                        className="text-base bg-sky-500 dark:bg-[#0D567A] dark:hover:bg-[#0a4360] hover:bg-sky-600 text-white px-4 py-2 rounded-r-md  focus:outline-none focus:ring focus:border-red-300"
                    >
                        Subscribe
                    </button>
                </form>
                <div className='flex gap-3 mt-6'>
                    <span className='text-base'>Share On</span>
                    <WhatsappShareButton title={title} url={url}>
                        <BsWhatsapp className='w-6 h-6' />
                    </WhatsappShareButton>

                    <TwitterShareButton title={title} hashtags={["#gro"]} url={url}>
                        <BsTwitter className='w-6 h-6' />
                    </TwitterShareButton>

                    <FacebookShareButton quote={title} hashtag={hastag} url={url}>
                        <BsFacebook className='w-6 h-6' />
                    </FacebookShareButton>
                </div>
            </div>
        </section>
    )
}
export default NewsLetter