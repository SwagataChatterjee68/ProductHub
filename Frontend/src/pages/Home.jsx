import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-950 to-black min-h-screen font-sans text-gray-200 p-6 pt-32">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-center relative overflow-hidden">
        {/* Background Blurs */}
        <div className="absolute w-80 h-80 bg-indigo-600 rounded-full blur-3xl opacity-20 -top-10 -left-10 animate-pulse pt-20"></div>
        <div className="absolute w-80 h-80 bg-purple-600 rounded-full blur-3xl opacity-20 -bottom-10 -right-10 animate-pulse"></div>

        <div className="md:w-1/2 space-y-6 text-center md:text-left z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-400 leading-tight">
            Discover, Compare, and Shop with{" "}
            <span className="text-indigo-300">ProductHub</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-md mx-auto md:mx-0">
            Your ultimate destination for exploring and managing your products with ease, transparency, and speed.
          </p>
          <Link
            to="/products"
            className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-full shadow-lg transition transform hover:scale-105"
          >
            Explore Products
          </Link>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center z-10">
          <img
            src="https://media.istockphoto.com/id/1395567847/photo/girl-in-an-oversized-hoodie-wearing-wireless-headphones-face-in-profile-neon-pink-and-blue.webp?a=1&b=1&s=612x612&w=0&k=20&c=yTaiMU1pU5WqRFo-ktI1CdIODTYVsHgTC5AAmgV7Jns="
            alt="ProductHub Hero"
            className="w-72 h-72 md:w-80 drop-shadow-[0_0_20px_rgba(99,102,241,0.5)] animate-fadeInUp rounded-3xl"
          />
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-800 my-10 max-w-4xl mx-auto"></div>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-10 md:gap-20 relative overflow-hidden">
        {/* Background Blurs */}
        <div className="absolute w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 -top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-20 -bottom-20 -right-20 animate-pulse"></div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center relative z-10">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl border border-gray-700 hover:scale-105 transition transform">
            <img
              src="https://images.unsplash.com/photo-1683798511985-9260ad11193b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFpciUyMHBvZHN8ZW58MHx8MHx8fDA%3D"
              alt="About ProductHub"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/40 to-purple-600/40"></div>
          </div>
        </div>

        {/* Writing Section */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            About ProductHub
          </h2>
          <p className="text-gray-400 text-lg">
            At ProductHub, we empower you to make informed purchasing decisions effortlessly. Discover a wide range of products, compare features and prices, and manage your interests all in one place.
          </p>
          <p className="text-gray-400 text-lg">
            Whether you’re a tech enthusiast, fashion lover, or home improvement seeker, ProductHub simplifies your shopping with clear comparisons, transparency, and ease of use, helping you save time and money while making smarter choices.
          </p>
          <Link
            to="/about"
            className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-8 py-3 rounded-full shadow-lg transition transform hover:scale-105"
          >
            Learn More About Us
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-800 my-10 max-w-4xl mx-auto"></div>

      {/* Popular Products (Moved down) */}
      {/* Popular Products Banner */}
<section className="relative overflow-hidden py-24 md:py-32 flex flex-col items-center justify-center text-center px-4">
  {/* Background Gradient Blurs */}
  <div className="absolute top-0 left-0 w-80 h-80 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-600 rounded-full blur-3xl opacity-20 animate-pulse translate-x-1/2 translate-y-1/2"></div>

  <div className="relative z-10 max-w-2xl">
    <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-6">
      Discover Our Most Popular Products
    </h2>
    <p className="text-gray-400 text-lg md:text-xl mb-8">
      Curated top-rated products to enhance your lifestyle, productivity, and passions – handpicked for you by ProductHub.
    </p>
    <Link
      to="/products"
      className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition transform hover:scale-105"
    >
      Explore Popular Products
    </Link>
  </div>
</section>

    </div>
  );
};

export default Home;
