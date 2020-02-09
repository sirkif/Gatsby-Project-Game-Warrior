import React from "react"
import Layout from "../Components/Layout"
import { BackTop, Icon } from "antd"
import background from "../images/review-bg.png"
import Review from "../Components/Game/Review"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import ReviewSecond from "../Components/Game/ReviewSecond"
const getData = graphql`
  {
    image1: file(relativePath: { eq: "page-top-bg/2.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Games = () => {
  const data = useStaticQuery(getData)
  const bg = data.image1.childImageSharp.fluid
  return (
    <Layout>
      {/* <div
        className="set-bg bg-position"
        style={{ backgroundImage: `url(${background})` }}
      > */}

      <BackgroundImage className="set-bg bg-position-top" fluid={bg}>
        <main className="container px-4">
          <div className="sm:pl-4 mt-64">
            <p className="font-bold text-4xl md:text-6xl text-white leading-none tracking-wide  mb-6">
              Games Reviews
              <span className="inline-flex text-mainColor text-4xl md:text-6xl ml-3">
                <Icon type="heart" />
              </span>{" "}
            </p>

            <p className="text-white leading-relaxed mb-12 lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum
              rutrum metus at enim congue scelerisque. Sed suscipit metu non
              iaculis semper consectetur.
            </p>
          </div>
        </main>
      </BackgroundImage>
      {/* </div> */}
      <div className=" bg-gray-200">
        <div className="container">
          <Review />
        </div>
      </div>
      <div
        className="bg-review-game"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container">
          <ReviewSecond />
        </div>
      </div>
      <div>
        <BackTop>
          <Icon type="up" className="button-up" />
        </BackTop>
      </div>
    </Layout>
  )
}

export default Games
