import React from 'react';
import { icons } from '../../utils/constants';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="bg-[#0A0A0A] border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img   src={icons.logoYellow} alt="" className='w-10 cursor-pointer' />
                    <div className="text-white font-semibold text-2xl cursor-pointer tracking-tight">
                        Gig Sphere
                    </div>
                </div>

                

<nav className="hidden md:flex items-center gap-8">
  
  <NavLink 
    to="/" 
    className={({ isActive }) =>
      isActive
        ? "text-blue-500 font-medium pb-1"
        : "text-gray-300 font-medium pb-1 hover:text-blue-500"
    }
  >
    Market
  </NavLink>

  <NavLink 
    to="/watchlist" 
    className={({ isActive }) =>
      isActive
        ? "text-blue-500"
        : "text-gray-300 hover:text-blue-500"
    }
  >
    Watchlist
  </NavLink>

  <NavLink 
    to="/portfolio" 
    className={({ isActive }) =>
      isActive
        ? "text-blue-500"
        : "text-gray-300 hover:text-blue-500"
    }
  >
    Portfolio
  </NavLink>

  <NavLink 
    to="/learn" 
    className={({ isActive }) =>
      isActive
        ? "text-blue-500"
        : "text-gray-300 hover:text-blue-500"
    }
  >
    Learn
  </NavLink>

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
                        <button className="text-white px-6 py-2 hover:bg-blue-700 rounded-lg transition-colors font-medium">
                            Sign in
                        </button>
                    </Link>

                    <Link to="/sign-up">
                        <button className=" hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                            Sign up
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;