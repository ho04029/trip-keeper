import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import Link from "next/link";

import ModeToggle from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/spinner";

const Header = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <header className="w-full relative top-0 left-0 flex justify-between p-1 px-5 bg-white dark:bg-black">
      <div className="flex items-center">
        <Link href="/" className="font-medium">
          Trip keeper
        </Link>
      </div>
      <div className="flex items-center gap-1">
        <ModeToggle />
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="outline" size="sm">
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
      </div>
    </header>
  );
};

export default Header;
