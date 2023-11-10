import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import Logo from "../assets/images/site-logo.png";
import useAuth from "../custom-hooks/useAuth";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const location = useLocation();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const toggle = () => {
    setToggleMenu(!toggleMenu);
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  
  return (
    <div>
      <div className="shadow bg-stone-100 border-b-4 border-solid border-blue-700">
        <div className="h-20 mx-5 px-5 flex justify-between text-xl">
          <ul className="flex items-center">
            <li>
              <img src={Logo} alt="logo" height={100} width={100} />
            </li>
            <li className="p-4 hover:text-red-500 transition-colors max-md:hidden">
              <Link to="/">Home</Link>
            </li>
            <li className="p-4 hover:text-red-500 transition-colors max-md:hidden">
              <Link to="/about">About</Link>
            </li>
            <li className="p-4 hover:text-red-500 transition-colors max-md:hidden">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="p-4 hover:text-red-500 transition-colors max-md:hidden">
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
          <ul className="flex items-center gap-3">
            <li className="p-4 hover:text-red-500 transition-colors bg-slate-200 rounded-full">
              <Link to="/cart">
                <i className="ri-shopping-bag-line p-1"></i>
                <span className="badge rounded-full mb-1">
                  {totalQuantity >= 1 ? totalQuantity : ""}
                </span>
              </Link>
            </li>
            {currentUser &&
              (location.pathname.startsWith("/dashboard") ? (
                <li
                  className="p-4 bg-red-400 text-white hover:bg-red-600 transition-colors rounded-3xl max-md:hidden cursor-pointer"
                  onClick={logout}
                >
                  Log Out
                </li>
              ) : (
                <li className="p-4 bg-green-400 text-white hover:bg-green-600 transition-colors rounded-3xl max-md:hidden cursor-pointer">
                  <Link to="/dashboard">Admin Tools</Link>
                </li>
              ))}
            <div className="md:hidden flex items-center">
              <button onClick={toggle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </ul>
        </div>
        <div
          className={`z-40 w-full bg-gray-100 overflow-hidden flex flex-col md:hidden gap-12 origin-top duration-100 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8">
            <div className="flex flex-col items-center gap-8 font-bold tracking-wider">
              <ul className="text-center">
                <li className="p-4 hover:text-red-500 transition-colors">
                  <Link to="/" onClick={toggle}>
                    Home
                  </Link>
                </li>
                <li className="p-4 hover:text-red-500 transition-colors">
                  <Link to="/about" onClick={toggle}>
                    About
                  </Link>
                </li>
                <li className="p-4 hover:text-red-500 transition-colors">
                  <Link to="/contact" onClick={toggle}>
                    Contact
                  </Link>
                </li>
                <li className="p-4 hover:text-red-500 transition-colors">
                  <Link to="/shop" onClick={toggle}>
                    Shop
                  </Link>
                </li>
                {currentUser &&
              (location.pathname.startsWith("/dashboard") ? (
                <li
                  className="p-2 mb-3 bg-red-400 text-white hover:bg-red-600 transition-colors rounded-3xl cursor-pointer"
                  onClick={()=>{
                    logout();
                    toggle();
                  }}
                >
                  Log Out
                </li>
              ) : (
                <li className="p-2 mb-3 bg-green-400 text-white hover:bg-green-600 transition-colors rounded-3xl cursor-pointerl" onClick={toggle}>
                  <Link to="/dashboard">Admin Tools</Link>
                </li>
              ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
