import Link from "next/link"
import {Home, Users, Users2} from "lucide-react"

export const Links = () => {
  return <div className="flex items-center gap-7">
    <Link href="/" className="flex hover:text-pink-500 duration-75 items-center gap-2 text-sm">
      <Home size={18} />
      <span>Homepage</span>
    </Link>
    <Link href="/friends" className="flex hover:text-pink-500 duration-75 items-center gap-2 text-sm">
      <Users size={18} />
      <span>Friends</span>
    </Link>
    <Link href="/community" className="flex hover:text-pink-500 duration-75 items-center gap-2 text-sm">
      <Users2 size={18} />
      <span>Community</span>
    </Link>
  </div>
}