"use client"

import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props} />
  )
}

function TabsList({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "inline-flex h-auto rounded-md p-1",
        className
      )}
      {...props} />
  )
}

function TabsTrigger({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "inline-flex items-center w-full bg-[#27272c] justify-center whitespace-nowrap text-white rounded-lg p-3 text-base font-medium ring-offset-white transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-accent data-[state=active]:cursor-default data-[state=active]:text-primary data-[state=active]:font-bold data-[state=active]:shadow-sm data-[state=active]:scale-100 hover:bg-accent-hover hover:text-accent hover:scale-105",
        className
      )}
      {...props} />
  )
}

function TabsContent({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("min-h-[480px] ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:ring-offset-slate-950 darl:focus-visible:ring-slate-300", className)}
      {...props} />
  )
}

export { Tabs, TabsContent, TabsList, TabsTrigger }

