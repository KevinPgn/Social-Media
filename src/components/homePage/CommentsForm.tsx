"use client"
import { Send } from "lucide-react"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"

export const CommentsForm = ({userImage}: {userImage: string}) => {
  const {register, handleSubmit} = useForm()
  return <div className="flex items-center w-full gap-2 mt-2 mb-3">
  <div className="flex items-center w-full gap-2">
    <img src={userImage} alt="user" width={35} height={35} className="rounded-full" />
    <Input type="text" placeholder="Leave a Reply..." {...register("content")} className="rounded-md bg-transparent border border-gray-700" />
  </div>
  <button type="submit" className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md">
    <Send size={20} />
  </button>
  </div>
}