import React from 'react';

const Navbar = ({ setView }) => {
    return (
        <nav className="bg-blue-900 text-white-100 p-4 shadow-md fixed w-full top-0 z-10">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-2xl font-bold">Receipt Processor</a>
                <div>
                    <button
                        onClick={() => setView('home')}
                        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mr-2 font-semibold transition duration-300"
                    >
                        Home
                    </button>
                    <button
                        onClick={() => setView('getPoints')}
                        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded font-semibold transition duration-300"
                    >
                        Receipt Points
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
