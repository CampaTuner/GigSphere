import React from 'react';
import { icons } from '../../utils/constants';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { Lock } from 'lucide-react';

function Header() {

  let urls = [
    { name: 'Market', path: '/' },
    { name: 'Watchlist', path: '/watchlist' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'News', path: '/news' },
    { name: 'premium', path: '/premium', icons: <Lock  size={16}/>, color: 'text-[#F7931A]' },
  ]

  return (
    <header className="bg-[#0A0A0A] border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={icons.logoYellow} alt="" className='w-10 cursor-pointer' />
          <div className="text-white font-semibold text-2xl cursor-pointer tracking-tight">
            Gig Sphere
          </div>
        </div>



        <nav className="hidden md:flex items-center gap-8">

          {
            urls.map((item, idx) => {
              return <NavLink
                key={idx}
                to={item.path}
                className={({ isActive }) =>
                  [
                    "flex items-center gap-1 font-medium pb-1 transition-colors duration-200",
                    isActive
                      ? "text-blue-500"
                      : item.color || "text-gray-300",
                    !isActive && "hover:text-blue-500"
                  ].join(" ")
                }
              >
                <span className=''>{item.icons}</span>
                <span>{item.name}</span>
              </NavLink>

            })
          }


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