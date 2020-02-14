import React from "react"
import { Rate } from "antd"
import IMG from "gatsby-image"
const ReviewComp = ({ title, desc, imageAlt, imageUrl, review }) => {
  const img = imageUrl.childImageSharp.fluid
  return (
    <div className="w-full lg:w-1/2  my-6">
      <div className="bg-white rounded-lg shadow relative z-10 review-size mx-auto">
        <div className="score bg-mainColor">{review}</div>
        <IMG
          className="review-image w-full object-cover object-center"
          fluid={img}
          alt={imageAlt}
        />

        <div className="p-4">
          <h1 className="text-center text-gray-900  font-semibold py-2 text-2xl md:text-3xl">
            {title}
          </h1>
          <p className="text-gray-600 text-center leading-relaxed  my-6">
            {desc}
          </p>
          <div className="text-center">
            <div>
              <Rate disabled allowHalf defaultValue={4.5} />,
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewComp
