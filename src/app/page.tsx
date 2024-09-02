import { AllPosts } from "@/components/homePage/AllPosts";
import { FormPost } from "@/components/homePage/FormPost";
import { MenuSidebarHome } from "@/components/sidebarHome/MenuSidebarHome";
import { ProfileHome } from "@/components/sidebarHome/ProfileHome";
import { SponsoredSidebarHome } from "@/components/sidebarHome/SponsoredSidebarHome";
import { auth } from "@/lib/auth";
import { UserProps } from "@/lib/types";
import { getPosts } from "@/server/Actions";

export default async function Home() {
  const session = await auth()
  const user = session?.user as UserProps
  const posts = await getPosts()

  return (
    <main className="flex w-full gap-7">
      
      <div className="w-[280px] max-md:hidden flex flex-col gap-5">
        {user && user.id ? <ProfileHome user={user} /> : null}
        <MenuSidebarHome />
        <SponsoredSidebarHome />
      </div>

      <div className="flex-1 rounded-lg">
        <FormPost user={user}/>
        <AllPosts initialPosts={posts} userid={user?.id}/>
      </div>
      <div className="w-[300px] max-lg:hidden bg-blue-500 rounded-lg">
        
      </div>

    </main>
  );
}
