import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <>
      <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 lg:px-10">
        <Link href={'/'}
        className='flex items-center gap-1'
        >
          <Image 
          src={`/icons/logo.svg`}
           alt='Zoom Logo'
          width={32}
          height={32}
          className='max-sm:size-10'
          />
          <p className="text-[26px] font-exrtabold
          text-white max-sm:hidden
          ">Zoom Online Classes</p>
        </Link>

        <div className=" flex-between gap-5">
          {/* Clerk - User Management */}
          <SignedOut>
          <SignInButton />
        </SignedOut>
          <SignedIn>
          <UserButton />
        </SignedIn>
          <MobileNav/>
        </div>
      </nav>
    </>
  )
}

export default Navbar