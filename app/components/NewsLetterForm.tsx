'use client'
import { useState } from 'react';

const NewsletterForm: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission, e.g., send the email to your newsletter service
        console.log(email);
        setEmail('');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    return (
        <div className="bg-[#0D567A] p-8 py-14 flex flex-col xl:flex-row justify-around items-center">
            <div>
                <h2 className="text-3xl font-bold mb-4 text-slate-200">Get our best content in your inbox</h2>
                <p className="text-slate-300 mb-4 text-sm">
                All the tips, stories, and resources you could ever need or want — straight to your email!
                </p>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col  md:w-2/3 xl:w-[40%]'>
                <div className='flex flex-row mb-6'>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleChange}
                        className="px-4 py-2  rounded-l-md focus:outline-none focus:ring focus:border-[#41A0D0] w-full"
                    />
                    <button
                        type="submit"
                        className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-r-md  focus:outline-none focus:ring focus:border-red-300"
                    >
                        Subscribe
                    </button>
                </div>

                <div className='text-slate-100 mb-3'>
                    <input type="checkbox" className='mr-3' />
                    <label>I agree to receive content from Brogrammer</label>
                </div>
                <p className='text-sm text-slate-300'>Your privacy matters! Help Scout only uses this info to send content and updates. You may unsubscribe anytime. View our privacy policy for more.</p>
                
            </form>
        </div>
    );
};

export default NewsletterForm;
