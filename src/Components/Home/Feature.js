import React from "react"
// import img1 from "../../images/features/1.jpg"
// import img2 from "../../images/features/2.jpg"
// import img3 from "../../images/features/3.jpg"
// import img4 from "../../images/features/4.jpg"

import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
const getData = graphql`
  {
    image2: file(relativePath: { eq: "features/2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: { eq: "features/3.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image4: file(relativePath: { eq: "features/4.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image1: file(relativePath: { eq: "features/1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Feature = () => {
  const data = useStaticQuery(getData)
  const img2 = data.image2.childImageSharp.fluid
  const img3 = data.image3.childImageSharp.fluid
  const img4 = data.image4.childImageSharp.fluid
  const img1 = data.image1.childImageSharp.fluid
  return (
    <>
      <div>
        <p className=" text-center font-serif text-gray-800 font-semibold text-2xl sm:text-3xl">
          New Games
        </p>
        <div className="bottom-line bg-mainColor mx-auto -mt-4 mb-3 sm:mb-4"></div>

        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/2 lg:w-1/4">
            {/* <div
              className="flex-shrink-0 m-6 lg:my-6 lg:mr-8 overflow-hidden rounded-lg  shadow-lg bg-cover bg-center image card-hover"
              style={{ backgroundImage: `url(${img2})` }}
            > */}
            <BackgroundImage
              className="my-6 overflow-hidden rounded-lg  shadow-lg bg-cover bg-center card-hover mx-auto"
              fluid={img2}
            >
              <div className="text-white px-6 pb-6 mt-64 relative z-20">
                <span className="block opacity-75 -mb-1">adventure</span>
                <div className="flex justify-between">
                  <span className="block font-semibold text-xl">Overwatch</span>
                  <span className="block rounded-lg text-white text-xs font-bold px-3 py-2 leading-none flex items-center new">
                    NEW
                  </span>
                </div>
              </div>
            </BackgroundImage>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4">
            {/* <div
              className="flex-shrink-0 m-6 lg:my-6 lg:mx-8 overflow-hidden rounded-lg  shadow-lg bg-cover bg-center image card-hover"
              style={{ backgroundImage: `url(${img3})` }}
            > */}

            <BackgroundImage
              className="my-6 overflow-hidden rounded-lg  shadow-lg bg-cover bg-center card-hover mx-auto"
              fluid={img3}
            >
              <div className="text-white px-6 pb-6 mt-64 relative z-20">
                <span className="block opacity-75 -mb-1">battle royale</span>
                <div className="flex justify-between">
                  <span className="block font-semibold text-xl">PUBG</span>
                  <span className="block rounded-lg text-white text-xs font-bold px-3 py-2 leading-none flex items-center new">
                    NEW
                  </span>
                </div>
              </div>
            </BackgroundImage>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4">
            {/* <div
              className="flex-shrink-0  m-6 lg:my-6 lg:mx-8 overflow-hidden rounded-lg  shadow-lg bg-cover bg-center image card-hover"
              style={{ backgroundImage: `url(${img4})` }}
            > */}

            <BackgroundImage
              className="my-6 overflow-hidden rounded-lg  shadow-lg bg-cover bg-center card-hover mx-auto"
              fluid={img4}
            >
              <div className="text-white px-6 pb-6 mt-64 relative z-20">
                <span className="block opacity-75 -mb-1">racing</span>
                <div className="flex justify-between">
                  <span className="block font-semibold text-xl">
                    Most Wanted
                  </span>
                  <span className="block rounded-lg text-white text-xs font-bold px-3 py-2 leading-none flex items-center new">
                    NEW
                  </span>
                </div>
              </div>
            </BackgroundImage>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4">
            {/* <div
              className="flex-shrink-0 m-6 lg:my-6 lg:ml-8 overflow-hidden rounded-lg shadow-lg bg-cover bg-center image card-hover"
              style={{ backgroundImage: `url(${img1})` }}
            > */}
            <BackgroundImage
              className="my-6 overflow-hidden rounded-lg  shadow-lg bg-cover bg-center card-hover mx-auto"
              fluid={img1}
            >
              <div className="text-white px-6 pb-6 mt-64 relative z-20">
                <span className="block opacity-75 -mb-1">adventure</span>
                <div className="flex justify-between">
                  <span className="block font-semibold text-xl">
                    Assassin Creed
                  </span>
                  <span className="block rounded-lg text-white text-xs font-bold px-3 py-2 leading-none flex items-center new">
                    NEW
                  </span>
                </div>
              </div>
            </BackgroundImage>
          </div>
        </div>
      </div>
    </>
  )
}

export default Feature
