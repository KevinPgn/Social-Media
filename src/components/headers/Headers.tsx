import Link from "next/link"
import { Links } from "./Links"
import { Search } from "./Search"
import { Profile } from "./Profile"

export const Headers = () => {
  return <header className="w-full h-20 shadow-xl bg-[#141414] px-3">
    <nav className="max-w-[1400px] mx-auto h-full flex items-center justify-between">
        <h2 className="text-xl uppercase text-pink-500 font-semibold">
            <Link href="/">KevinPgn</Link>
        </h2>
        <Links />
        <Search />
        <Profile />
    </nav>
  </header>
}