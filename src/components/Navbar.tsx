import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { TfiMenu } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false)


  return ( 
    <header className="border-b border-gray-200 fixed top-0 w-full z-50 bg-white">
      <nav className="mx-auto max-w-screen-xl py-4 flex justify-between px-4">
        <div className="flex gap-x-2">
          <LiaLaptopCodeSolid size={24}/> 
          <Link to={"/"} className="font-bold">ZaicodeUI</Link>
        </div>


        <div className="hidden lg:flex gap-x-4 items-center justify-center">
          <Link to={"/components"} className="font-semibold text-sm hover:text-gray-700">Components</Link>
          <Link to={""} className="font-semibold text-sm hover:text-gray-700">Template</Link>
          <Link to={""} className="font-semibold text-sm hover:text-gray-700">Application UI</Link>
          <FaGithub size={26}/>
        </div>

        <div className="lg:hidden flex gap-x-4">
          <FaGithub size={26}/>
          <button onClick={() => setIsMobileOpen(!isMobileOpen)}> 
            {isMobileOpen ? (<IoClose size={20}/>) : ( <TfiMenu size={20}/> )}
          </button>
        </div>
      </nav>

      { isMobileOpen && (
          <div className="lg:hidden top-12 flex flex-col space-y-4 mt-2 mb-4 text-start px-4">
              <Link to={""} className="font-semibold text-sm hover:text-gray-700">Component</Link>
              <Link to={""} className="font-semibold text-sm hover:text-gray-700">Template</Link>
              <Link to={""} className="font-semibold text-sm hover:text-gray-700">Application UI</Link>
          </div>
      )}
    </header>  
   )
}
 
export default Navbar