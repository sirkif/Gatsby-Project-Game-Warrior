import React from "react"
import "../../css/review.css"
import ReviewComp from "./ReviewComp"

import ConstReview from "../constants/ConstReview"

const Review = () => {
  return (
    <div className="my-16 ">
      <div className="flex flex-wrap">
        {ConstReview.map(item => {
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
        })}
      </div>
    </div>
  )
}

export default Review
