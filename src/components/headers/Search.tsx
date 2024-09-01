"use client"
import { Search as SearchIcon } from "lucide-react"
import { Input } from "@/components/ui/input"

export const Search = () => {
  return <div className="hidden lg:flex bg-[#121212] w-[220px] max-md:w-full items-center gap-2 px-3 rounded-sm">
    <Input placeholder="Search..." className="bg-transparent text-sm border-none" />
    <SearchIcon size={18} className="text-white/50 cursor-pointer"/>
  </div>
}