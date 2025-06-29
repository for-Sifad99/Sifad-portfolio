import React from 'react';

const GlowingBorderCard = ({ children }) => {
    return (
        <div className="group glow-border rounded-xl relative hover:-translate-y-4 transition-all duration-500">
            {children}
        </div>
    );
};

export default GlowingBorderCard;
