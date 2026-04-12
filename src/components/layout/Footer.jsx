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
                            <div className="w-8 h-8 bg-gradient-to-br rounded-lg flex items-center justify-center">
                                <img src={icons.logoYellow} />
                            </div>
                            <div className="text-white text-2xl font-semibold tracking-tight">
                                Gig Sphere
                            </div>
                        </div>

                        <p className="text-sm leading-relaxed max-w-xs">
                          Gigsphere is a crypto-powered platform that connects freelancers and clients through secure, decentralized payments, ensuring transparency, low fees, and global accessibility.
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
                        © 2026 Gigs Sphere. All rights reserved.
                    </div>

                    
                </div>
            </div>
        </footer>
    );
}

export default Footer;