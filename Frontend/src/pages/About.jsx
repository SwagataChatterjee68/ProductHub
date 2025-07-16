import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col justify-center items-center px-4 py-28">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-400 text-center">
        Why People Choose ProductHub
      </h2>
      <p className="text-gray-400 max-w-2xl text-center mb-10">
        ProductHub transforms your shopping into a seamless, personalized experience, ensuring you find the best products effortlessly every time.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {/* Card 1 */}
        <div className="bg-[#182131] rounded-xl p-6 text-center hover:shadow-indigo-500/20 hover:-translate-y-1 transition">
          <div className="flex justify-center mb-4">
            <i className="ri-shopping-bag-3-line text-indigo-400 text-5xl"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Seamless Shopping</h3>
          <p className="text-gray-400 text-sm">
            Navigate effortlessly through thousands of curated products with a smooth, intuitive interface built for your comfort.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#182131] rounded-xl p-6 text-center hover:shadow-indigo-500/20 hover:-translate-y-1 transition">
          <div className="flex justify-center mb-4">
            <i className="ri-star-line text-indigo-400 text-5xl"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Curated Collections</h3>
          <p className="text-gray-400 text-sm">
            We handpick only the best-rated products, ensuring quality and satisfaction for every purchase you make.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#182131] rounded-xl p-6 text-center hover:shadow-indigo-500/20 hover:-translate-y-1 transition">
          <div className="flex justify-center mb-4">
            <i className="ri-truck-line text-indigo-400 text-5xl"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Fast & Reliable</h3>
          <p className="text-gray-400 text-sm">
            Enjoy swift delivery with real-time tracking, ensuring your favorite products reach your doorstep without hassle.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <Link to="/products">
          <button className="bg-indigo-400 hover:bg-indigo-500 text-white px-6 py-2 rounded-md transition">
            Explore Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
