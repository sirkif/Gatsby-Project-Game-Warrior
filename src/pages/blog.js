import React, { useState } from "react"
import Layout from "../Components/Layout"
import { BackTop, Icon, Pagination } from "antd"
import background from "../images/review-bg.png"
import ConstBlog from "../Components/constants/ConstBlog"
import RecentCard from "../Components/Home/RecentCard"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
const getData = graphql`
  {
    image1: file(relativePath: { eq: "page-top-bg/3.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Blog = () => {
  const data = useStaticQuery(getData)
  const bg = data.image1.childImageSharp.fluid
  const [minValue, setminValue] = useState(0)
  const [maxValue, setmaxValue] = useState(6)

  //  TEST DATA
  // let datal = [
  //   { title: "Card title1", value: "Card content1" },
  //   { title: "Card title2", value: "Card content2" },
  //   { title: "Card title3", value: "Card content3" },
  //   { title: "Card title4", value: "Card content4" },
  //   { title: "Card title1", value: "Card content1" },
  //   { title: "Card title2", value: "Card content2" },
  //   { title: "Card title3", value: "Card content3" },
  //   { title: "Card title4", value: "Card content4" },
  // ]
  const handleChange = value => {
    setminValue((value - 1) * 6)
    setmaxValue(value * 6)
  }
  return (
    <Layout>
      <BackgroundImage className="set-bg bg-position-top" fluid={bg}>
        <main className="container px-4">
          <div className="sm:pl-4 mt-64">
            <p className="font-bold text-4xl md:text-6xl text-white leading-none tracking-wide  mb-6">
              Our Blog
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
        className="bg-right-top bg-contain bg-no-repeat bg-gray-200"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container pb-10">
          <div className="mb-8 mt-10">
            <p className=" text-center font-serif text-gray-800 font-semibold text-2xl sm:text-3xl">
              Recent Blog
            </p>
            <div className="bottom-line bg-mainColor mx-auto -mt-4 mb-3 sm:mb-4"></div>
          </div>
          <div className="flex flex-wrap">
            {/* {datal &&
          datal.length > 0 &&
          datal.slice(minValue, maxValue).map(val => (
            <div>
              <h1>{val.title}</h1>
              <p>{val.value}</p>
            </div>
          ))} */}
            {ConstBlog &&
              ConstBlog.length > 0 &&
              ConstBlog.slice(minValue, maxValue).map(item => {
                return (
                  <RecentCard
                    key={item.id}
                    img={item.imageUrl}
                    imgA={item.imageAlt}
                    desc={item.desc}
                    title={item.title}
                    tag1={item.tag1}
                    tag2={item.tag2}
                    tag3={item.tag3}
                  />
                )
              })}
          </div>
          <div className="flex justify-center mt-4">
            <Pagination
              defaultCurrent={1}
              defaultPageSize={6}
              onChange={handleChange}
              total={24}
            />
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

export default Blog
