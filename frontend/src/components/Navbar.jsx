import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdAddHome, MdHouse, MdPermContactCalendar } from 'react-icons/md'
import { RiCheckboxMultipleBlankFill } from "react-icons/ri"

const Navbar = ({containerStyles}) => {
  return (
    <nav className={`${containerStyles}`}>
        <NavLink to={"/"} className={({isActive}) =>isActive ? "active-link flexCenter gap-x-1 rounded-full px-2 py-1" : "flexCenter gap-x-1 rounded-full px-2 py-1"}>
        <MdHouse />
        <div>Home</div>
        </NavLink>

        <NavLink to={"/listing"} className={ "flexCenter gap-x-1 rounded-full px-2 py-1 cursor-pointer"}>
        <RiCheckboxMultipleBlankFill />
        <div>listing</div>
        </NavLink>

        <NavLink to={"mailto:ankursinghsk759@gmail.com"} className={ "flexCenter gap-x-1 rounded-full px-2 py-1 cursor-pointer"}>
        <MdPermContactCalendar />
        <div>Contact</div>
        </NavLink>

        <NavLink to={"/addproperty"} className={ "flexCenter gap-x-1 rounded-full px-2 py-1 cursor-pointer"}>
        <MdAddHome />
        <div>add property</div>
        </NavLink>

    </nav>
  )
}

export default Navbar