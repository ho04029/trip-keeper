"use client";

import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";

import ModeToggle from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/spinner";

export default function Home() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <header className="absolute top-0 left-0 flex  w-full bg-white dark:bg-black">
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
      <main className="w-full">
        <section className="box-border w-full flex flex-col justify-center items-center p-24 overflow-visible content-center flex-nowrap gap-2.5  bg-black">
          <div className="">
            <div className="w-[193px] h-[128px] overflow-visible block absolute">
              <div className="w-[128px] h-[128px] block overflow-hidden aspect-square bg-white bg-cover bg-no-repeat bg-center absolute rounded-full"></div>
              <div className="w-[128px] h-[128px] block overflow-hidden aspect-square bg-[#98f5e1] absolute rounded-full"></div>
            </div>
          </div>
        </section>
        <section></section>
      </main>
    </div>
  );
}
