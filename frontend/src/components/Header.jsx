import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Header() {
  const { user, logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-xl shadow-xl border-b border-slate-200/50 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 max-w-7xl">
        <div className="flex justify-between items-center">
          {/* Brand Section */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15"
                  />
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent">
                <Link
                  to="/"
                  className="hover:opacity-80 transition-all duration-300"
                >
                  ModernBlog
                </Link>
              </h1>
              <span className="text-xs text-slate-500 font-medium tracking-wide">
                Professional Blogging
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            <Link
              to="/"
              className="px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all duration-200 rounded-xl"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all duration-200 rounded-xl"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all duration-200 rounded-xl"
            >
              Contact
            </Link>
            <Link
              to="/writing-guide"
              className="px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all duration-200 rounded-xl"
            >
              Guide
            </Link>

            {/* User Section */}
            {user ? (
              <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-slate-200">
                <Link
                  to="/create"
                  className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-semibold py-2.5 px-5 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center space-x-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <span>New Post</span>
                </Link>

                <div className="relative group">
                  <Link
                    to="/profile"
                    className="flex items-center space-x-3 p-2 hover:bg-slate-50 rounded-xl transition-all duration-200"
                  >
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-sm font-bold text-white">
                          {user.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-slate-800">
                        {user.name}
                      </span>
                      <span className="text-xs text-slate-500">
                        View Profile
                      </span>
                    </div>
                  </Link>
                </div>

                <button
                  onClick={logout}
                  className="p-2 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200"
                  title="Logout"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-slate-200">
                <Link
                  to="/login"
                  className="px-5 py-2.5 text-slate-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all duration-200 rounded-xl"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-semibold py-2.5 px-5 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Get Started
                </Link>
              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all duration-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                className="px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all duration-200 rounded-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all duration-200 rounded-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all duration-200 rounded-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/writing-guide"
                className="px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all duration-200 rounded-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Writing Guide
              </Link>

              {user ? (
                <>
                  <div className="border-t border-slate-200 pt-4 mt-4">
                    <div className="flex items-center space-x-3 px-4 py-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-white">
                          {user.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800">
                          {user.name}
                        </div>
                        <div className="text-sm text-slate-500">Signed in</div>
                      </div>
                    </div>
                  </div>
                  <Link
                    to="/profile"
                    className="px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all duration-200 rounded-xl"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    My Profile
                  </Link>
                  <Link
                    to="/create"
                    className="mx-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-xl text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Create New Post
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="px-4 py-3 text-red-600 hover:text-red-700 hover:bg-red-50 font-medium transition-all duration-200 rounded-xl text-left"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <div className="border-t border-slate-200 pt-4 mt-4 space-y-2">
                  <Link
                    to="/login"
                    className="px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all duration-200 rounded-xl block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="mx-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-xl text-center block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
