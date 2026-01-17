"use client"

import { useParams } from "next/navigation"

export default function DynamicRoadmapPage() {
  const params = useParams()
  const slug = params.slug as string
  
  // Convert slug back to a clean name (e.g., "frontend-roadmap" -> "Frontend Roadmap")
  const roadmapName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold tracking-tight">{roadmapName}</h1>
      <p className="text-muted-foreground mt-2">
        Welcome to your dynamic roadmap. You can start adding milestones and tasks here!
      </p>
      
      {/* Default "White Page" content area */}
      <div className="mt-8 border-2 border-dashed rounded-xl h-[400px] flex items-center justify-center text-muted-foreground/50 bg-background/50">
        Start building your {roadmapName} modules...
      </div>
    </div>
  )
}
