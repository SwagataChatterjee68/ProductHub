
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncProductDelete } from "../store/actions/ProductAction";
import { asyncUpdateUser } from '../store/actions/UserAction'
import { toast } from "react-toastify";


const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const products = useSelector((state) => state.productReducer.products)
  const user = useSelector((state) => state.userReducer.users)
  const product = products.find((product) => product.id == id);

  const onAddToCart = (product) => {
    const copyUser = { ...user, cart: [...user.cart] }
    const index = copyUser.cart.findIndex((c) => c?.product?.id == product.id)
    if (index == -1) {
      copyUser.cart.push({ product, quantity: 1 });
    }
    else {
      copyUser.cart[index] = {
        product,
        quantity: copyUser.cart[index].quantity + 1
      }
    }
    dispatch(asyncUpdateUser(copyUser.id, copyUser))
    toast.success("Added to Cart")
    console.log(copyUser)
  }

  const DeleteHandler = () => {
    dispatch(asyncProductDelete(id))
    navigate(`/products`)

  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-xl">
        Product not found.
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#0f0f0f] flex flex-col md:flex-row pt-20 md:pt-0">
      {/* Left: Image */}
      <div className="flex-1 flex justify-center items-center bg-[#111111] p-4 md:p-10">
        <img
          src={product.image}
          alt={product.title}
          className="rounded-xl pl-52 w-4xl object-contain border border-gray-800 shadow-xl transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Right: Details */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 py-8 md:py-0 bg-[#0f0f0f]">
        <h1 className="text-white text-3xl font-bold mb-6">{product.title}</h1>
        <p className="text-gray-400 text-base mb-8 leading-relaxed max-w-prose">
          {product.description}
        </p>

        <div className="space-y-5 mb-10">
          <div>
            <span className="text-gray-500 text-xs uppercase tracking-widest">Price</span>
            <p className="text-indigo-400 font-bold text-2xl">${product.price}</p>
          </div>
          <div>
            <span className="text-gray-500 text-xs uppercase tracking-widest">Category</span>
            <p className="text-gray-300">{product.category}</p>
          </div>
          <div>
            <span className="text-gray-500 text-xs uppercase tracking-widest">Rating</span>
            <p className="text-yellow-400 font-semibold text-xl">
              ⭐ {product.rating?.rate ?? "N/A"}
              <span className="text-gray-400 text-sm ml-1">
                ({product.rating?.count ?? 0} reviews)
              </span>
            </p>
          </div>
         
        </div>
        ( <div className="w-full">
          <Link to={"/cart"} onClick={() => onAddToCart(product)} className="w-full sm:w-auto px-6 py-3 bg-yellow-600 hover:bg-yellow-500 text-white rounded-md transition text-base">
            Add To Cart
          </Link>
        </div>
        )
        {user && user.isAdmin && <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to={`/admin/update-product/${product.id}`}
            className="w-full sm:w-auto text-center px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md transition text-base"
          >
            Update Product
          </Link>

          <button onClick={DeleteHandler}

            className="w-full sm:w-auto px-6 py-3 bg-red-600 hover:bg-red-500 text-white rounded-md transition text-base"
          >
            Delete Product
          </button>
        </div>}



      </div>
    </div >
  );
};

export default SingleProduct;
