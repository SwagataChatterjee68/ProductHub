import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#182131] text-gray-300 py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 ">

        {/* Brand */}
        <div>
          <h2 className="text-indigo-400 text-xl font-bold mb-3">ProductHub</h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Elevate your everyday with thoughtfully crafted products, consistent UI, and a seamless shopping experience you can rely on.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-indigo-400 font-semibold mb-4 text-center ">Quick Links</h3>
          <ul className="space-y-2 text-sm text-center">
            <li><a href="/" className="hover:text-indigo-300 transition">Home</a></li>
            <li><a href="/products" className="hover:text-indigo-300 transition">Products</a></li>
            <li><a href="/about" className="hover:text-indigo-300 transition">About</a></li>
            <li><a href="/contact" className="hover:text-indigo-300 transition">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-indigo-400 font-semibold mb-4 text-center">Join Our Newsletter</h3>
          <p className="text-sm mb-4 text-gray-400 text-center">
            Stay updated with exclusive offers and product drops directly in your inbox.
          </p>
          <div className="flex items-center text-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-md bg-[#1f2937] text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-400 rounded-r-md text-white font-medium transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} ProductHub. All rights reserved.</p>

        {/* Social icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-indigo-400 transition text-xl">
            <i className="ri-facebook-circle-fill"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-indigo-400 transition text-xl">
            <i className="ri-instagram-fill"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-indigo-400 transition text-xl">
            <i className="ri-twitter-x-fill"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-indigo-400 transition text-xl">
            <i className="ri-github-fill"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
