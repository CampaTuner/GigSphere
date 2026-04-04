import React from 'react';
import { icons } from '../../utils/constants';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-[#0A0A0A] border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img src={icons.logoYellow} alt="" className='w-10' />
                    <div className="text-white font-semibold text-2xl tracking-tight">
                        Gig Sphere
                    </div>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link to="/" className="text-blue-400 font-medium border-b-2 border-blue-400 pb-1">Market</Link>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">Watchlist</a>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">Portfolio</a>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">Learn</a>
                </nav>

                {/* Right Side */}
                <div className="flex items-center gap-4">

                    <div className="flex items-center gap-1 text-gray-300 hover:text-white cursor-pointer transition-colors">
                        <span>USD</span>
                        <img
                            src={icons.arrowDown}
                            alt="Currency dropdown"
                            className="w-3 h-3"
                        />
                    </div>

                    <Link to="/sign-in">
                        <button className="text-white px-6 py-2 hover:bg-gray-800 rounded-lg transition-colors font-medium">
                            Sign in
                        </button>
                    </Link>

                    <Link to="/sign-up">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                            Sign up
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;