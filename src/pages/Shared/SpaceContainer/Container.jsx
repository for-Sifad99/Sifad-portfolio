import React from 'react';

const Container = ({children, id=' ', bg=' '}) => {
    return (
        <section id={id} className={`bg-${bg} md:pb-26 sm:pb-22 pb-18 px-[10%] sm:px-0 scroll-mt-10`}>
            {children}
        </section>
    );
};

export default Container;