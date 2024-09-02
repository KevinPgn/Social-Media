import { UserProps } from "@/lib/types";
import prisma from "@/lib/prisma";
import { Button } from "../ui/button";

export const ProfileHome = async ({user}: {user: UserProps}) => {
  const followers = await prisma.user.findMany({
    where: {
    following: {
      some: {
        followerId: user.id
      }
    }
  }
})
  return <div className="p-5 bg-[#1b1a1a] rounded-lg w-full">
    {user.banner ? (
        <img src={user.banner} alt="banner" loading="lazy" className="w-full h-[80px] object-cover rounded-lg" />
    ) : (
        <div className="w-full h-[80px] bg-[#2b2929] rounded-lg"></div>
    )}

    <img src={user.image} alt="profile" loading="lazy" className="w-[50px] h-[50px] cursor-pointer object-cover rounded-full flex items-center justify-center mx-auto mt-[-30px] border-2 border-white" />
    <h2 className="text-white text-center text-lg mt-2 font-bold">{user.name}</h2>
    <div className="flex items-center justify-evenly gap-2 mt-2">
        <div className="flex items-center">
            <div className="w-[20px] h-[20px] rounded-full bg-green-500 -ml-1"></div>
            <div className="w-[20px] h-[20px] rounded-full bg-purple-500 -ml-1"></div>
            <div className="w-[20px] h-[20px] rounded-full bg-orange-500 -ml-1"></div>
        </div>
        <p className="text-gray-400 text-center text-xs mt-2">{followers.length} followers</p>
    </div>    
    <Button className="w-fit bg-blue-500 hover:bg-blue-600 flex items-center text-sm justify-center mt-3 mx-auto">My Profile</Button>
  </div>
}