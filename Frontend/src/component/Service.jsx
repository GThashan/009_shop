import React from 'react'

export default function Service() {
  return (
    <div className="bg-[url('https://i.etsystatic.com/18975710/r/il/07267a/2234476041/il_300x300.2234476041_lnrv.jpg')] bg-no-repeat bg-cover shadow-b-lg
    flex flex-col items-center justify-center py-7
    ">
    <div className=" md:max-w-[800px] px-10 text-white ">
     <div>
        <h1 className='text-center text-[50px]'>We have a services that can satisfy you</h1>
        <p className='text-center'>Our restaurant has good service to make our customers more comfortable to come back again. Our goal is to create some healthy and fresh food for you to enjoy. We are looking forward to having you visit our restaurant</p>
     </div>
     <div className='flex flex-row items-center justify-center my-10 gap-4 '>
        <div className='border bg-[#121617] p-1 rounded text-center'>
            <p>Online Order</p>
        </div>
        <div className='border bg-[#121617] p-1 rounded text-center'>
            <p>24/7 Service</p>
        </div>
        
        <div className='border bg-[#121617] p-1 rounded text-center'>
            <p>Free Food Box</p>
        </div>
     </div>
    </div>
    </div>
  )
}
