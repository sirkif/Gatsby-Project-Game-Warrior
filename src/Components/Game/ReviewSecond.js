import React from "react"
// import img1 from "../../images/review/1.jpg"
// import img2 from "../../images/review/2.jpg"
// import img3 from "../../images/review/3.jpg"
// import img4 from "../../images/review/4.jpg"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
const getData = graphql`
  {
    image1: file(relativePath: { eq: "review/1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "review/2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: { eq: "review/3.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image4: file(relativePath: { eq: "review/4.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const ReviewSecond = () => {
  const data = useStaticQuery(getData)
  const img1 = data.image1.childImageSharp.fluid
  const img2 = data.image2.childImageSharp.fluid
  const img3 = data.image3.childImageSharp.fluid
  const img4 = data.image4.childImageSharp.fluid
  return (
    <>
      <div>
        <p className=" text-center font-serif text-gray-800 font-semibold text-2xl sm:text-3xl mt-16">
          Recent Reviews
        </p>
        <div className="bottom-line bg-mainColor mx-auto -mt-4 mb-3 sm:mb-4"></div>

        <div className="flex flex-wrap my-10 sm:my-12">
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <BackgroundImage
              className="my-6 rounded-lg  shadow-lg bg-cover bg-center card-hover mx-auto"
              fluid={img1}
            >
              <div className="score bg-mainColor">9.4</div>
            </BackgroundImage>
            <h1 className="text-gray-800 text-lg font-semibold font-serif tracking-wider text-center mt-6 ">
              Assassin's Creed
            </h1>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 mt-2 sm:mt-0">
            <BackgroundImage
              className="my-6 rounded-lg  shadow-lg bg-cover bg-center card-hover mx-auto"
              fluid={img2}
            >
              <div className="score bg-purple-600">9.4</div>
            </BackgroundImage>
            <h1 className="text-gray-800 text-lg font-semibold font-serif tracking-wider text-center mt-6">
              Doom
            </h1>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4  mt-2 sm:mt-0">
            <BackgroundImage
              className="my-6 rounded-lg  shadow-lg bg-cover bg-center card-hover mx-auto"
              fluid={img3}
            >
              <div className="score bg-green-600">9.4</div>
            </BackgroundImage>
            <h1 className="text-gray-800 text-lg font-semibold font-serif tracking-wider text-center mt-6">
              Overwatch
            </h1>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mt-2 sm:mt-0">
            {/* <div
              className="my-6 rounded-lg shadow-lg bg-cover bg-center card-hover mx-auto"
              style={{ backgroundImage: `url(${img4})` }}
            > */}
            <BackgroundImage
              className="my-6 rounded-lg shadow-lg bg-cover bg-center card-hover mx-auto"
              fluid={img4}
            >
              <div className="score bg-red-600">9.4</div>
            </BackgroundImage>

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
