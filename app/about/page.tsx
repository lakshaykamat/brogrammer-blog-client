"use client"
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";


const AboutPage: React.FC = () => {
  return (
    <div className="px-6 py-8 mx-auto lg:mx-12 sm:min-h-screen">
      <h1 className="mb-4 text-3xl font-bold">About Us</h1>

      <div className="mb-8">
        <h2 className="mb-2 text-xl font-semibold">Our Future Goals</h2>
        <p>
          We are dedicated to providing valuable and engaging content to our readers. Our future goals include:
        </p>
        <ul className="list-disc list-inside">
          <li>Expand our reach and attract a larger audience</li>
          <li>Increase engagement and interaction with our readers</li>
          <li>Collaborate with other bloggers and influencers</li>
          <li>Improve the design and user experience of our blog</li>
          <li>Monetize our blog through various channels</li>
        </ul>
      </div>

      <div>
        <h2 className="mb-2 text-xl font-semibold">Follow Us on Social Media</h2>
        <p>
          Connect with us on our social media platforms to stay updated with the latest news, articles, and more:
        </p>
        <ul className="flex flex-wrap gap-3 mt-2 space-x-4 sm:justify-start">
          <li>
            <BsFacebook className="w-9 h-9"/>
          </li>
          <li>
            <BsTwitter className="w-9 h-9"/>
          </li>
          <li>
            <BsInstagram className="w-9 h-9"/>
          </li>
          <li>
            <BsLinkedin className="w-9 h-9"/>
          </li>
          <li>
            <BsYoutube className="w-9 h-9"/>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
