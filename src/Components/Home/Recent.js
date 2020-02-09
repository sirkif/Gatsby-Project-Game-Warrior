import React from "react"
import background from "../../images/recent-game-bg.png"
import "../../css/recent.css"
import RecentCard from "./RecentCard"
import ConstantRecent from "../constants/ConstantRecent"
const Recent = () => {
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
            {ConstantRecent.map(item => {
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
        </div>
      </div>
    </>
  )
}

export default Recent
