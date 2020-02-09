import React from "react"
import { Carousel, BackTop, Icon } from "antd"
import "../css/home.css"
import { Link } from "gatsby"
import Feature from "../Components/Home/Feature"
import Recent from "../Components/Home/Recent"

const Home = () => {
  return (
    <>
      <Carousel effect="fade" autoplay>
        <div className="carousel-1">
          <main className="container py-12 px-4 sm:pt-16 lg:pt-24">
            <div className="sm:pl-4">
              <p className="font-bold text-4xl md:text-6xl text-white leading-none tracking-wide mb-2">
                The Best{" "}
                <span className="text-mainColor text-4xl md:text-6xl">
                  Games
                </span>{" "}
              </p>
              <h2 className="font-bold text-4xl md:text-6xl text-white text-secondary tracking-widest mb-6">
                Out There
              </h2>
              <p className="text-white leading-relaxed mb-12 lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum
                rutrum metus at enim congue scelerisque. Sed suscipit metu non
                iaculis semper consectetur.
              </p>
              <Link
                to="/"
                className="bg-mainColor hover:bg-transparent text-gray-900 font-semibold hover:text-mainColor py-2 px-4 border border-mainColor  rounded"
              >
                Read more
              </Link>
            </div>
          </main>
        </div>
        <div className="carousel-2">
          <main className="container py-12 px-4 sm:pt-16 lg:pt-24">
            <div className="sm:pl-4">
              <p className="font-bold text-4xl md:text-6xl text-white leading-none tracking-wide mb-2">
                The Best{" "}
                <span className="text-mainColor text-4xl md:text-6xl">
                  Games
                </span>{" "}
              </p>
              <h2 className="font-bold text-4xl md:text-6xl text-white text-secondary tracking-widest mb-6">
                Out There
              </h2>
              <p className="text-white leading-relaxed mb-12 lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum
                rutrum metus at enim congue scelerisque. Sed suscipit metu non
                iaculis semper consectetur.
              </p>
              <Link
                to="/"
                className="bg-mainColor hover:bg-transparent text-gray-900 font-semibold hover:text-mainColor py-2 px-4 border border-mainColor rounded"
              >
                Read more
              </Link>
            </div>
          </main>
        </div>
      </Carousel>
      <div>
        <BackTop>
          <Icon type="up" className="button-up" />
        </BackTop>
      </div>
      <div className="pb-12 pt-10 bg-white">
        <div className="container">
          <Feature />
        </div>
      </div>
      <Recent />
    </>
  )
}

export default Home
