"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CreateEexam } from "../_lib/data";
import { toast, ToastContainer } from "react-toastify";
import Link from "next/link";

export default function ExamForm() {
  const [formData, setFormData] = useState({
    title: "",
    questions: "",
    date: "",
    duration: "",
    calss: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await CreateEexam(formData);
      toast.success("Exam created successfully!", {
        autoClose: 1000,
        onClose: () => {
          window.location.href = "/exam";
        },
      });
    } catch (error) {
      toast.error("error happened");

      console.error("server error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-10 ">
      <ToastContainer />
      <Card className="shadow-lg rounded-2xl border-0  p-6 ">
        <CardHeader className="flex items-center justify-between text-black ">
          <CardTitle className="text-xl font-bold text-center ">
            Add New Exam
          </CardTitle>
          <Link
            href={"/teachers"}
            className="hover:text-blue-500 underline-offset-1 transition-all duration-300 "
          >
            or Add new Courses
          </Link>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Exam Title</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter exam title"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="questions">Number of Questions</Label>
              <Input
                id="questions"
                name="questions"
                type="number"
                value={formData.questions}
                onChange={handleChange}
                placeholder="Enter number of questions"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="date">Exam Date</Label>
              <Input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="duration">Duration (minutes)</Label>
              <Input
                id="duration"
                name="duration"
                type="number"
                value={formData.duration}
                onChange={handleChange}
                placeholder="Enter duration in minutes"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="calss">Class (Optional)</Label>
              <Input
                id="calss"
                name="calss"
                value={formData.calss}
                onChange={handleChange}
                placeholder="Enter class name (if any)"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-slate-950 text-white hover:bg-blue-700 cursor-pointer transition-all duration-300 "
            >
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </form>

          {message && (
            <p className="mt-4 text-center text-sm font-medium">{message}</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
