import React from "react";
import { GetCourses } from "../_lib/actions";
import Courses from "../_components/course";

export default async function CourseApi() {
  const courses = await GetCourses();
  console.log(courses);
  return (
    <div>
      <Courses courses={courses} />
    </div>
  );
}
