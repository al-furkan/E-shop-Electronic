import React from 'react'
import Logo1 from '../../../assets/companies/Logo1.png';
import Logo2 from '../../../assets/companies/Logo2.png';
import Logo3 from '../../../assets/companies/Logo3.png';
import Logo4 from '../../../assets/companies/Logo4.png'; 
import Logo5 from '../../../assets/companies/Logo5.png';
const Companies = () => {
  return (
    <div className="mt-20 flex  justify-between items-center  flex-wrap">
        <img src={Logo1} alt="samsang" />
        <img src={Logo2} alt="openai" />
        <img src={Logo3} alt="Openai" />
        <img src={Logo4} alt="tencent" />
        <img src={Logo5} alt="spotify" />
    </div>
  )
}

export default Companies;