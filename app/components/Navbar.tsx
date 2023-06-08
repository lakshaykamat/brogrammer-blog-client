import Link from 'next/link';

const Navbar = () => {
    return (
        // <nav classNameName="bg-sky-600">
        //     <div classNameName="container mx-auto px-4">
        //         <div classNameName="flex items-center justify-between h-16">
        //             <div classNameName="flex items-center">
        //                 <Link href="/" classNameName="text-white font-bold text-xl">
        //                     BroGrammer
        //                 </Link>
        //             </div>
        //             <div classNameName="hidden md:flex md:mx-5 items-center md:space-x-4">
        //                 <Link href="/" classNameName="rounded-md text-gray-200 px-3 py-2 hover:bg-[#0D567A] font-bold">
        //                     Home            </Link>
        //                 <Link href="/about" classNameName="rounded-md text-gray-200 px-3 py-2 hover:bg-[#0D567A] font-bold">
        //                     About
        //                 </Link>
        //                 <Link href="/contact" classNameName="rounded-md text-gray-200 px-3 py-2 hover:bg-[#0D567A] font-bold">
        //                     Contact
        //                 </Link>

        //             </div>
        //             <div classNameName="md:hidden">
        //                 {/* Add your responsive menu button here */}
        //             </div>
        //         </div>
        //     </div>
        // </nav>
        <header className="body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Brogrammer</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/" className="mr-5 text-gray-500 hover:text-gray-700 dark:text-gray-200 hover:dark:text-gray-400">Home</Link>
      <Link href="/categories" className="mr-5 text-gray-500 hover:text-gray-700 dark:text-gray-200 hover:dark:text-gray-400">Categories</Link>
      <Link href="/team" className="mr-5 text-gray-500 hover:text-gray-700 dark:text-gray-200 hover:dark:text-gray-400">Team</Link>
      <Link href="about" className="mr-5 text-gray-500 hover:text-gray-700 dark:text-gray-200 hover:dark:text-gray-400">About</Link>
    </nav>
    {/* <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button> */}
  </div>
</header>
    );
};

export default Navbar;
