"use client";

import { BookOpen } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-academic-blue/10 to-academic-blue/20">
      {/* Animated Icon */}
      <div className="animate-bounce">
        <BookOpen className="w-16 h-16 text-academic-blue" />
      </div>

      {/* Text */}
      <h2 className="mt-6 text-2xl font-bold text-gray-800">
        Loading your learning space...
      </h2>
      <p className="mt-2 text-gray-500">Please wait a moment 🚀</p>

      {/* Progress bar */}
      <div className="w-64 h-2 bg-gray-200 rounded-full mt-6 overflow-hidden">
        <div className="h-2 bg-academic-blue animate-[progress_2s_infinite]" />
      </div>

      <style jsx>{`
        @keyframes progress {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
