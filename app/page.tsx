import React, { Suspense } from "react";
import Achevment from "./_components/achevment";
import Hero from "./_components/hero";
import Student from "./_components/student";
import ReviewForm from "./_components/createreview";
import Loading from "./loading";

export default function page() {
  return (
    <div>
      <Hero />
      <Achevment />
      <ReviewForm />
      <Suspense fallback={<Loading />}>
        <Student />
      </Suspense>
    </div>
  );
}
