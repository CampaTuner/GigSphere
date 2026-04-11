import React, { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Signin() {
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your sign-in logic here
        console.log('Sign in attempt:', { email, password });
    };


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])




    return (
        <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-4">
            <div className="w-full max-w-md">


                <div className="bg-[#121212] rounded-2xl p-8 border border-gray-800">
                    <h2 className="text-2xl font-bold text-white text-center mb-2">
                        Welcome Back
                    </h2>
                    <p className="text-gray-400 text-center mb-8">
                        Sign in to access your crypto portfolio
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email */}
                        <div>
                            <label className="block text-sm text-gray-400 mb-1.5">Email Address</label>
                            <input
                                type="email"
                                value={data.email}
                                onChange={(e) => setData({ ...data, email: e.target.value })}
                                placeholder="you@example.com"
                                required
                                className="w-full bg-[#1A1A1A] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm text-gray-400 mb-1.5">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={data.password}
                                    onChange={(e) => setData({ ...data, password: e.target.value })}
                                    placeholder="••••••••"
                                    required
                                    className="w-full bg-[#1A1A1A] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                                >
                                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                                </button>
                            </div>
                        </div>

                        {/* Forgot Password */}
                        <div className="text-right">
                            <a href="#" className="text-orange-500 hover:text-orange-400 text-sm">
                                Forgot Password?
                            </a>
                        </div>

                        {/* Sign In Button */}
                        <button
                            type="submit"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3.5 rounded-xl transition-colors text-lg"
                        >
                            Sign In
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="my-6 flex items-center gap-3">
                        <div className="flex-1 h-px bg-gray-800"></div>
                        <span className="text-gray-500 text-sm">OR</span>
                        <div className="flex-1 h-px bg-gray-800"></div>
                    </div>



                    {/* Sign Up Link */}
                    <p className="text-center text-gray-400 mt-8">
                        Don't have an account?{' '}
                        <Link to="/sign-up" className="text-orange-500 hover:text-orange-400 font-medium">
                            Sign Up
                        </Link>
                    </p>
                </div>

                {/* Footer */}
                <p className="text-center text-gray-500 text-xs mt-6">
                    © 2026 Gig Sphere. All rights reserved.
                </p>
            </div>
        </div>
    );
}

export default Signin;