import React from 'react';

const Pricing = () => {
    return (
        <div className="w-11/12 lg:w-10/12 mx-auto my-10 ">
            <div className="my-6 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">Simple, Transparent Pricing</h2>
                <p className="text-xs sm:text-sm text-black/60">
                    Choose the plan that fits your needs. Upgrade or downgrade anytime.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

                <div className="card bg-base-100 shadow-sm border border-black/10 h-full">
                    <div className="card-body flex flex-col p-5">
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold">Starter</h2>
                            <p className="text-xs text-black/60 mt-1">Perfect for getting started</p>
                        </div>

                        <span className="text-2xl sm:text-3xl font-bold mt-3">
                            $0<span className="text-sm font-normal text-black/60">/Month</span>
                        </span>

                        <ul className="mt-4 flex flex-col gap-2 text-xs sm:text-sm flex-grow">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className='text-black/60'>Access to 10 free tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className='text-black/60'>Basic templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className='text-black/60'>Community support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className='text-black/60'>1 project per month</span>
                            </li>
                        </ul>

                        <div className="mt-4">
                            <button className="btn w-full rounded-full themeColor text-white border-0">
                                Get Started Free
                            </button>
                        </div>
                    </div>
                </div>

                <div className="card bg-gradient-to-br from-[#5B35F2] to-[#A020F0] text-white shadow-sm h-full relative overflow-visible">
                    <div className="card-body flex flex-col p-5">
                        <span className="badge badge-warning absolute -top-3 left-1/2 -translate-x-1/2 border-0">
                            Most Popular
                        </span>

                        <div className="mt-2">
                            <h2 className="text-2xl sm:text-3xl font-bold">Pro</h2>
                            <p className="text-xs sm:text-sm text-white/80 mt-1">Best for professionals</p>
                        </div>

                        <span className="text-2xl sm:text-3xl font-bold mt-3">
                            $29<span className="text-sm font-normal text-white/80">/Month</span>
                        </span>

                        <ul className="mt-4 flex flex-col gap-2 text-xs sm:text-sm flex-grow">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Access to all premium tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Unlimited templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Priority support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Unlimited projects</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Cloud sync</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Advanced analytics</span>
                            </li>
                        </ul>

                        <div className="mt-4">
                            <button className="btn w-full rounded-full border-0 bg-white text-[#5B35F2] hover:bg-white">
                                Start Pro Trial
                            </button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-sm border border-black/10 h-full">
                    <div className="card-body flex flex-col p-5">
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold">Enterprise</h2>
                            <p className="text-xs text-black/60 mt-1">For teams and businesses</p>
                        </div>

                        <span className="text-2xl sm:text-3xl font-bold mt-3">
                            $99<span className="text-sm font-normal text-black/60">/Month</span>
                        </span>

                        <ul className="mt-4 flex flex-col gap-2 text-xs sm:text-sm flex-grow">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className='text-black/60'>Everything in Pro</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className='text-black/60'>Team collaboration</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className='text-black/60'>Custom integrations</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className='text-black/60'>Dedicated support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className='text-black/60'>SLA guarantee</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className='text-black/60'>Custom branding</span>
                            </li>
                        </ul>

                        <div className="mt-4">
                            <button className="btn w-full rounded-full themeColor text-white border-0">
                                Contact Sales
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Pricing;