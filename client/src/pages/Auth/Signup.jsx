import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

function Signup() {

    let toast_settings = {
        style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
        },
    }

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match!", toast_settings);
            return;
        }

        if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
            toast.error("All fields are required", toast_settings)
            return;
        }
        // Add your signup logic here
        console.log('Sign up attempt:', formData);
    };

    return (
        <div className="min-h-screen py-10 bg-[#0A0A0A] flex items-center justify-center px-4">
            <div className="w-full max-w-md">

                <div className="bg-[#121212] rounded-2xl p-8 border border-gray-800">
                    <h2 className="text-2xl font-bold text-white text-center mb-2">
                        Create Your Account
                    </h2>
                    <p className="text-gray-400 text-center mb-8">
                        Join Gig Sphere and start trading crypto
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Full Name */}
                        <div>
                            <label className="block text-sm text-gray-400 mb-1.5">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="John Doe"
                                className="w-full bg-[#1A1A1A] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm text-gray-400 mb-1.5">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className="w-full bg-[#1A1A1A] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm text-gray-400 mb-1.5">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Create a strong password"

                                    className="w-full bg-[#1A1A1A] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-sm"
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-sm text-gray-400 mb-1.5">Confirm Password</label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Confirm your password"

                                    className="w-full bg-[#1A1A1A] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-sm"
                                >
                                    {showConfirmPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>

                        {/* Terms & Conditions */}
                        <div className="flex items-start gap-3">
                            <input
                                type="checkbox"
                                id="terms"

                                className="mt-1 w-4 h-4 accent-orange-500 bg-[#1A1A1A] border-gray-700 rounded"
                            />
                            <label htmlFor="terms" className="text-sm text-gray-400">
                                I agree to the{' '}
                                <a href="#" className="text-orange-500 hover:text-orange-400">Terms of Service</a> and{' '}
                                <a href="#" className="text-orange-500 hover:text-orange-400">Privacy Policy</a>
                            </label>
                        </div>

                        {/* Sign Up Button */}
                        <button
                            type="submit"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3.5 rounded-xl transition-colors text-lg"
                        >
                            Create Account
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="my-6 flex items-center gap-3">
                        <div className="flex-1 h-px bg-gray-800"></div>
                        <span className="text-gray-500 text-sm">OR</span>
                        <div className="flex-1 h-px bg-gray-800"></div>
                    </div>



                    {/* Sign In Link */}
                    <p className="text-center text-gray-400 mt-8">
                        Already have an account?{' '}
                        <Link to="/sign-in" className="text-orange-500 hover:text-orange-400 font-medium">
                            Sign In
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

export default Signup;