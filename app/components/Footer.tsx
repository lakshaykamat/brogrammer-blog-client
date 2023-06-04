import Link from "next/link";
import { BsInstagram, BsDiscord, BsGithub, BsFacebook, BsTwitter } from "react-icons/bs";

type Props = {};

const Footer = (props: Props) => {
  return (

<footer className="bg-sky-600 text-slate-100 dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="" className="flex items-center">
                  {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="FlowBite Logo" /> */}
                  <span className="self-center text-2xl font-semibold whitespace-nowrap text-slate-100">Brogrammer</span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold uppercase text-slate-100">Our Apps</h2>
                  <ul className="text-slate-100 font-medium">
                      <li className="mb-4">
                          <a href="https://flowbite.com/" className="hover:underline">Quizes</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">Simon</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold uppercase text-slate-100">Follow us</h2>
                  <ul className="text-slate-100 font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold uppercase text-slate-100">Legal</h2>
                  <ul className="text-slate-100 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-slate-800 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Brogrammer</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <BsFacebook className="text-slate-700 hover:text-slate-900 dark:hover:text-white"/>
              <BsInstagram className="text-slate-700 hover:text-slate-900 dark:hover:text-white"/>
              <BsTwitter className="text-slate-700 hover:text-slate-900 dark:hover:text-white"/>
              <BsGithub className="text-slate-700 hover:text-slate-900 dark:hover:text-white"/>
          </div>
      </div>
    </div>
</footer>

  );
};
export default Footer;
