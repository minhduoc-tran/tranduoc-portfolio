import Link from 'next/link'
import React from 'react'

import { Facebook, Github, Linkedin } from 'lucide-react'

export const socialMediaList = [
  {
    name: 'Github',
    link: 'https://github.com/minhduoc-tran',
    icon: <Github />,
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/profile.php?id=100027522219067',
    icon: <Facebook />,
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/duoc-tran-0b04b8265/',
    icon: <Linkedin />,
  },
]

const SocialMedia = () => {
  return (
    <div className="flex items-center gap-4">
      {socialMediaList.map((item, index) => {
        return (
          <Link
            className="hover:text-[#0077b6]"
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default SocialMedia
