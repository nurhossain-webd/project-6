import React from 'react';

const StatBelt = () => {
    return (
        <div className="flex text-center text-white themeColor stats stats-vertical lg:stats-horizontal shadow rounded-none px-24 mb-10">
            <div className="stat">
                <div className="stat-value">50K+</div>
                <div className="stat-desc text-white">Active Users</div>
            </div>

            <div className="stat">
                <div className="stat-value">200+</div>
                <div className="stat-desc text-white">Premium Tools</div>
            </div>

            <div className="stat">
                <div className="stat-value">4.9</div>
                <div className="stat-desc text-white">Rating</div>
            </div>
        </div>
    );
};

export default StatBelt;