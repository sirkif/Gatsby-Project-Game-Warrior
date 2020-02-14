import React from "react"
import "../../css/review.css"
import ReviewComp from "./ReviewComp"
import { useStaticQuery, graphql } from "gatsby"

// import ConstReview from "../constants/ConstReview"
const getData = graphql`
  {
    reviews: allReviewJson {
      edges {
        node {
          id
          title
          desc
          review
          imageAlt
          imageUrl {
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

const Review = () => {
  const { reviews } = useStaticQuery(getData)
  return (
    <div className="my-16 ">
      <div className="flex flex-wrap">
        {reviews.edges.map(({ node }) => {
          return <ReviewComp key={node.id} {...node} />
        })}
        {/* {ConstReview.map(item => {
          return (
            <ReviewComp
              key={item.id}
              img={item.imageUrl}
              imgA={item.imageAlt}
              desc={item.desc}
              title={item.title}
              review={item.review}
              rate={item.rate}
            />
          )
        })} */}
      </div>
    </div>
  )
}

export default Review
