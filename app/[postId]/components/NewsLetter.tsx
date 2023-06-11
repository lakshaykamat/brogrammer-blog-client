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
        <section className="py-8">
            <div className="container mx-auto px-4">
                <span className="block text-2xl text-slate-600 dark:text-slate-200 font-bold mb-3">Subscribe to Our Newsletter</span>
                <span className="block text-sm text-slate-500 dark:text-slate-300 mb-6">
                    Stay up to date with the latest articles, news, and updates from our blog.
                </span>
                <form className="flex flex-col md:flex-row">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full text-base md:w-64 py-2 px-4 rounded-l-md mb-2 md:mb-0 focus:outline-none"
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