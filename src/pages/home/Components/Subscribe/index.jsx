import React from 'react'
import SubscribeForm from '../../../../globalComponents/subscribe/form';

const Subscribe = () => {
  return (
    <div className="mt-20">
        <div className=".rounded-[25px] .grid .grid-cols-[534px_1fr] overflow-hidden">
            <div className="bg-linear-to-r from-white02 to-gray py-[114px] pl-[100px]">
                <SubscribeForm />
            </div>
        </div>

    </div>
  )
}

export default Subscribe;