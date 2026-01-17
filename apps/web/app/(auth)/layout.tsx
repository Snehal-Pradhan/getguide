import { ReactNode } from "react";

function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      {children}
    </div>
  );
}

export default AuthLayout;
