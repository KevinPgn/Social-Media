import { MenuSidebarHome } from "@/components/sidebarHome/MenuSidebarHome";
import { ProfileHome } from "@/components/sidebarHome/ProfileHome";
import { auth } from "@/lib/auth";
import { UserProps } from "@/lib/types";

export default async function Home() {
  const session = await auth()
  const user = session?.user as UserProps
  
  return (
    <main className="flex w-full gap-7">
      
      <div className="w-[280px] flex flex-col gap-5">
        {user && user.id ? <ProfileHome user={user} /> : null}
        <MenuSidebarHome />
      </div>

      <div className="flex-1 bg-red-500 p-5 rounded-lg">
      
      </div>
      <div className="w-[300px] bg-blue-500 rounded-lg">
        
      </div>

    </main>
  );
}
