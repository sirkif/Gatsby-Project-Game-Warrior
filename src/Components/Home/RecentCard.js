import React from "react"
import IMG from "gatsby-image"

// const RecentCard = ({ title, desc, imageAlt, image, tag1, tag2, tag3 }) => {
const RecentCard = ({ jsonTest }) => {
  const { title, desc, imageAlt, image, tag1, tag2, tag3 } = jsonTest
  // const data = useStaticQuery(getData)
  const img = image.childImageSharp.fluid
  // const img2 = data.image2.childImageSharp.fluid
  // const img3 = data.image3.childImageSharp.fluid
  return (
    <div className="w-full lg:w-1/2 xl:w-1/3 my-6 ">
      <div className="bg-white rounded-lg overflow-hidden shadow relative recent-size mx-auto">
        <IMG
          className="h-56 w-full object-cover object-center"
          fluid={img}
          alt={imageAlt}
        />
        <div className="p-4 h-auto md:h-40 lg:h-48">
          <a
            href="#"
            className="block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg"
          >
            {title}
          </a>
          <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
            {desc}
          </div>
          <div className="mt-3 lg:mt-6 flex flex justify-between items-center">
            <div>
              <a
                className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                href="#"
              >
                {tag1}
              </a>
              <a
                className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                href="#"
              >
                {tag2}
              </a>
              <a
                className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                href="#"
              >
                {tag3}
              </a>
            </div>
            <span className="block rounded-sm text-white text-xs font-bold px-3 py-2 cursor-pointer leading-none flex items-center new">
              READ MORE
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentCard
