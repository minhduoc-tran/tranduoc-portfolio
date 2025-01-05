import Image from 'next/image'
import React from 'react'

import { CodeIcon, PenToolIcon } from 'lucide-react'

import Wrapper from '@/components/common/wrapper'
import { CardContainer } from '@/components/ui/3d-card'
import { Button } from '@/components/ui/button'
import { TypewriterEffect } from '@/components/ui/typewriter-effect'

const AsideLeft = () => {
  const words = [
    {
      text: 'My',
      className: ' text-3xl  md:text-4xl lg:text-5xl',
    },
    {
      text: 'name',
      className: ' text-3xl  md:text-4xl lg:text-5xl',
    },
    {
      text: 'is',
      className: ' text-3xl  md:text-4xl lg:text-5xl',
    },
    {
      text: 'Tran',
      className:
        'text-[#0077b6]   dark:text-[#0077b6] font-bold text-3xl  md:text-4xl lg:text-5xl',
    },
    {
      text: 'Duoc',
      className:
        'text-[#0077b6] dark:text-[#0077b6] font-bold text-3xl  md:text-4xl lg:text-5xl',
    },
  ]

  return (
    <div className="flex h-full w-full max-w-2xl items-center justify-start">
      <div>
        <h2 className="text-2xl font-semibold leading-tight md:text-3xl lg:text-4xl">
          Hello, everyone
        </h2>
        <br />
        <h1 className="flex font-medium">
          <TypewriterEffect words={words} />
        </h1>
        <p className="mt-4 text-base leading-6">
          I&apos;m a Software engineer. I love sharing knowledge with others and
          dream of becoming a teacher in the future.
        </p>

        <div className="mt-4 flex w-full max-w-2xl items-center gap-2">
          <Button
            className="rounded-full bg-[#0077b6] hover:bg-white hover:text-black dark:text-white dark:hover:bg-[#0077b6]/70"
            variant="default"
          >
            <CodeIcon />
            <p className="px-2">Web Developer</p>
          </Button>

          <Button
            className="rounded-full hover:bg-[#0077b6] hover:text-white dark:bg-white dark:text-black"
            variant="outline"
          >
            <PenToolIcon />
            <p className="px-2">Learner</p>
          </Button>
        </div>
      </div>
    </div>
  )
}
const AsideRight = () => {
  return (
    <CardContainer
      className="inter-var group/card"
      containerClassName="md:py-20 py-4"
    >
      <div className="relative overflow-hidden rounded-[255px_15px_225px_15px/15px_225px_15px] border-4 border-slate-900">
        <Image
          src={'/images/DHF_1747.jpg'}
          alt="Tran Duoc"
          className="bg-cover bg-center object-cover"
          loading="lazy"
          width={350}
          height={200}
        />
      </div>
    </CardContainer>
  )
}

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="flex min-h-[calc(100vh-60px)] items-center px-2 py-4 md:px-4">
        <div className="col-span-1 grid w-full gap-2 md:grid-cols-3">
          <div className="h-full md:col-span-2">
            <AsideLeft />
          </div>
          <div className="w-100 col-span-1 mx-auto">
            <AsideRight />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default HeroSection
