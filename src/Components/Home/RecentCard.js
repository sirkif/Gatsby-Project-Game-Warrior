import React from "react"

const RecentCard = ({ img, imgA, desc, title, tag1, tag2, tag3 }) => {
  return (
    <div className="w-full lg:w-1/2 xl:w-1/3 my-6 ">
      <div class="bg-white rounded-lg overflow-hidden shadow relative recent-size mx-auto">
        <img
          class="h-56 w-full object-cover object-center"
          src={img}
          alt={imgA}
        />
        <div class="p-4 h-auto md:h-40 lg:h-48">
          <a
            href="#"
            class="block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg"
          >
            {title}
          </a>
          <div class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
            {desc}
          </div>
          <div class="mt-3 lg:mt-6 flex flex justify-between items-center">
            <div>
              <a
                class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                href="#"
              >
                {tag1}
              </a>
              <a
                class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                href="#"
              >
                {tag2}
              </a>
              <a
                class="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
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
