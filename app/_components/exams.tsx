import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import React from "react";
interface Exam {
  _id: string;
  title: string;
  questions: string;
  date: string;
  duration: number;
  calss: string;
}
interface Prob {
  data: Exam[];
}
export default function Exampage({ data }: Prob) {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Exams & Assessments
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay on top of your examinations and track your academic progress.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {data.map((exam) => (
              <Card
                key={exam.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-0 shadow-md "
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 flex items-center justify-between">
                      <CardTitle className="text-xl text-gray-700 mb-2">
                        {exam.title}
                      </CardTitle>
                    </div>
                    <p className="text-green-500"> lab exam </p>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600 mb-4">
                      {exam.questions} qustions{" "}
                    </p>
                    {exam ? (
                      <p className="text-xs">{exam.calss}</p>
                    ) : (
                      "whole calss"
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4 text-academic-blue" />
                      <div>
                        <p className="font-medium">{exam.date}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4 text-green-400" />
                      <div>
                        <p className="font-medium">{exam.duration}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
