"use client"
import { Users2, MessageCircle, Bell } from "lucide-react"
import { Authentication } from "./Authentication"

export const Profile = () => {
  return <div className="hidden lg:flex items-center gap-7">
    <Users2 size={18} className="cursor-pointer hover:text-gray-400 duration-300" />
    <MessageCircle size={18} className="cursor-pointer hover:text-gray-400 duration-300" />
    <Bell size={18} className="cursor-pointer hover:text-gray-400 duration-300" />
    <Authentication />
  </div>
}