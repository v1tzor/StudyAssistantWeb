"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout25() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Statistics</p>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Real-Time Workload Tracking for Students
            </h2>
            <p className="text-medium mb-6 md:mb-8">
              Stay organized with our innovative workload statistics feature.
              Monitor your tasks and plan your week effectively with detailed
              insights.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="heading-h2 mb-2 font-bold">50%</h3>
                <p>Stay on top of your academic responsibilities.</p>
              </div>
              <div>
                <h3 className="heading-h2 mb-2 font-bold">50%</h3>
                <p>Make informed decisions about your study schedule.</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
              <Button
                title="Sign Up"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Sign Up
              </Button>
            </div>
          </div>
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
            className="w-full rounded-image object-cover"
            alt="Relume placeholder image"
          />
        </div>
      </div>
    </section>
  );
}
