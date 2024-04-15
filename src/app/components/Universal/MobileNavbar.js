import { useState } from 'react';
import Link from 'next/link';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed top-0 z-10 bg-gray-800 w-11/12 text-white md:hidden">
            <div className="flex justify-between items-center p-4">
                <Link href="/">
                    Your Logo
                </Link>
                <div className="md:hidden">
                    {isOpen ? (
                        <RiCloseLine className="text-2xl" onClick={toggleNavbar} />
                    ) : (
                        <RiMenu3Line className="text-2xl" onClick={toggleNavbar} />
                    )}
                </div>
            </div>
            <div
                className={`md:flex md:items-center md:w-auto w-full ${isOpen ? '' : 'hidden'
                    }`}
            >
                <div className="flex flex-col md:flex-row md:mx-6">
                    <Link href="/about">
                        About
                    </Link>
                    <Link href="/services">
                        Services
                    </Link>
                    <Link href="/contact">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default MobileNavbar;
