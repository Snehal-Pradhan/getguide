import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
async function Homepage() {
  const { isAuthenticated } = await auth();
  if (isAuthenticated) {
    redirect("/workspace");
  }

  return (
    <div>
      <div className="fixed w-full bg-gray-200 h-20 px-32 py-4">
        <div className="h-full w-full flex justify-end gap-10">
          <div className="flex-1 flex justify-start items-center h-full">
            <div className="w-40 text-4xl"> GetGuide</div>
            <div className="flex-1 flex justify-start items-center gap-10">
              <Button asChild>
                <SignInButton />
              </Button>
              <Button asChild>
                <SignUpButton />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
