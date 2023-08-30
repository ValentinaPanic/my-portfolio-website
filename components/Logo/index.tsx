import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
   <Link className="flex items-center justify-center text-3xl ml-3 text-zinc-700 font-mono dark:text-amber-500 w-16 h-16 rounded-full bg-slate-100  dark:bg-gray-500" href={"/"}>VP</Link>
</div>
  )
}

export default Logo