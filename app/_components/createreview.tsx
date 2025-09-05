"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { CreateReview } from "../_lib/data";
import { toast, ToastContainer } from "react-toastify";

export default function ReviewForm() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [stars, setStars] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newReview = { name, comment, stars };

    try {
      const res = await CreateReview(newReview);

      toast.success("Thank you for your review!", {
        autoClose: 1000,
        onClose: () => {
          window.location.reload();
        },
      });
      console.log("Review submitted successfully:", res);
    } catch (error) {
      console.error("Failed to create review:", error);
      toast.error("Something went wrong while submitting your review.");
    }
  };

  return (
    <section className="py-10 bg-gray-50">
      <ToastContainer />
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Share Your Review
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-academic-blue focus:outline-none"
              required
            />
          </div>

          {/* Comment */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Comment
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your feedback..."
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-academic-blue focus:outline-none"
              required
            />
          </div>

          {/* Stars */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rating
            </label>
            <div className="flex gap-2">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  onClick={() => setStars(i + 1)}
                  className={`h-8 w-8 cursor-pointer transition ${
                    i < stars
                      ? "fill-amber-400 text-amber-400"
                      : "text-gray-300 hover:text-amber-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-slate-950 py-3 b cursor-pointer text-white font-semibold rounded-lg hover:bg-blue-500 transition-all duration-300"
          >
            Submit Review
          </button>
        </form>
      </div>
    </section>
  );
}
