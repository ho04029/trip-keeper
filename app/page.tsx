"use client";

import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";

import ModeToggle from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/spinner";

export default function Home() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header className="absolute top-0 left-0 flex">
        <ModeToggle />
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
      </header>
    </main>
  );
}
