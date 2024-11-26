import React from 'react'

type Props = {
  taken: boolean,
  selected: boolean,
}

const TwoSeatTable = ({taken, selected}: Props) => {

  return (
    <div className={`w-6 h-6 rounded-full ${taken? "bg-[#FF6F61]" : selected? "bg-[#4A90E2]" :"bg-gray-200" } `}></div>

  )
}

export default TwoSeatTable