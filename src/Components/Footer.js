import React from "react"
import "../css/footer.css"
import logo from "../images/logo.png"
import footerbg from "../images/footer-top-bg.png"
import blog1 from "../images/latest-blog/1.jpg"
import blog2 from "../images/latest-blog/2.jpg"
import blog3 from "../images/latest-blog/3.jpg"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <>
      <section className="footer-top-section">
        <div className="container sm:flex justify-center items-center">
          <div className="mx-3 mt-10">
            <div>
              <img src={logo} alt="logo" className="h-10 mb-8" />
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor
                sit ame.
              </p>
            </div>
            <div className="hidden sm:block">
              <img src={footerbg} alt="bg" />
            </div>
          </div>
          <div>
            <div className="footer-widget mx-3 md:mx-0 lg:ml-20 mt-2">
              <h4 className="fw-title -mt-1">Latest Posts</h4>
              <div className="-mt-2 mb-4">
                <div className="flex items-center">
                  <div className="mt-2">
                    <img src={blog1} alt="bg" className="h-24 w-40 md:w-24" />
                  </div>
                  <div className="pl-4 pt-2">
                    <div className="text-mainColor text-sm mb-2">
                      April 07, 2020
                    </div>
                    <p className="text-xs text-white opacity-75">
                      Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum{" "}
                    </p>
                    <h4 className="text-xs text-gray-500 opacity-50">
                      By Adam Kif
                    </h4>
                  </div>
                </div>
                <div className="flex mt-2 items-center">
                  <div className="mt-2">
                    <img src={blog2} alt="bg" className="h-24 w-40 md:w-24" />
                  </div>
                  <div className="pl-4 pt-2">
                    <div className="text-mainColor text-sm mb-2">
                      April 07, 2020
                    </div>
                    <p className="text-xs text-white opacity-75">
                      Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum{" "}
                    </p>
                    <h4 className="text-xs text-gray-500 opacity-50">
                      By Adam
                    </h4>
                  </div>
                </div>
                <div className="flex mt-2 items-center">
                  <div className="mt-2">
                    <img src={blog3} alt="bg" className="h-24 w-40 md:w-24" />
                  </div>
                  <div className="pl-4 pt-2">
                    <div className="text-mainColor text-sm mb-2">
                      April 07, 2020
                    </div>
                    <p className="text-xs text-white opacity-75">
                      Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum{" "}
                    </p>
                    <h4 className="text-xs text-gray-500 opacity-50">
                      By Adam
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-section ">
        <div className="container lg:flex sm:flex-row-reverse sm:justify-between sm:items-center lg:px-1">
          <div className="footer-menu flex justify-around  ">
            <Link
              to="/"
              className="text-footerTextColor font-semibold hover:text-mainColor sm:text-sm lg:text-base md:mx-2 lg:mx-4 "
            >
              Home
            </Link>

            <Link
              to="/games"
              className="text-footerTextColor font-semibold hover:text-mainColor sm:text-sm lg:text-base md:mx-2 lg:mx-4 "
            >
              Games
            </Link>

            <Link
              to="/blog"
              className="text-footerTextColor font-semibold hover:text-mainColor sm:text-sm lg:text-base md:mx-2 lg:mx-4 sm:-ml-4"
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className="text-footerTextColor font-semibold hover:text-mainColor md:mx-2 sm:text-sm lg:text-base  lg:mx-4"
            >
              Contact
            </Link>
          </div>
          <div className="text-footerTextColor font-semibold text-center sm:text-sm lg:text-base mt-2 md:mt-0">
            Copyright © {new Date().getFullYear()} All rights reserved | This
            template is made with &#9825; by <Link to="/">Adam Kif</Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
