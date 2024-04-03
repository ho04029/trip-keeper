import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";

import ModeToggle from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/spinner";

const Header = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
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
  );
};

export default Header;
