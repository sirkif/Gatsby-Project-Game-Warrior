import React from "react"

const ReviewComp = ({ img, imgA, desc, title, review, rate }) => {
  return (
    <div className="w-full lg:w-1/2  my-6">
      <div className="bg-white rounded-lg shadow relative z-10 review-size mx-auto">
        <div className="score bg-mainColor">{review}</div>
        <img
          className="review-image w-full object-cover object-center"
          src={img}
          alt={imgA}
        />

        <div className="p-4">
          <h1 className="text-center text-gray-900  font-semibold py-2 text-2xl md:text-3xl">
            {title}
          </h1>
          <p className="text-gray-600 text-center leading-relaxed  my-6">
            {desc}
          </p>
          <div className="text-center">
            <div>{rate}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewComp
