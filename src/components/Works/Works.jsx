import React, { useState } from 'react';
import { works } from '../../../assets/assets';

const Works = () => {
    const [selected, setSelected] = useState(null);

    return (
        <div className="px-[12%] my-30 scroll-mt-10" id="works">
            <h4 className='text-center sm:mb-2 text-lg font-ovo'>Highlights</h4>
            <h2 className='text-center sm:text-5xl text-4xl font-medium font-ovo'>My works</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:my-20 my-10">
                {works.map(project => (
                    <div key={project.id} className="bg-white shadow-md rounded-xl overflow-hidden p-4">
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-xl" />
                        <div className="p-2 space-y-1">
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <p className="text-gray-600 text-sm">{project.overview}</p>
                            <button
                                onClick={() => setSelected(project)}
                                className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                                View More
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selected && (
                <div className="fixed inset-0 backdrop-blur-sm bg-opacity-80 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-6 max-w-sm w-full relative">
                        <button
                            onClick={() => setSelected(null)}
                            className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-xl"
                        >
                            &times;
                        </button>
                        <h3 className="text-2xl font-bold mb-4">{selected.title}</h3>
                        <p className="mb-3"><strong>Challenge:</strong> {selected.challenge}</p>
                        <p className="mb-3"><strong>Future Implementations:</strong> {selected.future}</p>
                        <div className="flex flex-wrap gap-3 mt-4">
                            <a href={selected.live} target="_blank" rel="noreferrer" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Live</a>
                            <a href={selected.client} target="_blank" rel="noreferrer" className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800">Client</a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Works;
