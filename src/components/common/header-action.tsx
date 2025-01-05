import React from 'react'

import { ModeToggle } from '../ui/mode-toggle'
import SocialMedia from './social-media'

const HeaderAction = () => {
  return (
    <div className="hidden items-center gap-4 md:flex">
      <SocialMedia />
      <ModeToggle />
    </div>
  )
}

export default HeaderAction
