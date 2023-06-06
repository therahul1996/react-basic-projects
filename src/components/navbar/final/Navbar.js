import React, {useState, useRef, useEffect} from 'react';
import {social, links} from './data';
import {FaBars} from 'react-icons/fa'
import logo from './logo.svg';

const Navbar = () => {
  const [showLink, setShowLink] = useState(false)
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLink(!showLink)
  }
  useEffect(() =>{
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if(showLink) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else{
      linksContainerRef.current.style.height = '0px';
    }
  },[showLink])
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='logo' />
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const {id, url, text} = link;
              return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
              )
            })}
            
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((socialIcon) =>{
            const {id, url, icon} = socialIcon;
            return (
            <li key={id}>
                <a href={url}>{icon}</a>
            </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar