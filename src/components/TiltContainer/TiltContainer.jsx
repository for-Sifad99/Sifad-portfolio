import React from 'react';
import Tilt from 'react-parallax-tilt';

const TiltContainer = ({
    children,
    angleX = 20,
    angleY = 20,
    prs = 1000,
    transSpd = 1000
}) => {
    return (
        <Tilt
            tiltMaxAngleX={angleX}
            tiltMaxAngleY={angleY}
            perspective={prs}
            transitionSpeed={transSpd}
            gyroscope={true}
        >
            {children}
        </Tilt>
    );
};

export default TiltContainer;
