import React from 'react'

import { moreInfo } from '@/constants/more-info'

import Wrapper from './wrapper'

const Footer = () => {
  return (
    <div className="md:pz-4 flex min-h-[20vh] w-full items-center border-t-2 px-2">
      <Wrapper style="flex w-full justify-between items-center flex-col md:flex-row gap-4 md:gap-0 ">
        <span className="text-center text-sm font-medium md:text-start">
          Design and Developed with NextJs © 2025 Tran Duoc
        </span>
        <ul className="flex">
          {moreInfo.map((item, idx) => {
            return (
              <li
                key={idx}
                className="mx-2 inline-block text-sm font-medium transition-all duration-300 hover:underline"
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
      </Wrapper>
    </div>
  )
}

export default Footer
