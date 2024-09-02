import { UserProps } from "@/lib/types";

export const ProfileHome = ({user}: {user: UserProps}) => {
  return <div className="p-5 bg-[#1b1a1a] rounded-lg w-full">
    {user.banner ? (
        <img src={user.banner} alt="banner" className="w-full h-[80px] object-cover rounded-lg" />
    ) : (
        <div className="w-full h-[80px] bg-slate-500 rounded-lg"></div>
    )}

    <img src={user.image} alt="profile" className="w-[50px] h-[50px] object-cover rounded-full flex items-center justify-center mx-auto mt-[-30px] border-2 border-white" />
    <h2 className="text-white text-center text-lg mt-2 font-bold">{user.name}</h2>    
  </div>
}