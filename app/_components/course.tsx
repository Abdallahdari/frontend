"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge, BookOpen, Clock, Star, Users } from "lucide-react";

interface CoursesProb {
  name: string;
  _id: string;
  description: string;
  code: number;
  duration: number;
  instructor: string;
  image: string;
}

interface Prob {
  courses: CoursesProb;
}

export default function Courses({ courses }: Prob) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Our Courses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover a wide range of courses designed to help you achieve your
            academic and professional goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <Card
              key={course._id}
              className="overflow-hidden border border-gray-50 pt-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover "
                />
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  {course.name}
                </CardTitle>

                <p className="text-blue-600 font-medium">
                  Dr {course.instructor}
                </p>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {course.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>
                  {course.calss && (
                    <div className="flex items-center gap-1">
                      for class {course.calss}
                    </div>
                  )}
                </div>

                <Button className="w-full bg-gradient-to-r from-[#678EF7] to-[#774DEF] text-white cursor-pointer  hover:bg-gradient-to-l  hover:from-[#3f00eb] hover:to-[#678EF7] transition-all duration-300 ">
                  <BookOpen className="h-4 w-4" />
                  See the schadual
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>{" "}
    </div>
  );
}
