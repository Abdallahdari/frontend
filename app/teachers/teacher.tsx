"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CreateCourse } from "../_lib/data";
import { toast, ToastContainer } from "react-toastify";
import Link from "next/link";

export default function CourseForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    code: "",
    duration: "",
    instructor: "",
    image: "",
    calss: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
      const res = await CreateCourse(formData);
      toast.success("Course created successfully", {
        autoClose: 1000,
        onClose: () => {
          window.location.href = "/courses";
        },
      });
    } catch (error) {
      toast.error("❌ Failed to connect to server");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <ToastContainer />
      <Card className="shadow-lg rounded-2xl border-0  p-6 ">
        <CardHeader className="flex items-center justify-between text-black ">
          <CardTitle className="text-xl font-bold text-center ">
            Add New Courses
          </CardTitle>
          <Link
            href={"/exams"}
            className="hover:text-blue-500 transition-all duration-300"
          >
            or Add new Exams
          </Link>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Course Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter course name"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter course description"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="code">Course Code</Label>
              <Input
                id="code"
                name="code"
                value={formData.code}
                onChange={handleChange}
                placeholder="e.g., CS101"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="duration">Duration (hours)</Label>
              <Input
                id="duration"
                name="duration"
                type="number"
                value={formData.duration}
                onChange={handleChange}
                placeholder="Enter duration in hours"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="instructor">Instructor</Label>
              <Input
                id="instructor"
                name="instructor"
                value={formData.instructor}
                onChange={handleChange}
                placeholder="Enter instructor name"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="image">Image URL</Label>
              <Input
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="Paste image link"
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
