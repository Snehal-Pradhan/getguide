import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

async function AuthLayout({ children }: { children: ReactNode }) {
  const { isAuthenticated } = await auth();
  if (isAuthenticated) {
    redirect("/workspace");
  }
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      {children}
    </div>
  );
}

export default AuthLayout;
