import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-700">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-white font-bold text-xl">
                            BroGrammer
                        </Link>
                    </div>
                    <div className="hidden md:flex md:mx-5 items-center md:space-x-4">
                        <Link href="/" className="rounded-md text-gray-300 px-3 py-2 hover:text-white hover:bg-gray-700">
                            Home            </Link>
                        <Link href="/about" className="rounded-md text-gray-300 px-3 py-2 hover:text-white hover:bg-gray-700">
                            About
                        </Link>
                        <Link href="/contact" className="rounded-md text-gray-300 px-3 py-2 hover:text-white hover:bg-gray-700">
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
