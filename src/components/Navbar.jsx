// import React, { useState } from "react";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   return (
//     <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
//       <h1 className="w-full text-3xl font-bold text-[#bb02ff] cursor-pointer">School 161.</h1>
//       <ul className="hidden md:flex"> 
//         <a href="#" className="p-4 text-[#f361fb] hover:text-white ease-in-out duration-300">About</a>
//         <a href="#" className="p-4 text-[#f361fb] hover:text-white ease-in-out duration-300">Contact</a>
//       </ul>
//       <div onClick={handleNav} className="block md:hidden">
//         {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//       </div>
//       <div
//         className={
//           nav
//             ? "fixed left-0 top-0 w-[60%] h-screen border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
//             : "fixed left-[-100%] top-0 ease-in-out duration-500"
//         }
//       >
//         <h1 className="w-full text-3xl font-bold text-[#bb02ff] m-4">
//           School 161.
//         </h1>
//         <ul className="uppercase p-4">
//           <li className="p-4 text-[#f361fb] border-b border-gray-600">About</li>
//           <li className="p-4 text-[#f361fb]">Contact</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#bb02ff] cursor-pointer">
        <Link to="/">School 161.</Link>
      </h1>
      <ul className="hidden md:flex">
        <Link to="/about" className="p-4 text-[#f361fb] hover:text-white ease-in-out duration-300">
          About
        </Link>
        <Link to="/contact" className="p-4 text-[#f361fb] hover:text-white ease-in-out duration-300">
          Contact
        </Link>
      </ul>
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed  flex-col left-0 top-0 w-[60%] h-screen border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%] top-0 ease-in-out duration-500"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#bb02ff] m-4">
          School 161.
        </h1>
        <ul className="uppercase flex p-4 flex-col">
          <Link
            to="/about"
            onClick={handleNav}
            className="p-4 text-[#f361fb] border-b border-gray-600"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={handleNav}
            className="p-4 text-[#f361fb]"
          >
            Contact
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;