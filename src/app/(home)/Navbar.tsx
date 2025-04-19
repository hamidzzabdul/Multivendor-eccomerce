"use client";
import Link from "next/link";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { NavBarSideBar } from "./navbar-sidebar";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

interface NavBarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavBarItem = ({ href, children, isActive }: NavBarItemProps) => {
  return (
    <Button
      asChild
      variant={"outline"}
      className={cn(
        "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",
        isActive && "bg-black text-white hover:bg-black hover:text-white"
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const navBarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/features", children: "Features" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" },
];

export const Navbar = () => {
  const pathName = usePathname();
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  return (
    <nav className="h-20 flex border-b justify-between  font-medium bg-white">
      <Link href={"/"} className="pl-6 flex items-center">
        <span className={cn("text-5xl font-semibold", poppins.className)}>
          funroad
        </span>
      </Link>

      <NavBarSideBar
        open={isSideBarOpen}
        onOpenChange={setIsSideBarOpen}
        items={navBarItems}
      />

      <div className="items-center gap-4 hidden lg:flex ">
        {navBarItems.map((item) => (
          <NavBarItem
            key={item.href}
            href={item.href}
            isActive={pathName === item.href}
          >
            {item.children}
          </NavBarItem>
        ))}
      </div>

      <div className="hidden lg:flex">
        <Button
          asChild
          className="border-l border-b-0 border-t-0 border-r-0 rounded-none bg-white px-12 h-full hover:bg-pink-400 transition-colors text-lg"
          variant={"secondary"}
        >
          <Link href={"/sign-in"}>Log in</Link>
        </Button>
        <Button
          asChild
          variant={"secondary"}
          className="border-l border-b-0 border-t-0 rounded-none bg-black text-white px-12 h-full hover:bg-pink-400 hover:text-black transition-colors text-lg"
        >
          <Link href={"/sign-up"}>Start Selling</Link>
        </Button>
      </div>

      <div className="flex lg:hidden items-center justify-center">
        <Button
          variant={"ghost"}
          className="size-12 border-transparent bg-white"
          onClick={() => setIsSideBarOpen(true)}
        >
          <MenuIcon />
        </Button>
      </div>
    </nav>
  );
};
