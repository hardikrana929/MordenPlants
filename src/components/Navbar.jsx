// src/components/Navbar.jsx
// Navbar.jsx
import { FiSearch, FiShoppingBag, FiMenu } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
const Navbar = () => {
  return (
    <header className="w-full px-5 md:px-10 lg:px-16 py-5 absolute top-0 z-50">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="https://res.cloudinary.com/ddn203hk8/image/upload/v1778139082/5e88b52117aa40baa6a96e43b5c4e57858edaa47_utee5y.png"
            alt="logo"
            className="w-10 h-10"
          />
          <h1 className="text-2xl font-bold text-white">FloraVision.</h1>
        </div>

        <ul className="hidden lg:flex items-center gap-10 text-sm text-white">
          <li>Home</li>
          <li className="flex justify-center items-center">Plants Type <span><IoMdArrowDropdown size={20} /></span></li>
          <li>More</li>
          <li>Contact</li>
        </ul>

        <div className="flex items-center gap-5 text-white">
          <FiSearch size={18} className="cursor-pointer" />
          <FiShoppingBag size={18} className="cursor-pointer" />
          <FiMenu size={18} className="cursor-pointer" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
