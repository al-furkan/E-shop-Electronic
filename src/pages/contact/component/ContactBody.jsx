import React, { use } from 'react'
import { useLocation } from 'react-router-dom';
import ContactFrom from './ContactFrom';
const ContactBody = () => {
const {pathname} =useLocation();


  return (
    <div className="grid grid_cols-[2fr_1fr] gap-x-3">
      <div>
      <h1> Home | Contact</h1> 
      <ContactFrom /> 
        
      </div> 
    </div>
  )
}

export default ContactBody;
