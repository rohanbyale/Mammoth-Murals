import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [isAtTop, setIsAtTop] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      if (currentScrollY < 50) {
        setIsAtTop(true)
      } else {
        setIsAtTop(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', controlNavbar)
    return () => window.removeEventListener('scroll', controlNavbar)
  }, [lastScrollY])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-4 sm:px-8 flex items-center justify-between h-20 sm:h-24 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${isAtTop ? 'bg-[#FFD900]' : 'bg-transparent'}`}
    >
      <Link
        to="/"
        className="nav bg-black h-10 sm:h-12 flex items-center text-lg sm:text-3xl px-3 sm:px-4 rounded-[5px] text-white font-bold hover:scale-105 transition-transform"
      >
        MAMMOTH MURALS
      </Link>

      <div className="hidden md:flex gap-6 text-[13px] font-bold">
        {['Work', 'About', 'MainService'].map((item) => (
          <Link
            key={item}
            to={`/${item}`}
            className="bg-[#FFD900] border rounded-[5px] py-3 px-6 uppercase border-black transition-all duration-300 hover:-rotate-6 hover:bg-black hover:text-white shadow-sm"
          >
            {item === 'MainService' ? 'Services' : item}
          </Link>
        ))}
      </div>

      <div className="hidden md:flex">
        <Link
          to="/contact"
          className="group relative bg-black border rounded-[5px] border-black text-white flex items-center uppercase px-6 py-3 overflow-hidden min-w-[160px] justify-center shadow-lg"
        >
          <div className="flex items-center transition-all duration-300 group-hover:-translate-y-12">
            <img
              src="https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/688995b78786bb6f8df3b6ef_1753282172963.avif"
              alt="chat"
              className="h-5 w-5 mr-3"
            />
            <span className="font-semibold">Chat with us</span>
          </div>
          <div className="absolute translate-y-12 transition-all duration-300 group-hover:translate-y-0 font-bold text-[#FFD900]">
            Let's Talk!
          </div>
        </Link>
      </div>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden bg-black text-white px-4 py-2 rounded-[5px] uppercase text-sm font-bold"
      >
        Menu
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#FFD900] border-t border-black flex flex-col items-center gap-4 py-6 md:hidden">
          {['Work', 'About', 'MainService'].map((item) => (
            <Link
              key={item}
              to={`/${item}`}
              onClick={() => setMenuOpen(false)}
              className="w-11/12 text-center bg-black text-white py-3 uppercase rounded-[5px]"
            >
              {item === 'MainService' ? 'Services' : item}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="w-11/12 text-center bg-black text-white py-3 uppercase rounded-[5px]"
          >
            Chat with us
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
