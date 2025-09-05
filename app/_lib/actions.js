"use server";

import API_BASE_URL from "./axious";
import { signIn } from "next-auth/react";
export async function Register(data) {
  try {
    const res = await API_BASE_URL.post("/users", data);
    return res.data;
  } catch (error) {
    if (error.response && error.response.data?.message) {
      throw new Error(error.response.data.message);
    }
  }
  const res = await API_BASE_URL.get("/users");
  return res.data;
}

export async function GetCourses() {
  try {
    const response = await API_BASE_URL.get("/courses");
    return response.data;
  } catch (error) {
    if (error.response && error.response.data?.message) {
      throw new Error(error.response.data.message);
    }
  }
}
// login
export async function Login(data) {
  try {
    const res = await API_BASE_URL.post("/users/login", data);
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
    }
    console.log(res.data);
    return res.data;
  } catch (error) {
    if (error.response && error.response.data?.message) {
      throw new Error(error.response.data.message);
    }
  }
}

export async function CreateCourse(data) {
  try {
    const res = await API_BASE_URL.post("/courses", data);
    return res.data;
  } catch (error) {
    if (error.response && error.response.data?.message) {
      throw new Error(error.response.data.message);
    }
  }
}
export async function CreateEexam(data) {
  try {
    const res = await API_BASE_URL.post("/exams", data);
    return res.data;
  } catch (error) {
    if (error.response && error.response.data?.message) {
      throw new Error(error.response.data.message);
    }
  }
}
