"use client";
import { ModeToggle } from "@/components/darkmode-toggle";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

function Header() {
  const { data: session } = useSession();

  return (
    <header>
      <div>
        {session ? (
          <Button onClick={() => signOut()}>Sign Out</Button>
        ) : (
          <Button onClick={() => signIn("google")}>Sign In</Button>
        )}
        <ModeToggle />
      </div>
    </header>
  );
}

export default Header;
