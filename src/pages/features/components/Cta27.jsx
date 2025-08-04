"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Cta27() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container max-w-lg text-center">
        <h2 className="heading-h2 mb-5 font-bold text-white md:mb-6">
          Unlock Your Academic Potential
        </h2>
        <p className="text-medium text-white">
          Download StudyAssistant now and streamline your academic journey with
          powerful organizational tools.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
          <Button title="Download">Download</Button>
          <Button title="Learn More" variant="secondary-alt">
            Learn More
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-neutral-darkest/50" />
      </div>
    </section>
  );
}
