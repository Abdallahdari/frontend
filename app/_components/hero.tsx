import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";
import student from "@/public/students-celebration.jpg";
import Image from "next/image";
export default function Hero() {
  return (
    <div>
      <section className="relative min-h-[600px] bg-gradient-to-br from-[#5D48C1] to-[#4430c7] overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transform Your
                <span className="block bg-gradient-to-r from-academic-orange to-academic-green bg-clip-text text-transparent">
                  Learning Journey
                </span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Access world-class courses, track your progress, and excel in
                your studies with our comprehensive educational platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  Start Learning Today
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={student}
                  alt="Students learning together"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-academic-purple/20 to-transparent"></div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-academic-orange rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-academic-green rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
