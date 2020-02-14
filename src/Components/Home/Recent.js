import React from "react"
import background from "../../images/recent-game-bg.png"
import "../../css/recent.css"
import { useStaticQuery, graphql } from "gatsby"
import RecentCard from "./RecentCard"
// import ConstantRecent from "../constants/ConstantRecent"
const getData = graphql`
  {
    test: allTestJson {
      edges {
        node {
          id
          title
          desc
          tag1
          tag2
          tag3
          imageAlt
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
const Recent = () => {
  const { test } = useStaticQuery(getData)
  // console.log(test)
  return (
    <>
      <div
        className="recent set-bg pb-32 pt-20"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container">
          <div className="mt-2 mb-10">
            <p className=" text-center font-serif text-gray-800 font-semibold text-2xl sm:text-3xl">
              Recent Games
            </p>
            <div className="bottom-line bg-mainColor mx-auto -mt-4 mb-3 sm:mb-4"></div>
          </div>
          <div className="flex flex-wrap">
            {test.edges.map(({ node }) => {
              return <RecentCard key={node.id} {...node} />
            })}

            {/* {test.edges.map(({ node }) => {
              return <RecentCard key={node.id} jsonTest={node} />
            })} */}

            {/* {ConstantRecent.map(item => {
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
            })} */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Recent
