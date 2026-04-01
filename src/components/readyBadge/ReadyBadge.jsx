import React from 'react';

const ReadyBadge = () => {
    return (
        <div className="w-full bg-gradient-to-r from-[#5B35F2] to-[#A020F0] text-white text-center py-16 px-6 sm:px-10 lg:px-20">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                    Ready To Transform Your Workflow?
                </h2>

                <p className="text-xs sm:text-sm mb-8 leading-relaxed max-w-2xl mx-auto">
                    Join thousands of professionals who are already using Digitools to work smarter.
                    <br className="hidden sm:block" />
                    Start your free trial today.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                    <button className="bg-white text-[#5B35F2] font-semibold rounded-full px-6 py-3">
                        Explore Products
                    </button>

                    <button className="border border-white text-white rounded-full px-6 py-3">
                        View Pricing
                    </button>
                </div>

                <p className="text-xs sm:text-sm text-white/90">
                    14-day free trial • No credit card required • Cancel anytime
                </p>
            </div>
        </div>
    );
};

export default ReadyBadge;