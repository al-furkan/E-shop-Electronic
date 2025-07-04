import React from 'react';
import Logo1 from '../../../assets/companies/Logo1.png';
import Logo2 from '../../../assets/companies/Logo2.png';
import Logo3 from '../../../assets/companies/Logo3.png';
import Logo4 from '../../../assets/companies/Logo4.png';
import Logo5 from '../../../assets/companies/Logo5.png';

const Companies = () => {
  return (
    <div className="mt-20 flex flex-wrap justify-center lg:justify-between gap-5 lg:gap-0  items-center">
      <div>
        <img src={Logo1} alt="Samsung" className="h-10 md:h-12 object-contain" />
       </div>
      <div>
        <img src={Logo2} alt="OpenAI" className="h-10 md:h-12 object-contain" />
          </div>
     <div>
       <img src={Logo3} alt="OpenAI" className="h-10 md:h-12 object-contain" />
        </div>
         <div>
          <img src={Logo5} alt="Spotify" className="h-10 md:h-12 object-contain" />
        </div>
         <div>
       <img src={Logo4} alt="Tencent" className="h-10 md:h-12 object-contain" />
        </div>
     
    </div>
  );
};

export default Companies;
