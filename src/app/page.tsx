import { ProfileHome } from "@/components/sidebarHome/ProfileHome";
import { auth } from "@/lib/auth";
import { UserProps } from "@/lib/types";

export default async function Home() {
  const session = await auth()
  const user = session?.user as UserProps
  
  return (
    <main className="flex w-full gap-5">
      
      <div className="w-[300px]">
        <ProfileHome user={user} />
      </div>

      <div className="flex-1 bg-red-500 p-5">
      
      </div>

      <div className="w-[300px] bg-blue-500">
        
      </div>

    </main>
  );
}
