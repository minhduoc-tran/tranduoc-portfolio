import React from 'react'

import { ModeToggle } from '../ui/mode-toggle'
import SocialMedia from './social-media'

const HeaderAction = () => {
  return (
    <div className="flex items-center gap-4">
      <SocialMedia />
      <ModeToggle />
    </div>
  )
}

export default HeaderAction
