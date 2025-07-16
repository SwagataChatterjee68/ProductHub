import React from "react";
import { Link } from "react-router-dom";

// Example categories data (replace with dynamic data if using Redux/API)
const categories = [
  {
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47",
  },
  {
    name: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
  },
  {
    name: "Fitness",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
  },
  {
    name: "Gaming",
    image: "https://images.unsplash.com/photo-1606813909356-45e8b6a1c1e7",
  },
];

const Category = () => {
  return (
    <div className="bg-[#0f0f0f] min-h-screen pt-28 pb-12 px-4 text-white">
      <h1 className="text-center text-xl md:text-4xl font-bold mb-10 text-indigo-400">
        Explore Categories
      </h1>

      <div className="flex justify-center pt-10 gap-20">
        {categories.map((category, index) => (
          <Link
            to={`/products/category/${category.name.toLowerCase()}`}
            key={index}
            className="group relative overflow-hidden rounded-full border border-gray-700 hover:shadow-lg transition duration-300"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-44 h-44 object-cover transition-transform duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <h2 className="text-xl font-semibold text-indigo-400">
                {category.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
