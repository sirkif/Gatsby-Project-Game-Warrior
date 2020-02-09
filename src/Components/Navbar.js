import React, { useState } from "react"
import logo from "../images/logo.png"
import { Link } from "gatsby"
const svg1 = (
  <path
    fillRule="evenodd"
    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
  />
)
const svg2 = (
  <path
    fillRule="evenodd"
    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
  />
)

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false)
  const toogleNav = () => {
    setisOpen(isOpen => !isOpen)
  }

  return (
    <>
      <header className="bg-bgColor border-b border-mainColor sm:px-6 sm:py-5">
        <div className="container sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center justify-between px-4 py-3 sm:p-0  ">
            <div>
              <img src={logo} alt="logo" className="h-5 sm:h-6 md:ml-4" />
            </div>

            <div className="sm:hidden">
              <button
                type="button"
                className="text-white hover:text-white focus:text-white focus:outline-none focus:border-white border border-white block "
                onClick={toogleNav}
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  {isOpen ? svg1 : svg2}
                </svg>
              </button>
            </div>
          </div>
          <div
            className={`px-2 pt-2 pb-4 sm:flex sm:p-0 md:mr-4 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <Link
              to="/"
              className="block px-2 py-1 text-white sm:text-lg font-semibold rounded hover:text-mainColor"
            >
              Home
            </Link>
            <Link
              to="/games"
              className="mt-1 block px-2 py-1 text-white sm:text-lg font-semibold rounded hover:text-mainColor sm:mt-0 sm:ml-6"
            >
              Games
            </Link>
            <Link
              to="/blog"
              className="mt-1 block px-2 py-1 text-white sm:text-lg font-semibold rounded hover:text-mainColor sm:mt-0 sm:ml-6"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="mt-1 block px-2 py-1 text-white sm:text-lg font-semibold rounded hover:text-mainColor sm:mt-0 sm:ml-6"
            >
              Contact
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
export default Navbar
