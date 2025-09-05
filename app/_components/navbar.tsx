import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  BookOpen,
  FileText,
  Users,
  LayoutDashboard,
} from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href={""} className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-academic-blue" />
            <span className="text-xl font-bold bg-gradient-to-r from-academic-blue to-academic-purple bg-clip-text text-transparent">
              EduPlatform
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link
              href={"/"}
              className={`flex items-center gap-2 px-3 py-2 rounded-md hover:text-blue-400 transition-all duration-300 `}
            >
              <LayoutDashboard className="h-4 w-4" />
              Home
            </Link>

            <Link
              href={"/courses"}
              className={`flex items-center gap-2 px-3 py-2 rounded-md hover:text-blue-400 transition-all duration-300 `}
            >
              <BookOpen className="h-4 w-4" />
              Courses
            </Link>

            <Link
              href={"/exam"}
              className={`flex items-center gap-2 px-3 py-2 rounded-md hover:text-blue-400 transition-all duration-300 `}
            >
              <FileText className="h-4 w-4" />
              Exams
            </Link>

            <Link
              href={"/teachers"}
              className={`flex items-center gap-2 px-3 py-2 rounded-md hover:text-blue-400 transition-all duration-300}`}
            >
              <Users className="h-4 w-4" />
              Teacher Portal
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href={"/login"}>Sign In</Link>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
