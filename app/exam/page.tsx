import React from "react";
import Exampage from "../_components/exams";
import { GetexamsAll } from "../_lib/data";

export default async function page() {
  const data = await GetexamsAll();
  console.log(data);
  return (
    <div>
      <Exampage data={data} />
    </div>
  );
}
