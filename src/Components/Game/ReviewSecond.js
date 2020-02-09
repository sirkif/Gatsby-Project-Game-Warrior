import React from "react"
import img1 from "../../images/review/1.jpg"
import img2 from "../../images/review/2.jpg"
import img3 from "../../images/review/3.jpg"
import img4 from "../../images/review/4.jpg"

const ReviewSecond = () => {
  return (
    <>
      <div>
        <p className=" text-center font-serif text-gray-800 font-semibold text-2xl sm:text-3xl mt-16">
          Recent Reviews
        </p>
        <div className="bottom-line bg-mainColor mx-auto -mt-4 mb-3 sm:mb-4"></div>

        <div className="flex flex-wrap my-10 sm:my-12">
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <div
              className="my-6 rounded-lg  shadow-lg bg-cover bg-center card-hover mx-auto"
              style={{ backgroundImage: `url(${img1})` }}
            >
              <div className="score bg-mainColor">9.4</div>
            </div>
            <h1 className="text-gray-800 text-lg font-semibold font-serif tracking-wider text-center mt-6 ">
              Assassin's Creed
            </h1>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 mt-2 sm:mt-0">
            <div
              className="my-6 rounded-lg  shadow-lg bg-cover bg-center card-hover mx-auto"
              style={{ backgroundImage: `url(${img2})` }}
            >
              <div className="score bg-purple-600">9.4</div>
            </div>
            <h1 className="text-gray-800 text-lg font-semibold font-serif tracking-wider text-center mt-6">
              Doom
            </h1>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4  mt-2 sm:mt-0">
            <div
              className="my-6 rounded-lg  shadow-lg bg-cover bg-center card-hover mx-auto"
              style={{ backgroundImage: `url(${img3})` }}
            >
              <div className="score bg-green-600">9.4</div>
            </div>
            <h1 className="text-gray-800 text-lg font-semibold font-serif tracking-wider text-center mt-6">
              Overwatch
            </h1>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mt-2 sm:mt-0">
            <div
              className="my-6 rounded-lg shadow-lg bg-cover bg-center card-hover mx-auto"
              style={{ backgroundImage: `url(${img4})` }}
            >
              <div className="score bg-red-600">9.4</div>
            </div>

            <h1 className="text-gray-800 text-lg font-semibold font-serif tracking-wider text-center mt-6">
              GTA
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReviewSecond
