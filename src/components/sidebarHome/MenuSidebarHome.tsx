"use client"
import {Book, Activity, Store, CalendarCheck2, Folder, Video, Newspaper, Nfc, List, Settings} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const MenuSidebarHome = () => {
  const pathname = usePathname()
  
  return <div className="w-full bg-[#1b1a1a] rounded-lg p-5 flex flex-col gap-7">
    <Link href="/" className={`flex items-center gap-3 ${pathname === "/" ? "text-blue-500" : "text-gray-400"}`}>
        <Book className="w-5 h-5" />
        <span className={`text-white ${pathname === "/" ? "text-blue-500 font-semibold" : ""}`}>My Posts</span>
    </Link>
    <Link href="/" className={`flex hover:text-blue-500 duration-75 items-center gap-3 ${pathname === "/following" ? "text-blue-500" : "text-gray-400"}`}>
        <Activity className="w-5 h-5 text-gray-400" />
        <span>Following</span>
    </Link>
    <Link href="/" className={`flex hover:text-blue-500 duration-75 items-center gap-3 ${pathname === "/marketplace" ? "text-blue-500" : "text-gray-400"}`}>
        <Store className="w-5 h-5 text-gray-400" />
        <span>Marketplace</span>
    </Link>
    <Link href="/" className={`flex hover:text-blue-500 duration-75 items-center gap-3 ${pathname === "/events" ? "text-blue-500" : "text-gray-400"}`}>
        <CalendarCheck2 className="w-5 h-5 text-gray-400" />
        <span>Events</span>
    </Link>
    <Link href="/" className={`flex hover:text-blue-500 duration-75 items-center gap-3 ${pathname === "/files" ? "text-blue-500" : "text-gray-400"}`}>  
        <Folder className="w-5 h-5 text-gray-400" />
        <span>Files</span>
    </Link>
    <Link href="/" className={`flex hover:text-blue-500 duration-75 items-center gap-3 ${pathname === "/videos" ? "text-blue-500" : "text-gray-400"}`}>
        <Video className="w-5 h-5 text-gray-400" />
        <span>Videos</span>
    </Link>
    <Link href="/" className={`flex hover:text-blue-500 duration-75 items-center gap-3 ${pathname === "/news" ? "text-blue-500" : "text-gray-400"}`}>
        <Newspaper className="w-5 h-5 text-gray-400" />
        <span>News</span>
    </Link>
    <Link href="/" className={`flex hover:text-blue-500 duration-75 items-center gap-3 ${pathname === "/community" ? "text-blue-500" : "text-gray-400"}`}>
        <Nfc className="w-5 h-5 text-gray-400" />
        <span>Community</span>
    </Link>
    <Link href="/" className={`flex hover:text-blue-500 duration-75 items-center gap-3 ${pathname === "/lists" ? "text-blue-500" : "text-gray-400"}`}>
        <List className="w-5 h-5 text-gray-400" />
        <span>Lists</span>
    </Link>
    <Link href="/" className={`flex hover:text-blue-500 duration-75 items-center gap-3 ${pathname === "/settings" ? "text-blue-500" : "text-gray-400"}`}>
        <Settings className="w-5 h-5 text-gray-400" />
        <span>Settings</span>
    </Link>
  </div>
}