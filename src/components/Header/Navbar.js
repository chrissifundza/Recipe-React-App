import React, {useState, useEffect, useContext} from 'react';
import {Link} from "react-router-dom";
import "./Header.scss";
import { MdFoodBank} from "react-icons/md";
import { IoMdMenu} from "react-icons/io";
import { useSidebarContext } from '../../context/sidebarContext';
import { FaUserAlt } from 'react-icons/fa';
import { AuthContext } from '../../context/authContext';
import axios from 'axios';
import { Logout } from '@mui/icons-material';

const Navbar = () => {
  const {openSidebar} = useSidebarContext();
  const [scrolled, setScrolled] = useState(false);
  
  const {CurrentUser, logout} = useContext(AuthContext)
  const handleScroll = () => {
    const offset = window.scrollY;
    if(offset > 60){
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  })

  
  return (
    <nav className={`navbar bg-orange flex align-center ${scrolled ? 'scrolled': ""}`}>
      <div className='container w-100'>
        <div className='navbar-content text-white'>
          <div className='brand-and-toggler flex align-center justify-between'>
            <Link to = "/userhome" className='navbar-brand fw-3 fs-22 flex align-center'>
              <MdFoodBank />
              <span className='navbar-brand-text fw-7'>CookITUP</span>
            </Link>
            <div className='navbar-btns flex align-center'>
              <Link to='/profile' className=' Loginbtn navbar-brand fw-3 fs-22 flex align-center'>
             <FaUserAlt/> {CurrentUser?.name}
              </Link>

            
              <button  onClick={logout} type = "button" className='Loginbtn  text-white' >
              <Logout/> Logout
              </button>
              <button type = "button" className='navbar-show-btn text-white' onClick={() => openSidebar()}>
                <IoMdMenu size = {27} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar