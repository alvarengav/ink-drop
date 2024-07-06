import { clsx } from 'clsx'
import React from 'react'

import NavBar from './NavBar'

const Header = ({ className }: { className?: string }) => {
  return (
    <header className={clsx(className)}>
      <NavBar />
    </header>
  )
}

export default Header
