import React from 'react';
import { FaYoutube, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-[#07132B] text-white border-t-2 border-[#2F6BFF]">
            <div className="w-10/12 mx-auto pt-16 pb-8">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-y-10 md:gap-x-4 lg:gap-x-4">

                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-bold mb-4">DigiTools</h2>
                        <p className="text-sm text-white/80 leading-7 max-w-xs">
                            Premium digital tools for creators,
                            professionals, and businesses. Work smarter
                            with our suite of powerful tools.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Product</h3>
                        <ul className="space-y-3 text-sm text-white/80">
                            <li><a className="hover:text-white transition">Features</a></li>
                            <li><a className="hover:text-white transition">Pricing</a></li>
                            <li><a className="hover:text-white transition">Templates</a></li>
                            <li><a className="hover:text-white transition">Integrations</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Company</h3>
                        <ul className="space-y-3 text-sm text-white/80">
                            <li><a className="hover:text-white transition">About</a></li>
                            <li><a className="hover:text-white transition">Blog</a></li>
                            <li><a className="hover:text-white transition">Careers</a></li>
                            <li><a className="hover:text-white transition">Press</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Resources</h3>
                        <ul className="space-y-3 text-sm text-white/80">
                            <li><a className="hover:text-white transition">Documentation</a></li>
                            <li><a className="hover:text-white transition">Help Center</a></li>
                            <li><a className="hover:text-white transition">Community</a></li>
                            <li><a className="hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Social Links</h3>
                        <div className="flex items-center gap-4">
                            <a className="h-10 w-10 rounded-full bg-white text-[#07132B] flex items-center justify-center hover:scale-105 transition">
                                <FaYoutube size={16} />
                            </a>
                            <a className="h-10 w-10 rounded-full bg-white text-[#07132B] flex items-center justify-center hover:scale-105 transition">
                                <FaFacebookF size={16} />
                            </a>
                            <a className="h-10 w-10 rounded-full bg-white text-[#07132B] flex items-center justify-center hover:scale-105 transition">
                                <FaXTwitter size={16} />
                            </a>
                        </div>
                    </div>
                </div>

                <hr className="border-t border-white/10 my-10" />

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
                    <p>© 2026 Digitools. All rights reserved.</p>

                    <div className="flex items-center gap-6">
                        <a className="hover:text-white transition">Privacy Policy</a>
                        <a className="hover:text-white transition">Terms of Service</a>
                        <a className="hover:text-white transition">Cookies</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;