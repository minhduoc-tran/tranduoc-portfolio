import React from 'react'

import Logo from './logo'
import Navbar from './nav-bar'

const Header = () => {
  return (
    <div className="w-100 flex items-center justify-between border-[1px] border-b border-b-slate-500 px-2 py-4 shadow-md md:px-4">
      <Logo />
      <Navbar />
    </div>
  )
}

export default Header
