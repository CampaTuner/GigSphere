import React from 'react';
import { icons } from '../../utils/constants';

function Footer() {
    return (
        <footer className="bg-[#0A0A0A] text-gray-400 pt-16 pb-10 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6">

                {/* Main Footer Content */}
                <div className="grid grid-cols-2 md:grid-cols-6 gap-y-10 gap-x-8">

                    {/* Logo + Description */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white text-2xl font-bold">P</span>
                            </div>
                            <div className="text-white text-2xl font-semibold tracking-tight">
                                Crypto Planet
                            </div>
                        </div>

                        <p className="text-sm leading-relaxed max-w-xs">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh aenean
                            aliquet amet, neque sit maecenas. Lorem sed egestas nisl condimentum.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-5 mt-8">
                            <a href="#" className="hover:text-white transition-colors"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="hover:text-white transition-colors"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="hover:text-white transition-colors"><i className="fab fa-youtube"></i></a>
                            <a href="#" className="hover:text-white transition-colors"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="hover:text-white transition-colors"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>

                    {/* Exchange */}
                    <div>
                        <h3 className="text-white font-semibold mb-5">Exchange</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Exchange Home</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Margin Trading</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Derivatives Trading</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Supercharger</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white font-semibold mb-5">Support</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Request form</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-white font-semibold mb-5">Resources</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Downloads</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Desktop Application</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Buy Crypto</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Referral</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Listing Trading</a></li>
                        </ul>
                    </div>

                    {/* Learn */}
                    <div>
                        <h3 className="text-white font-semibold mb-5">Learn</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">What's Trending</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Product News</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">University</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Research</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Market Update</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">

                    <div className="text-gray-500">
                        © 2022 Crypto Planet. All rights reserved.
                    </div>

                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-400">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                    </div>

                    {/* Download Buttons */}
                    <div className="flex flex-wrap gap-3">
                        <button className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 border border-gray-700 px-4 py-2 rounded-xl transition-colors">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Windows_logo_-_2021.svg" alt="Windows" className="w-5 h-5" />
                            <div className="text-left text-xs leading-tight">
                                <div>Download PC-Client</div>
                                <div className="text-gray-500">Windows</div>
                            </div>
                        </button>

                        <button className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 border border-gray-700 px-4 py-2 rounded-xl transition-colors">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="macOS" className="w-5 h-5" />
                            <div className="text-left text-xs leading-tight">
                                <div>Download for the</div>
                                <div className="text-gray-500">macOS</div>
                            </div>
                        </button>

                        <button className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 border border-gray-700 px-4 py-2 rounded-xl transition-colors">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-6" />
                        </button>

                        <button className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 border border-gray-700 px-4 py-2 rounded-xl transition-colors">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;