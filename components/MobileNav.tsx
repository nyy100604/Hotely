"use client";
import Nav from "./Nav";
import { SheetContent, Sheet, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={36} className="text-white" />
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col justify-between h-full p-12">
          {/* logo */}
          <Link href="/" className="mb-24">
            {" "}
            <Image
              src="/assets/footer/logo.svg"
              alt=""
              width={90}
              height={46}
              priority
            />
          </Link>
          {/* nav */}
          <Nav
            containerStyles="text-black"
            listStyles="flex flex-col gap-y-6 text-xl"
          />
          {/* socials */}
          <Socials containerStyles="flex gap-x-4 text-black" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
