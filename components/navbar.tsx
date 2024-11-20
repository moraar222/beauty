"use client";

import Link from "next/link";
import { Scissors } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Scissors className="h-6 w-6" />
            <span className="font-bold text-xl">Style Harmony</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/body-types" className="hover:text-primary">
              Body Types
            </Link>
            <Link href="/recommendations" className="hover:text-primary">
              Style Guide
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}