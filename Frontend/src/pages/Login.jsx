import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { asyncLoginUser } from "../store/actions/UserAction";
import { useDispatch } from 'react-redux'
const Login = () => {
    const { register, handleSubmit, reset } = useForm()
    const navigate=useNavigate()
    const dispatch = useDispatch()
    const LoginHandler = (user) => {
        reset()
        dispatch(asyncLoginUser(user))
        navigate("/products")
    }
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex justify-center items-center px-4">
      <form
        onSubmit={handleSubmit(LoginHandler)}
        className="w-full max-w-md bg-[#111111] border border-neutral-700 p-6 rounded-xl shadow-lg"
      >
        <h2 className="text-white text-2xl font-bold mb-6 text-center">Login to Your Account</h2>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="text-gray-400 text-sm">Email</label>
          <input
            type="email"
            {...register("email")}
            placeholder="email@example.com"
            className="mt-1 w-full px-4 py-2 bg-[#0a0a0a] border border-[#2a2a2a] rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Username */}
        <div className="mb-4">
          <label htmlFor="username" className="text-gray-400 text-sm">Username</label>
          <input
            type="text"
            {...register("username")}
            placeholder="yourusername"
            autoComplete="off"
            className="mt-1 w-full px-4 py-2 bg-[#0a0a0a] border border-[#2a2a2a] rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label htmlFor="password" className="text-gray-400 text-sm">Password</label>
          <input
            type="password"
            {...register("password")}
            placeholder="••••••••"
            autoComplete="new-password"
            className="mt-1 w-full px-4 py-2 bg-[#0a0a0a] border border-[#2a2a2a] rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-md transition duration-300"
        >
          Login
        </button>

        {/* Switch to Register */}
        <p className="text-sm text-center text-gray-500 mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo-400 hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
    );
};

export default Login;
