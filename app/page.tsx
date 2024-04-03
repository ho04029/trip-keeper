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
      <main className="w-full absolute top-10 h-min min-h-[800px]">
        <section className="box-border w-full  absolute flex flex-col justify-center items-center p-24 overflow-visible content-center gap-2.5 bg-black">
          <div className="box-border w-full flex flex-col justify-center items-start max-w-[1000px] overflow-visible p-0 content-start gap-10">
            <div className="w-[193px] h-[128px] relative overflow-visible block">
              <div className="w-[128px] h-[128px] block overflow-hidden aspect-square bg-white rounded-full absolute"></div>
              <div className="w-[128px] h-[128px] block overflow-hidden aspect-square bg-[#98f5e1] left-[64px] rounded-full absolute"></div>
            </div>
            <h1 className="w-full h-auto whitespace-pre-wrap max-w-[800px] text-title-color text-7xl break-words break-all tracking-normal leading-normal">
              여행이 더 아름다워지는 곳, 트립키퍼
            </h1>
            <div className="box-border w-auto h-auto flex flex-row justify-center items-center p-10 bg-[#fde4cf] overflow-hidden content-center gap-10">
              여정시작하기
            </div>
            padding: 10px 20px 10px 20px;
          </div>
        </section>
        <section></section>
      </main>
    </div>
  );
}
