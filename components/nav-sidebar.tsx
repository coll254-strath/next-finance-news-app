"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Newspaper,
  LineChart,
  Globe,
  Briefcase,
  Bell,
  Settings,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    title: "Dashboard",
    icon: BarChart3,
    href: "/",
  },
  {
    title: "Market News",
    icon: Newspaper,
    href: "/news",
  },
  {
    title: "Charts",
    icon: LineChart,
    href: "/charts",
  },
  {
    title: "Global Markets",
    icon: Globe,
    href: "/markets",
  },
  {
    title: "Portfolio",
    icon: Briefcase,
    href: "/portfolio",
  },
  {
    title: "Alerts",
    icon: Bell,
    href: "/alerts",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export function NavSidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();

  return (
    <div
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className={cn(
        "fixed left-0 top-0 z-30 h-full bg-background transition-all duration-300 ease-in-out",
        isExpanded ? "w-64" : "w-16"
      )}
    >
      <div className="flex h-full flex-col border-r">
        <div className="flex h-14 items-center border-b px-3">
          {isExpanded ? (
            <h1 className="text-xl font-bold">FinDash</h1>
          ) : (
            <div className="h-8 w-8">
              <BarChart3 className="h-8 w-8" />
            </div>
          )}
        </div>
        <nav className="flex-1 space-y-2 p-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant={pathname === item.href ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  !isExpanded && "justify-center"
                )}
              >
                <item.icon className={cn("h-5 w-5", isExpanded && "mr-2")} />
                {isExpanded && <span>{item.title}</span>}
              </Button>
            </Link>
          ))}
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="absolute -right-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full border bg-background"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <ChevronRight
            className={cn(
              "h-4 w-4 transition-transform",
              isExpanded && "rotate-180"
            )}
          />
        </Button>
      </div>
    </div>
  );
}