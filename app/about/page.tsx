import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";


const AboutPage: React.FC = () => {
  return (
    <div className="mx-auto lg:mx-12 sm:min-h-screen px-6 py-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Our Future Goals</h2>
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
        <h2 className="text-xl font-semibold mb-2">Follow Us on Social Media</h2>
        <p>
          Connect with us on our social media platforms to stay updated with the latest news, articles, and more:
        </p>
        <ul className="flex flex-wrap sm:justify-start space-x-4 gap-3 mt-2">
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
