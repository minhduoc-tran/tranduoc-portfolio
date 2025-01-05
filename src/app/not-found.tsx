import Image from 'next/image'
import Link from 'next/link'

import { HomeIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-y-4 px-2 md:px-4">
        <Image
          alt="not found"
          src="/not-found.svg"
          width={300}
          height={200}
          className="text-[#0077b6]"
        />
        <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
          Page not found
        </h2>
        <p className="text-center text-base font-medium">
          Sorry, the page you are looking for could not be found.
        </p>
        <Button className="flex items-center gap-x-2 bg-[#0077b6] hover:bg-[#0077b6]/70">
          <Link href="/">Return Home</Link>
          <HomeIcon />
        </Button>
      </div>
    </div>
  )
}
