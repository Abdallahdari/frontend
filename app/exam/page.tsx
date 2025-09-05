import React from "react";
import { GetexamsAll } from "../_lib/data";
import Exampage from "../_components/exams";

export default async function page() {
  const data = await GetexamsAll();
  console.log(data);
  return (
    <div>
      <Exampage data={data} />
    </div>
  );
}
