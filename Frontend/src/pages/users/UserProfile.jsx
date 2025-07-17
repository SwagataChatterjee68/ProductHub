import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncDeleteUser, asyncLogoutUser, asyncUpdateUser } from "../../store/actions/UserAction";
import { toast } from "react-toastify";


const UserProfile = () => {
  const { register, handleSubmit, reset } = useForm();

  const user = useSelector((state) => state.userReducer.users)
  //console.log(user.id)

  const dispatch = useDispatch()
  const navigate = useNavigate();



  const UpdateHandler = (formData) => {
    console.log("Form Data submitted:", formData);

    if (!user?.id) {
      toast.error("User ID missing, cannot update profile.");
      return;
    }

    dispatch(asyncUpdateUser(user.id, formData));
    toast.success("Account Updated")
  };

  const LogoutHandler = () => {
    dispatch(asyncLogoutUser());
    toast.success("Logout Successfully")
    navigate("/login");
  };

  const DeleteHandler = () => {
    if (!user?.id) {
      toast.error("User ID missing, cannot delete profile.");
      return;
    }

    dispatch(asyncDeleteUser(user.id));
    toast.success("Account Deleted")
    navigate("/");
  };


  return (
    <div className="min-h-screen bg-[#0a0a0a] flex justify-center items-center px-4 py-10">
      <form onSubmit={handleSubmit(UpdateHandler)} className="w-full max-w-5xl bg-[#182131] border border-neutral-700 rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-4">
        {/* Sidebar */}
        <div className="col-span-1 flex flex-col items-center py-8 border-b md:border-b-0 md:border-r border-neutral-700">
          <div className="w-24 h-24 rounded-full bg-neutral-900 flex items-center justify-center text-white text-2xl font-bold">
            {user?.name?.charAt(0)}
          </div>
          <h2 className="text-white text-lg font-semibold mt-4">{user?.name}</h2>
          <p className="text-gray-400 text-sm">{user?.username}</p>

          <div className="mt-6 w-full px-6 space-y-2 ">

            {user?.isAdmin ? <>(
              <h2 className="w-full text-center  text-indigo-500 hover:text-indigo-400 font-semibold text-xl">Admin Panel</h2>
              )
            </>
              :
              <>
                <h2 className="w-full text-center  text-indigo-500 hover:text-indigo-400 font-semibold text-xl">User Profile</h2>
              </>}
           
          </div>
        </div>

        {/* Profile Form */}
        <div className="col-span-3 p-6 md:p-10">
          <h1 className="text-white text-2xl font-bold mb-6">Profile</h1>
          <div className="space-y-4">
            {/* Name */}
            <div>

              <label htmlFor="name" className="text-gray-400 text-sm">Name</label>
              <input
                type="text"
                defaultValue={user?.name}
                {...register("name")}
                className="mt-1 w-full px-4 py-2 bg-[#182131] border border-[#2a2a2a] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {/* Username */}
            <div>
              <label htmlFor="username" className="text-gray-400 text-sm">Username</label>
              <input
                type="text"
                defaultValue={user?.username}
                {...register("username")}
                className="mt-1 w-full px-4 py-2 bg-[#182131] border border-[#2a2a2a] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="text-gray-400 text-sm">Email</label>
              <input
                type="email"
                defaultValue={user?.email}
                {...register("email")}
                className="mt-1 w-full px-4 py-2 bg-[#182131] border border-[#2a2a2a] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="text-gray-400 text-sm">Password</label>
              <input
                type="password"
                defaultValue={user?.password}
                {...register("password")}
                className="mt-1 w-full px-4 py-2 bg-[#182131] border border-[#2a2a2a] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>


            <div className="flex gap-10">
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-md transition duration-300"
              >
                Update Profile
              </button>
              <button onClick={DeleteHandler}
                type="button"
                className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-md transition duration-300"
              >
                Delete Profile
              </button>
              <button
                type="button"
                onClick={LogoutHandler}
                className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-md transition duration-300"
              >
                Logout Profile
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserProfile;