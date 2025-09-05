import { Quote, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
interface Review {
  name: string;
  comment: string;
  image: string;
  Stars: number;
  _id: string;
  createdAt: string;
}

interface Pro {
  data: Review;
}

export default function Reviews({ data }: Pro) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our successful students who have transformed their
            learning journey with us.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {data.map((student: Review) => (
            <div
              key={student._id}
              className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="flex text-academic-orange">
                  {Array.from(
                    { length: Math.min(student.Stars, 5) },
                    (_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-amber-400 text-amber-400"
                      />
                    )
                  )}
                </div>
              </div>

              <div className="relative mb-6 flex items-center gap-3 ">
                <Quote />
                <p className="text-black  italic leading-relaxed ">
                  {student.comment}
                </p>
                <Quote />
              </div>

              <div className="flex items-center">
                {student.image && (
                  <Image
                    src={student.image}
                    alt={student.name}
                    loading="lazy"
                    height={12}
                    width={12}
                    className="w-12 h-12 rounded-full object-cover border-2 border-academic-blue/20"
                  />
                )}
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">
                    {student.name}
                  </h4>
                </div>
              </div>
              {student.createdAt && (
                <p>
                  {new Date(student.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
