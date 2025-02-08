import Header from '@/components/app-header'
import BackgroundPattern from '@/components/background-pattern'
import React from 'react'

function layout({children} : {children: React.ReactNode}) {
  return (
    <>
    <BackgroundPattern/>
    <div className="flex flex-col gap-y-10 max-w-[1050px] mx-auto px-4 min-h-screen">
    <Header/>
    {children}
    </div>
    </>
  )
}

export default layout