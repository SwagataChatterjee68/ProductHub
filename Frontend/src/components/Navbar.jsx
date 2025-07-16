import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const user = useSelector((state) => state.userReducer.users)


  const linkStyle = ({ isActive }) =>
    isActive
      ? "relative text-white after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-white after:rounded-md"
      : "text-gray-400 hover:text-white transition duration-300 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:rounded-md hover:after:w-full after:transition-all after:duration-300";

  return (
    <nav className="fixed w-full z-50  bg-black border-b pt-5 shadow-sm">

      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          Product<span className="text-indigo-400">Hub</span>
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-10 text-sm font-medium">
          <NavLink to="/" className={linkStyle}>Home</NavLink>
          <NavLink to="/products" className={linkStyle}>Products</NavLink>
          <NavLink to="/about" className={linkStyle}>About</NavLink>
          <NavLink to="/contact" className={linkStyle}>Contact</NavLink>
          {user && user.isAdmin &&
            (<>
              <NavLink to="/admin/create-product" className={linkStyle}>Create Product</NavLink>
            </>)
          }
          {user ?
            (<>

              <NavLink to="/profile"  className={linkStyle}>Profile</NavLink>

            </>)
            :
            (<>
              <NavLink
                to="/login"
                className="bg-indigo-600 text-white px-4 py-1.5 rounded-md hover:bg-indigo-700 transition duration-300"
              >
                Login
              </NavLink>
            </>)
          }
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden text-white text-3xl cursor-pointer">
          <i
            className={`ri-${isOpen ? "close" : "menu"}-line`}
            onClick={() => setIsOpen(!isOpen)}
          ></i>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 py-4 bg-black/90 backdrop-blur-md text-base font-medium flex flex-col space-y-4">
          <NavLink to="/" className={linkStyle} onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/products" className={linkStyle} onClick={() => setIsOpen(false)}>Products</NavLink>
          <NavLink to="/about" className={linkStyle} onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/contact" className={linkStyle} onClick={() => setIsOpen(false)}>Contact</NavLink>
          {
            user && user.isAdmin && (
              <>
                <NavLink to="/admin/create-product" className={linkStyle} onClick={() => setIsOpen(false)}>Create Product</NavLink>
              </>
            )
          }
          {user ?
            <>
              <NavLink to="/profile"  className={linkStyle} onClick={() => setIsOpen(false)}>Profile</NavLink>
            </> :
            <>
              <NavLink
                to="/login"
                className="bg-indigo-600 w-1/6 text-white px-2 py-2 rounded-md text-center hover:bg-indigo-700 transition"
                onClick={() => setIsOpen(false)}
              >
                Login
              </NavLink>
            </>
          }
        </div>
      )}
    </nav>
  );
};

export default Navbar;
