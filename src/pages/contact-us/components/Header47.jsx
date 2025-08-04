"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Header47() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Connect</p>
            <h1 className="heading-h1 font-bold">We're Here for You</h1>
          </div>
          <div className="w-full max-w-lg">
            <p className="text-medium">
              Have questions or need assistance? Our team is ready to provide
              the support you need to enhance your experience.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Submit">Submit</Button>
              <Button title="Inquire" variant="secondary">
                Inquire
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
