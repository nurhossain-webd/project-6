import React from 'react';

const GetStarted = () => {
    return (
        <div className="my-20 w-11/12 lg:w-10/12 mx-auto">
            <div className="text-center">
                <h2 className="text-2xl font-bold">Get Started In 3 Steps</h2>
                <p className="text-xs sm:text-sm text-black/60 mt-2">
                    Start using premium digital tools in minutes, not hours.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <div className="relative border border-black/10 shadow-sm rounded-2xl p-6">
                    <span className="absolute top-4 right-4 h-10 w-10 rounded-full themeColor text-white flex items-center justify-center text-sm font-bold">
                        01
                    </span>

                    <div className="flex flex-col items-center justify-center text-center pt-6">
                        <div className="h-24 w-24 rounded-full bg-purple-200 flex items-center justify-center mb-4">
                            <img className="h-12 w-12 object-contain" src="/user.png" alt="Create Account" />
                        </div>
                        <h4 className="text-lg font-bold">Create Account</h4>
                        <p className="text-xs sm:text-sm text-black/60 mt-2">
                            Sign up for free in seconds. No credit card required to get started.
                        </p>
                    </div>
                </div>

                <div className="relative border border-black/10 shadow-sm rounded-2xl p-6">
                    <span className="absolute top-4 right-4 h-10 w-10 rounded-full themeColor text-white flex items-center justify-center text-sm font-bold">
                        02
                    </span>

                    <div className="flex flex-col items-center justify-center text-center pt-6">
                        <div className="h-24 w-24 rounded-full bg-purple-200 flex items-center justify-center mb-4">
                            <img className="h-12 w-12 object-contain" src="/package.png" alt="Choose Products" />
                        </div>
                        <h4 className="text-lg font-bold">Choose Your Tool</h4>
                        <p className="text-xs sm:text-sm text-black/60 mt-2">
                            Browse our catalog and select the tools that fit your needs.
                        </p>
                    </div>
                </div>

                <div className="relative border border-black/10 shadow-sm rounded-2xl p-6">
                    <span className="absolute top-4 right-4 h-10 w-10 rounded-full themeColor text-white flex items-center justify-center text-sm font-bold">
                        03
                    </span>

                    <div className="flex flex-col items-center justify-center text-center pt-6">
                        <div className="h-24 w-24 rounded-full bg-purple-200 flex items-center justify-center mb-4">
                            <img className="h-12 w-12 object-contain" src="/rocket.png" alt="Start Creating" />
                        </div>
                        <h4 className="text-lg font-bold">Start Using Instantly</h4>
                        <p className="text-xs sm:text-sm text-black/60 mt-2">
                            Download and start using your premium tools immediately.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;