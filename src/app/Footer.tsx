"use client";

import Link from "next/link";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="bg-primary text-white">
            <div className="container mx-auto flex justify-center">
                <div className="flex flex-col md:flex-row md:justify-between py-4">
                    <div className="px-2">
                        <h2 className="text-2xl font-bold">G. Taschina</h2>
                        <div className="mt-2">
                            <h3 className="text-gray-300">P.IVA:</h3>
                            <p>02660850062</p>
                            <h3 className="text-gray-300">PEC:</h3>
                            <p>g.taschina@pec.it</p>
                            <h3 className="text-gray-300">Email:</h3>
                            <p>g.taschina@georgetaschina.com</p>
                            <h3 className="text-gray-300">Mobile:</h3>
                            <p>+39 327 392 0566</p>
                        </div>
                    </div>
                    <div className="px-2">
                        <h2 className="text-2xl font-bold">Projects</h2>
                        <div className="mt-2">
                            <Link href="/progetti/1">
                                <p className="hover:text-gray-300">Rivelo Platform</p>
                            </Link>
                            <Link href="/progetti/1">
                                <p className="hover:text-gray-300">Wifi Italia</p>
                            </Link>
                            <Link href="/progetti/1">
                                <p className="hover:text-gray-300">RedAbissi Platform</p>
                            </Link>
                            <Link href="/progetti/1">
                                <p className="hover:text-gray-300">Bikerface</p>
                            </Link>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    
                </div>
            </div>
        </div>
    );
};

export default Footer;