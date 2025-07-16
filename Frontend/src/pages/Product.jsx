
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { asyncUpdateUser } from '../store/actions/UserAction'
import { toast } from 'react-toastify'

const Product = () => {
  const dispatch=useDispatch()
  const product = useSelector((state) => state.productReducer.products)
  const user=useSelector((state)=>state.userReducer.users)

  const  onAddToCart=(product)=>{
    const copyUser={...user,cart:[...user.cart]}
    const index=copyUser.cart.findIndex((c)=>c?.product?.id == product.id)
    if(index==-1){
      copyUser.cart.push({product,quantity:1});
    }
    else{
      copyUser.cart[index]={
        product,
        quantity:copyUser.cart[index].quantity+1
      }
    }
    dispatch(asyncUpdateUser(copyUser.id,copyUser))
    toast.success("Added to Cart")
    console.log(copyUser)
  }
  const renderedProduct = product.map((product) => {
    return (

      <div key={product.id} className="bg-[#111] border border-gray-700 rounded-2xl shadow-lg hover:shadow-indigo-500/20 transition duration-300  max-w-sm overflow-hidden">

        {/* Image */}
        <div className="bg-[#1a1a1a] h-52 flex items-center justify-center p-4">
          <img
            src={product.image}
            alt={product.title}
            className="h-52 object-contain rounded-2xl"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Title */}
          <h2 className="text-white text-sm font-semibold mb-2 truncate">
            {product.title}
          </h2>

          {/* Price and Rating */}
          <div className="flex justify-between items-center text-sm text-gray-400 mb-3">
            <span className="text-indigo-400 font-semibold">${product.price}</span>
            <span className="flex items-center gap-1">
              {product.rating?.rate}
              <i className="ri-star-fill text-yellow-400 text-xs"></i>
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm mb-5 line-clamp-3">
            {product.description.slice(0,50)}...<Link to={`/products/${product.id}`} className='text-indigo-400 cursor-pointer'>More Info</Link>
          </p>

          {/* Add to Cart Button */}
          <button
            onClick={() => onAddToCart(product)}
            
            className="cursor-pointer w-full bg-indigo-600 hover:bg-indigo-500 text-white font-sm py-2 rounded-lg transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>

    )
  })
  return (
    <div className=' flex flex-wrap  gap-4 py-30 justify-center'>
      {product.length > 0 ? renderedProduct : "Loading..."}
    </div>
  )
}

export default Product
