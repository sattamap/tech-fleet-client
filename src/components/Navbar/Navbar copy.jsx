import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaUserAlt } from 'react-icons/fa';




const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
   

 
    const handleLogOut = () => {
      logOut()
        .then(result => {
          console.log(result.user);
  
        })
        .catch(error => {
          console.log(error);
        })
    }
  
  
    return (
      <div>
        <div className= {`navbar bg-base-100 top-0 w-full shadow-md z-10 p-10 ${navbarClass}`} >
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><NavLink to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending font-normal" : isActive ? "text-[#FF444A] font-bold underline" : ""
                            }>Home</NavLink></li>
                <li><NavLink to="/all"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending font-normal" : isActive ? "text-[#FF444A] font-bold underline" : ""
                            }>All Jobs</NavLink></li>
                <li><NavLink to="/add"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending font-normal" : isActive ? "text-[#FF444A] font-bold underline" : ""
                            }>Add A Job</NavLink></li>
                <li><NavLink to="/myJobs"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending font-normal" : isActive ? "text-[#FF444A] font-bold underline" : ""
                            }>My Jobs</NavLink></li>
                <li><NavLink to="/appliedJobs"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending font-normal" : isActive ? "text-[#FF444A] font-bold underline" : ""
                            }>Applied Jobs</NavLink></li>
                <li><NavLink    to="/blogs"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending font-normal" : isActive ? "text-[#FF444A] font-bold underline" : ""
                            }>Blogs</NavLink></li>
              </ul>
            </div>
            <div className="flex">
                 <img  src={logo} alt="" className="w-10" />
                 <h1 className="text-2xl font-extrabold">Tech<span className=" text-emerald-600">JobNest</span></h1>
             </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-semibold">
            <li><NavLink to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending font-normal" : isActive ? "text-[#FF444A] font-bold underline" : ""
                            }>Home</NavLink></li>
                <li><NavLink to="/all"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending font-normal" : isActive ? "text-[#FF444A] font-bold underline" : ""
                            }>All Jobs</NavLink></li>
                <li><NavLink to="/add"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending font-normal" : isActive ? "text-[#FF444A] font-bold underline" : ""
                            }>Add A Job</NavLink></li>
                <li><NavLink to="/myJobs"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending font-normal" : isActive ? "text-[#FF444A] font-bold underline" : ""
                            }>My Jobs</NavLink></li>
                <li><NavLink to="/appliedJobs"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending font-normal" : isActive ? "text-[#FF444A] font-bold underline" : ""
                            }>Applied Jobs</NavLink></li>
                <li><NavLink    to="/blogs"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending font-normal" : isActive ? "text-[#FF444A] font-bold underline" : ""
                            }>Blogs</NavLink></li>
            </ul>
          </div>
  
  
  
          <div className="navbar-end">
  
  
  
           {user ? (
  // If the user is logged in, show their profile picture, first name, and a logout button
  <div className="nav-item flex">
    {user.photoURL ? (
      <img
        src={user.photoURL}
        alt={`${user.displayName}'s Profile`}
        className="btn btn-ghost btn-circle avatar"
      />
    ) : (
      <FaUserAlt className="btn btn-ghost btn-circle avatar" />
    )}
    <span className="nav-link mx-2">
      Welcome, {user.displayName?.split(" ")[0]}!
    </span>
    <button className="btn btn-secondary mx-2" onClick={handleLogOut}>
      Logout
    </button> 
  </div>
) : (
  // If the user is not logged in, show the login button


  <div className="nav-item flex">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div>
        <FaUserAlt></FaUserAlt>
      </div>
    </label>
   
    <Link to="/login" className="btn btn-accent">
      Login
    </Link>
    
  </div>

)}

</div>
        </div>
            
        </div>
    );
};

export default Navbar;