"use client"
import Link from "next/link"
import {Home, Users, Users2} from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export const Links = () => {
  const pathname = usePathname()
  return <div className="flex items-center gap-7">
    <Link href="/" className={cn("flex hover:text-pink-500 duration-75 items-center gap-2 text-sm", pathname === "/" && "text-pink-500")}>
      <Home size={18} />
      <span>Homepage</span>
    </Link>
    <Link href="/friends" className={cn("flex hover:text-pink-500 duration-75 items-center gap-2 text-sm", pathname === "/friends" && "text-pink-500")}>
      <Users size={18} />
      <span>Friends</span>
    </Link>
    <Link href="/community" className={cn("flex hover:text-pink-500 duration-75 items-center gap-2 text-sm", pathname === "/community" && "text-pink-500")}>
      <Users2 size={18} />
      <span>Community</span>
    </Link>
  </div>
}