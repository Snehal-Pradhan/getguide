import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "./button";
import Image from "next/image";

function NavBar() {
  return (
    <div className="fixed z-50 w-full bg-gray-200 h-20 px-32 py-4 gap-5 flex items-center">
      <div className="border h-10 w-40 text-4xl ">GetGuide</div>
      <div className="border h-10 flex-1"></div>
      <div className="border h-10 flex justify-end gap-5 items-center">
        <Button asChild>
          <SignInButton />
        </Button>
        <Button asChild>
          <SignUpButton />
        </Button>
      </div>
    </div>
  );
}

export default NavBar;
