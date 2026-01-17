import { UserAvatar, UserButton } from "@clerk/nextjs";

import React from "react";

function WorkspacePage() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
          <h1>Workspace</h1>
      <UserAvatar />
      <UserButton />
    </div>
  );
}

export default WorkspacePage;
