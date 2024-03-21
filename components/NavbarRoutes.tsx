"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

import SearchInput from "@/components/SearchInput";

export default function NavbarRoutes() {
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith("/academy/teacher");
  const isCoursePage = pathname?.includes("/academy/courses");
  const isSearchPage = pathname === "/academy/search";

  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}
      <div className="flex gap-x-2 ml-auto">
        {isTeacherPage || isCoursePage ? (
          <Link href="/academy/">
            <Button size="sm" variant="ghost">
              <LogOut className="h-4 w-4 mr-2" />
              Exit
            </Button>
          </Link>
        ) : (
          <Link href="/academy/teacher/courses">
            <Button size="sm" variant="ghost">
              Teacher mode
            </Button>
          </Link>
        )}
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
}
