import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-sky-600">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-white font-bold text-xl">
                            BroGrammer
                        </Link>
                    </div>
                    <div className="hidden md:flex md:mx-5 items-center md:space-x-4">
                        <Link href="/" className="rounded-md text-gray-200 px-3 py-2 hover:text-gray-800 hover:bg-slate-100 font-bold">
                            Home            </Link>
                        <Link href="/about" className="rounded-md text-gray-200 px-3 py-2 hover:text-gray-800 hover:bg-slate-100 font-bold">
                            About
                        </Link>
                        <Link href="/contact" className="rounded-md text-gray-200 px-3 py-2 hover:text-gray-800 hover:bg-slate-100 font-bold">
                            Contact
                        </Link>

                    </div>
                    <div className="md:hidden">
                        {/* Add your responsive menu button here */}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
