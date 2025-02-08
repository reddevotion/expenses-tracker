'use client'
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import {motion} from 'framer-motion'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs';
const routes = [
    {
      label: "Dashboard",
      path: "/app/dashboard",
    },
    {
      label: "Account",
      path: "/app/account",
    },
  ];
function Header() {
    const pathname = usePathname();
  return (
    <motion.header className='flex items-center border-b border-white/10 py-2' initial={{y: -100, opacity: 0}}
    animate={{y: 0, opacity: 1}}>
    <Link href="/app/dashboard">
        <Image 
          src="/images/logo.png"
          alt="Logo"
          width={25}
          height={25}
        />
    </Link>
    <nav className="ml-auto">
        <ul className="flex gap-2 text-xs">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                href={route.path}
                className={`px-2 py-1 hover:text-white transition  relative rounded-sm ${pathname === route.path ? 'text-white/100' : 'text-white/90'}`}
              >
                {route.label}
                {
                            pathname === route.path && (
                                <motion.span className='bg-black/10 rounded-sm absolute inset-0 -z-10'
                                    layoutId='route'
                                    transition={{
                                        type: 'spring',
                                        stiffness: 380,
                                        damping: 30,
                                    }}
                                >

                                </motion.span>
                            )
                        }
              </Link>
            </li>
          ))}
        </ul>
    </nav>

    <LogoutLink  className="text-white/70 text-[12px] ml-[10px]">
        Logout
    </LogoutLink>
    </motion.header>
  )
}

export default Header