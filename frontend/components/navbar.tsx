// components/navbar.tsx
"use client";

import Link from "next/link";
import { useAuth } from "@/provider/AuthProvider";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Plane, User, LogOut, Ticket, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const { user, isLoggedIn, logout } = useAuth();

  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Plane className="h-6 w-6" />
          <span className="text-xl font-bold">SkyJet</span>
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
            
                <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              
            </NavigationMenuItem>
            <NavigationMenuItem>
              
                <NavigationMenuLink  href="/flights/search" className={navigationMenuTriggerStyle()}>
                  Find Flights
                </NavigationMenuLink>
           
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Travel Info</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li>
                   
                      <Link
                        href="/info/baggage"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                       
                            <div className="text-sm font-medium leading-none">
                          Baggage
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Baggage allowance and special requirements
                        </p>
                     
                      </Link>
                  
                  </li>
                  <li>
                  
                      <Link
                        href="/info/check-in"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Check-in
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          How to check-in for your flight
                        </p>
                      </Link>
                    
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarFallback>
                    {user?.email?.charAt(0).toUpperCase() || "U"}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="flex items-center gap-2 cursor-pointer">
                    <User className="h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/bookings" className="flex items-center gap-2 cursor-pointer">
                    <Calendar className="h-4 w-4" />
                    <span>My Bookings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/tickets" className="flex items-center gap-2 cursor-pointer">
                    <Ticket className="h-4 w-4" />
                    <span>My Tickets</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout} className="flex items-center gap-2 cursor-pointer">
                  <LogOut className="h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="/login">Log in</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/register">Sign up</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}