import { nanoid } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncProductCreation } from "../../store/actions/ProductAction";

const CreateProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const CreateProductHandler = (product) => {
    product.id=nanoid()
    reset(); // Reset form after submit
    navigate("/products")
   
    dispatch(asyncProductCreation(product))

  };

  return (
    <div className="min-h-screen bg-[#090808] flex justify-center items-center px-4 pt-24">
      <form
        onSubmit={handleSubmit(CreateProductHandler)}
        className="w-full max-w-3xl bg-gradient-to-br bg-neutral-900 border border-gray-700 rounded-2xl shadow-2xl p-8"
      >
        <h2 className="text-white text-2xl font-bold mb-8 text-center tracking-wide">
          Add New Product
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
         

          {/* Title */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">Title</label>
            <input
              type="text"
              {...register("title")}
              className="w-full bg-neutral-900 text-white px-4 py-2 rounded-md border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Product title"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">Price ($)</label>
            <input
              type="number"
              step="0.01"
              {...register("price")}
              className="w-full bg-neutral-900 text-white px-4 py-2 rounded-md border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="0.00"
              required
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">Rating (0–5)</label>
            <input
              type="number"
              step="0.1"
              min="0"
              max="5"
              {...register("rating.rate")}
              className="w-full bg-neutral-900 text-white px-4 py-2 rounded-md border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Rating"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">Category</label>
            <input
              type="text"
              {...register("category")}
              className="w-full bg-neutral-900 text-white px-4 py-2 rounded-md border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Category"
              required
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">Image URL</label>
            <input
              type="url"
              {...register("image")}
              className="w-full bg-neutral-900 text-white px-4 py-2 rounded-md border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Iamge URL"
              required
            />
          </div>
        </div>

        {/* Description */}
        <div className="mt-6">
          <label className="block text-sm text-gray-400 mb-1">Description</label>
          <textarea
            rows="4"
            {...register("description")}
            className="w-full bg-neutral-900 text-white px-4 py-3 rounded-md border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
            placeholder="Description"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-8 w-full bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 text-white font-semibold py-3 rounded-lg shadow-md"
        >
         Create Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
