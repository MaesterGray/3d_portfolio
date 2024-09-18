import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close ,cLogo} from "../assets";

const Navbar = () => {
  const [Active,setActive]=useState('')
  const [Toggle,setToggle]=useState(true)
 

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>

    <div className="w-full flex justify-between items-center max-w-7xl mx-auto">

      <Link 
      to={'/'}
      className='flex items-center gap-2'
      onClick={()=>{setActive(' ');
      window.scrollTo(0,0)}}>
        <img src={cLogo} alt="" className="w-9 h-9 object-contain" />
        <p className="text-white font-bold cursor-pointer text-[18px]">Nwabuisi Chike</p>
      </Link>
      <ul className="list-none hidden sm:flex flex-row gap-10">
        {navLinks.map((link)=>(
          <li 
          key={link.id}
          className={`${Active===link.title ? 'text-white' :'text-secondary'} hover:text-white font-medium cursor-pointer text-[18px]`}
          onClick={()=>{setActive(link.title)}}>

            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={Toggle? menu : close} alt="" className="w-[20px] h-[20px] object-contain cursor-pointer" onClick={()=>{setToggle(!Toggle)}}/>
        <div className={`${Toggle?'hidden':'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
        <ul className="list-none flex  flex-col gap-4 justify-end items-start">
        {navLinks.map((link)=>(
          <li 
          key={link.id}
          className={`${Active===link.title ? 'text-white' :'text-secondary'} hover:text-white font-medium cursor-pointer text-[18px]`}
          onClick={()=>{setActive(link.title);
          setToggle(!Toggle)}}>

            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
        </div>
      </div>
    </div>

    </nav>
  );
};

export default Navbar;
