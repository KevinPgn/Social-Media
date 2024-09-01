"use client"
import Link from "next/link";
import { Links } from "./Links";
import { Search } from "./Search";
import { Profile } from "./Profile";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Headers = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full h-20 shadow-xl bg-[#141414] px-3">
      <nav className="max-w-[1400px] mx-auto h-full flex items-center justify-between">
        <h2 className="text-xl uppercase text-pink-500 font-semibold hover:animate-gradient duration-75">
          <Link href="/">KevinPgn</Link>
        </h2>
          <Links />
          <Search />
          <Profile />
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center gap-4 mt-4">
          <Links />
          <Search />
          <Profile />
        </div>
      )}
    </header>
  );
};