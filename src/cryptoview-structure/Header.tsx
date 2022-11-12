import React, {useState, useEffect} from 'react'
import './Header.css'

const Header = () => {
  
  const[toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  }
  useEffect(() => {
    const changeWidth = () => {
        setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)
    return () => {
        window.removeEventListener('resize', changeWidth)
    }
  }, [])

  return (
    <nav>
        {(toggleMenu || screenWidth > 940) && (
            <ul className='list'>
                <li className='items'>Home</li>
                <li className='items'>Services</li>
                <li className='items'>Contact</li>
            </ul>
        )}
        <button onClick={toggleNav} className='btn'>BTN</button>
    </nav>
  )
}
export default Header