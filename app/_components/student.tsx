import React from "react";
import { Getallreviews } from "../_lib/data";
import Reviews from "./reviews";

export default async function Student() {
  const data = await Getallreviews();
  console.log(data);

  return (
    <div>
      <Reviews data={data} />
    </div>
  );
}
