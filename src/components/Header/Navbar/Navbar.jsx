import { NavLink } from "react-router-dom";
import { GiLovers } from 'react-icons/gi';


const Navbar = () => {

   const navLinks = <>
    <ul className=" lg:flex md:colum gap-5">
     <li>
     <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-red-500 underline" : ""
        }
      >
        Home
      </NavLink>
     </li>
     <li>
     <NavLink
        to="/login"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-red-500 underline" : ""
        }
      >
        LogIn
      </NavLink>
     </li>
     <li>
     <NavLink
        to="/event"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-red-500 underline" : ""
        }
      >
        Event
      </NavLink>
     </li>
     <li>
     <NavLink
        to="/blog"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-red-500 underline" : ""
        }
      >
        Blog
      </NavLink>
     </li>
    </ul>
   </>

    return (
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn lg:hidden hover:bg-red-600 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className=" dropdown-content mt-3 z-[1]  shadow bg-base-100 text-center rounded-box w-32">
                {navLinks}
              </ul>
            </div>
             <div className="flex gap-3">
                <img className="w-[70px]" src="/public/images/Logo.jpg" alt="" />
                <h1 className="lg:text-2xl md:text-xl font-bold">Wedding <br /> <span className="text-red-600 ml-5 flex">Secson<GiLovers></GiLovers> </span></h1>
             </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="">
              {navLinks}
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn bg-white hover:bg-red-600 hover:text-white">LogIn</a>
          </div>
        </div>
      );
};

export default Navbar;