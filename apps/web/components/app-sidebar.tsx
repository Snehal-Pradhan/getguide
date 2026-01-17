"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { 
  ChevronRight, 
  Map, 
  FileText, 
  Mail, 
  CheckSquare,
  Calendar,
  Trophy,
  Plus
} from "lucide-react"

import { NavUser } from "@/components/nav-user"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar()
  const pathname = usePathname()
  
  const [roadmaps, setRoadmaps] = React.useState([
    { name: "Frontend Roadmap", href: "/workspace/roadmaps/frontend" },
    { name: "Backend Roadmap", href: "/workspace/roadmaps/backend" },
  ])
  const [newRoadmapName, setNewRoadmapName] = React.useState("")
  const [isDialogOpen, setIsDialogOpen] = React.useState(false)

  const handleAddRoadmap = () => {
    if (newRoadmapName.trim()) {
      const slug = newRoadmapName.toLowerCase().replace(/\s+/g, '-')
      setRoadmaps([...roadmaps, { 
        name: newRoadmapName, 
        href: `/workspace/roadmaps/${slug}` 
      }])
      setNewRoadmapName("")
      setIsDialogOpen(false)
    }
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      {state === "expanded" && (
        <SidebarHeader className="pt-4 px-2">
          <div className="flex items-center justify-center min-h-[16px]">
            <span className="text-[11px] font-bold tracking-widest text-muted-foreground/60 uppercase">
              Workspace
            </span>
          </div>
        </SidebarHeader>
      )}
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>


            <Collapsible asChild defaultOpen className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip="Roadmaps">
                    <Map />
                    <span>Roadmaps</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {roadmaps.map((roadmap) => (
                      <SidebarMenuSubItem key={roadmap.href}>
                        <SidebarMenuSubButton asChild isActive={pathname === roadmap.href}>
                          <Link href={roadmap.href}>
                            <span>{roadmap.name}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>

            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Resumes" isActive={pathname === "/workspace/resumes"}>
                <Link href="/workspace/resumes">
                  <FileText />
                  <span>Resumes</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <SidebarMenuButton tooltip="Create Roadmap">
                    <Plus />
                    <span>Create Roadmap</span>
                  </SidebarMenuButton>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create Roadmap</DialogTitle>
                    <DialogDescription>
                      Give your new roadmap a title to get started.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Roadmap Name</Label>
                      <Input 
                        id="name" 
                        value={newRoadmapName} 
                        onChange={(e) => setNewRoadmapName(e.target.value)}
                        placeholder="e.g. Fullstack Roadmap"
                        onKeyDown={(e) => e.key === 'Enter' && handleAddRoadmap()}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button onClick={handleAddRoadmap} className="rounded-full">Create Roadmap</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </SidebarMenuItem>


          </SidebarMenu>
        </SidebarGroup>

        <SidebarSeparator className="mx-0 w-full" />

        <SidebarGroup>
          {state === "expanded" && (
            <SidebarGroupLabel className="text-muted-foreground/50 font-semibold tracking-tight">
              Integrations
            </SidebarGroupLabel>
          )}
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Gmail" isActive={pathname === "/workspace/gmail"}>
                <Link href="/workspace/gmail">
                  <Mail />
                  <span>Gmail</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Google Calendar" isActive={pathname === "/workspace/calendar"}>
                <Link href="/workspace/calendar">
                  <Calendar />
                  <span>Google Calendar</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Todoist" isActive={pathname === "/workspace/todoist"}>
                <Link href="/workspace/todoist">
                  <CheckSquare />
                  <span>Todoist</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarGroup className="pt-0 pb-2 group-data-[collapsible=icon]:p-0">
          <SidebarMenu>
            <SidebarMenuItem className="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center">
              <SidebarMenuButton 
                asChild
                tooltip="Trophies"
                isActive={pathname === "/workspace/trophies"}
                className="group-data-[collapsible=icon]:w-fit group-data-[collapsible=icon]:px-0"
              >
                <Link href="/workspace/trophies">
                  <Trophy />
                  <span>Trophies</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
