import React, { useState } from 'react'
import './navbar.css'
import { MdOutlineAccountCircle } from 'react-icons/md'
import { FiMenu } from 'react-icons/fi'
import { CgClose } from 'react-icons/cg'

const Navbar = () => {

  let [toggle, setToggle] = useState(false)

  const Menu = () => (
    <>
      <div className='mntn__navbar__dashboard-links'>
        <a href="#equipment">Equipment</a>
        <a href="#aboutus">About Us</a>
        <a href="#blog">Blog</a>
      </div>
      <div className='mntn__navbar__dashboard-account'>
        <MdOutlineAccountCircle size={27} />
        <span>ACCOUNT</span>
      </div>
    </>
  )
  return (
    <div className='mntn__navbar'>
      <div className='mntn__navbar__logo'>
        <h1>MNTN</h1>
      </div>
      <div className='mntn__navbar__dashboard'>
        <Menu />
      </div>
      <div className='mntn__navbar__dashboard-menu'>
        {
          toggle
            ? (<CgClose size={30} onClick={() => { setToggle(false) }} />)
            : (<FiMenu size={30} onClick={() => { setToggle(true) }} />)
        }
        {
          toggle && <div className='menu slide-in-right'>
            <Menu />
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar