import React from 'react'

import Wrapper from '@/components/common/wrapper'
import CardHoverEffect from '@/components/ui/hover-card'

const MoreInfo = () => {
  return (
    <Wrapper style="min-h-[70vh] flex flex-col min-h-[70vh]  flex-col p-2 md:p-4 lg:p-8">
      <h2 className="text-center text-3xl font-semibold md:text-4xl lg:text-5xl">
        More Information
      </h2>
      <CardHoverEffect />
    </Wrapper>
  )
}

export default MoreInfo
