import React from "react"
import Layout from "../Components/Layout"
import { BackTop, Icon } from "antd"
import "../css/contact.css"
import contactImag from "../images/contact.png"
import background from "../images/review-bg.png"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
const getData = graphql`
  {
    image1: file(relativePath: { eq: "page-top-bg/5.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Contact = () => {
  const data = useStaticQuery(getData)
  const bg = data.image1.childImageSharp.fluid
  return (
    <Layout>
      <BackgroundImage className="set-bg bg-position-top" fluid={bg}>
        <main className="container px-4">
          <div className="sm:pl-4 mt-64">
            <p className="font-bold text-4xl md:text-6xl text-white leading-none tracking-wide  mb-6">
              Contact Us
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
      <div
        className="bg-gray-200 bg-right-top bg-contain bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container px-6 py-16">
          <div className="lg:flex items-center justify-center ">
            <div className="hidden lg:block lg:mt-20 lg:mr-20">
              <img
                src={contactImag}
                alt="contactImag"
                className="h-full w-full object-cover"
              />
            </div>

            <form className=" mx-auto lg:mx-0 lg:ml-10">
              <div className="mb-8">
                <p className=" text-center font-serif text-gray-800 font-semibold text-xl sm:text-3xl">
                  Here is how you can reach us
                </p>
                <div className="bottom-line bg-mainColor mx-auto my-2 sm:mb-4"></div>
              </div>
              <div>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email address" />
                <input type="text" placeholder="Subject" />
              </div>
              <div>
                <textarea
                  name="message"
                  type="text"
                  placeholder="Message"
                ></textarea>
              </div>
              <input type="submit" value="Submit" className="input-submit" />
            </form>
          </div>
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

export default Contact
