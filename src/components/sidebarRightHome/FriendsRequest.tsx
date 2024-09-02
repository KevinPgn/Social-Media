import { Check, X } from "lucide-react"
export const FriendsRequest = () => {
  return <div className="w-full bg-[#1a1916] rounded-lg p-3">
    <div className="flex items-center justify-between px-2">
        <h4 className="text-gray-300 text-sm">Friend Request</h4>
        <span className="text-blue-500 cursor-pointer text-xs">See all</span>
    </div>

    <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-blue-500"></div>
            <span className="text-gray-300 text-sm">John Doe</span>
        </div>
        <div className="flex items-center gap-2">
            <Check size={20} className="text-green-500 hover:text-green-600 cursor-pointer" />
            <X size={20} className="text-red-500 hover:text-red-600 cursor-pointer" />
        </div>
    </div>

    <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-purple-500"></div>
            <span className="text-gray-300 text-sm">John Doe</span>
        </div>
        <div className="flex items-center gap-2">
            <Check size={20} className="text-green-500 hover:text-green-600 cursor-pointer" />
            <X size={20} className="text-red-500 hover:text-red-600 cursor-pointer" />
        </div>
    </div>

    <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-pink-500"></div>
            <span className="text-gray-300 text-sm">John Doe</span>
        </div>
        <div className="flex items-center gap-2">
            <Check size={20} className="text-green-500 hover:text-green-600 cursor-pointer" />
            <X size={20} className="text-red-500 hover:text-red-600 cursor-pointer" />
        </div>
    </div>
  </div>
}