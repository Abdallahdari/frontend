import { Award, BookOpen, Trophy, Users } from "lucide-react";
import React from "react";

export default function Achevment() {
  const achievements = [
    {
      icon: <Users className="h-8 w-8" />,
      number: "10,000+",
      label: "Active Students",
      color: "text-academic-blue",
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      number: "500+",
      label: "Courses Available",
      color: "text-academic-green",
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "95%",
      label: "Success Rate",
      color: "text-academic-purple",
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      number: "1,000+",
      label: "Certificates Issued",
      color: "text-academic-orange",
    },
  ];
  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proudly serving thousands of students worldwide with quality
            education and exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4 ${achievement.color}`}
              >
                <p className="text-blue-950">{achievement.icon}</p>
              </div>
              <h3 className="text-3xl font-semibold text-black mb-2">
                {achievement.number}
              </h3>
              <p className="text-gray-600 font-medium">{achievement.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
