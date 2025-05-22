import React from 'react'
import Container from '../../Container';
import { Link } from 'react-router-dom';
import SearchWithauth from './SearchWithauth';
import { Logo } from './../../../assets/svg/Logo';

const Navbar = () => {
  return (
     <Container>
      <div className="grid grid-cols-2 justify-between items-center py-[22px]">
        <Link to="/">
          <Logo />
        </Link>
        <div>
          <SearchWithauth />
        </div>
      </div>
    </Container>
  )
}

export default Navbar;