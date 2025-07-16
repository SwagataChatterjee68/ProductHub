
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { asyncProductUpdate } from "../../store/actions/ProductAction";

const UpdateProduct = () => {
  const products = useSelector((state) => state.productReducer.products)
  const { id } = useParams()
  const product = products.find((product) => product.id == id)
  const { register, handleSubmit, reset } = useForm(
    {
      defaultValues: {

        title:product?.title,
        price:product?.price,
        description:product?.description,
        rating:{
          rate:product?.rating.rate
        },
        image:product?.image,
        category:product?.category


      },
    });
  const navigate = useNavigate()
  const dispatch=useDispatch()
  const UpdateProductHandler = (product) => {

    // Reset form after submit
    

    dispatch(asyncProductUpdate(id,product))
    reset(); 
    navigate(`/products/${id}`)


  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex justify-center items-center px-4 pt-24">
      <form
        onSubmit={handleSubmit(UpdateProductHandler)}
        className="w-full max-w-3xl bg-gradient-to-br bg-neutral-900 border border-gray-700 rounded-2xl shadow-2xl p-8"
      >
        <h2 className="text-white text-3xl font-bold mb-8 text-center tracking-wide">
          Update The Product
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
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;

