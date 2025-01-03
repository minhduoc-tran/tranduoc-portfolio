import React from 'react'

import HeaderAction from './header-action'
import Logo from './logo'
import Navbar from './nav-bar'

const Header = () => {
  return (
    <div className="w-100 flex items-center justify-between px-2 py-4 md:px-4">
      <Logo />
      <Navbar />
      <HeaderAction />
    </div>
  )
}

export default Header
