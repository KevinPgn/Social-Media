"use client"
import {signIn, signOut, useSession} from "next-auth/react"
import { Button } from "../ui/button"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator} from "../ui/dropdown-menu"

export const Authentication = () => {
  const {data: session} = useSession()
  return <>
    {session ? (
        <div className="flex items-center gap-2">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <img loading="lazy" src={session.user?.image ?? ""} alt="profile" width={30} height={30} className="rounded-full cursor-pointer" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-black text-white border-none">
                  <DropdownMenuLabel>
                    <span className="text-sm font-medium">{session.user?.name}</span>
                  </DropdownMenuLabel>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-gray-700"/>
                    <DropdownMenuItem onClick={() => signOut()}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    ) : 
    <Button onClick={() => signIn()}>Login</Button>
    }    
  </>
}