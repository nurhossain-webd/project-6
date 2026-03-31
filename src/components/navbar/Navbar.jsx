import React from 'react';

const Navbar = ({ carts }) => {
    return (
        <div className="sticky top-0 z-50 bg-base-100 shadow-sm">
            <div className="mx-auto w-11/12 lg:w-10/12">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </div>

                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[60] mt-3 w-52 p-2 shadow"
                            >
                                <li><a>Products</a></li>
                                <li><a>Features</a></li>
                                <li><a>Pricing</a></li>
                                <li><a>Testimonials</a></li>
                                <li><a>FAQ</a></li>

                                <li className="menu-title mt-2">
                                    <span>Account</span>
                                </li>
                                <li className="sm:hidden"><a>Login</a></li>
                                <li className="md:hidden"><a className="themeText font-semibold">Get Started</a></li>
                            </ul>
                        </div>

                        <a className="btn btn-ghost text-lg sm:text-xl lg:text-2xl themeText font-bold px-1 sm:px-2">
                            DigiTools
                        </a>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-xs xl:text-sm">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>

                    <div className="navbar-end gap-2">
                        <div className="flex items-center gap-2">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle btn-sm sm:btn-md">
                                    <div className="indicator">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                        </svg>
                                        <span className="badge badge-xs indicator-item bg-red-400">
                                            {carts.length}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <button className="btn btn-ghost text-xs hidden sm:inline-flex">
                                Login
                            </button>

                            <button className="btn text-xs themeColor text-white rounded-full hidden md:inline-flex">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;