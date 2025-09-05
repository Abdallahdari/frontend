"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast, ToastContainer } from "react-toastify";
import { Login } from "../_lib/actions";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await Login(formData);
    if (res?.ok) {
      toast.success("✅ Login successful", {
        autoClose: 2000,
        onClose: () => {
          window.location.href = "/"; // redirect after success
        },
      });
    } else {
      toast.error(res?.error || "❌ Invalid email or password", {
        autoClose: 1500,
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <ToastContainer />
      <Card className="w-full max-w-md border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="********"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full bg-slate-950 text-white hover:bg-blue-700 cursor-pointer transition-all duration-300"
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
