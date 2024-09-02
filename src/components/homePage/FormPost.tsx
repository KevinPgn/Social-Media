"use client"
import { Textarea } from "@/components/ui/textarea"
import { UserProps } from "@/lib/types"
import { Send, Image, File } from "lucide-react"

export const FormPost = ({user}: {user: UserProps}) => {
  return (
    <div className="flex flex-col rounded-lg bg-[#11100E]">
      {!user ? (
        <h2 className="text-white text-center text-xl font-bold">Your need to login to post</h2>
      ): (
        <>
          <div className="flex items-start gap-2 p-5">
            <img src={user.image} alt="user" width={40} height={40} className="rounded-full" />
        <Textarea
        placeholder="What's on your mind?"
        className="rounded-t-lg h-[100px] text-white rounded-md p-3 text-md border-none resize-none bg-transparent" />
      </div>
      <div className="flex justify-between rounded-b-lg bg-[#1F1E1B] items-center p-1 px-3">
        <div className="flex gap-2">
          <button className="bg-transparent text-white p-2 rounded-full hover:bg-gray-700 duration-75">
            <Image />
          </button>
          <button className="bg-transparent text-white p-2 rounded-full hover:bg-gray-700 duration-75">
            <File />
          </button>
        </div>
        <button className="bg-transparent text-white p-2 rounded-full hover:bg-gray-700 duration-75">
          <Send />
            </button>
          </div>
        </>
      )}
    </div>
  )
}