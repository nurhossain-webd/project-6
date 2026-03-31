import React from 'react';

const StatBelt = () => {
    return (
        <div className=" mb-10">
            <div className="text-center text-white themeColor stats stats-vertical sm:stats-horizontal shadow rounded-none w-full px-4 sm:px-8 lg:px-24">
                <div className="stat">
                    <div className="stat-value text-3xl sm:text-4xl">50K+</div>
                    <div className="stat-desc text-white">Active Users</div>
                </div>

                <div className="stat">
                    <div className="stat-value text-3xl sm:text-4xl">200+</div>
                    <div className="stat-desc text-white">Premium Tools</div>
                </div>

                <div className="stat">
                    <div className="stat-value text-3xl sm:text-4xl">4.9</div>
                    <div className="stat-desc text-white">Rating</div>
                </div>
            </div>
        </div>
    );
};

export default StatBelt;