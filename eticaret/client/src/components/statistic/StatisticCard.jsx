import React from 'react'

const Statistic = ({title ,amount,img}) => {
  return (
   
 <div className="card-item p-8  flex flex-row bg-gray-800 rounded-lg mx-4
 ">
              <div className="left w-16 h-16">
                <img src={img} alt="" />
              </div>
              <div className="right flex flex-col mx-2 text-white">
                <p className="title font-medium ">{title}</p>
                <p className="amount text-center font-semibold">{amount}</p>

              </div>
            </div>


  )
}

export default Statistic