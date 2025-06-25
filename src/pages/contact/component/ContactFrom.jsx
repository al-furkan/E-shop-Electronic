import React from 'react'
import Contact from './../index';

const ContactFrom = () => {
  return (
    <div>
      <h2 className="font-poppins font-semibold text-4xl text-black01">Contact Us</h2>
      <p className="font-montserrat text-xl text-black01 font-normal mt-01">Have any questions for us? </p>

      <from>
        <div>
            <label className="font-montserrat text-black01 font-semibold text-lg">Your Name</label>
            <input type="text" className="w-full border border-gray-300 rounded-md p-2 mt-1" placeholder="Enter your name" />  
        </div>
      </from>
    </div>
  )
}

export default ContactFrom;
