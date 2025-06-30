import React from 'react';

const GlowingBorderCard = ({ children }) => {
    return (
        <div className="glow-border relative transition-all duration-500">
            {children}
        </div>
    );
};

export default GlowingBorderCard;
