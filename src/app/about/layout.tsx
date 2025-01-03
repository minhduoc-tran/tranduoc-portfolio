import { Metadata } from 'next'
import React from 'react'

import Footer from '@/components/common/footer'
import Header from '@/components/common/header'

export const metadata: Metadata = {
  title: 'Tran Duoc | About',
  description: 'Personal portfolio create by Tran Duoc',
}
const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default AboutLayout
