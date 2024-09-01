"use client"
import {signIn, signOut, useSession} from "next-auth/react"
import { Button } from "../ui/button"

export const Authentication = () => {
  const {data: session} = useSession()
  return <>
    {session ? (
        <div className="flex items-center gap-2">
            <img loading="lazy" src={session.user?.image ?? ""} alt="profile" width={30} height={30} className="rounded-full cursor-pointer" />
        </div>
    ) : 
    <Button onClick={() => signIn()}>Login</Button>
    }    
  </>
}