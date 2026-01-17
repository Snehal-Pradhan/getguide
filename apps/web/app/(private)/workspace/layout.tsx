"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  // Dynamic Title Logic
  const getTitle = (path: string) => {
    if (path === "/workspace/resumes") return "Resumes"
    if (path === "/workspace/gmail") return "Gmail"
    if (path === "/workspace/calendar") return "Calendar"
    if (path === "/workspace/todoist") return "Todoist"
    if (path === "/workspace/trophies") return "Trophies"
    
    if (path.includes("/roadmaps/")) {
      const parts = path.split("/")
      const slug = parts[parts.length - 1]
      if (!slug) return "Roadmap"
      return slug
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    }
    
    return "Workspace"
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <span className="text-sm font-medium">
              {getTitle(pathname)}
            </span>
          </div>
        </header>
        <div className="flex flex-1 flex-col pl-4">
          <div className="flex flex-1 flex-col bg-muted/50 rounded-tl-2xl border-l border-t shadow-sm">
            {children}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
