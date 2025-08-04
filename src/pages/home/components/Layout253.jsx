"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight, RelumeIcon } from "relume-icons";

export function Layout253() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid auto-cols-fr grid-cols-1 items-start justify-start gap-y-12 md:grid-cols-[0.5fr_1fr] md:gap-x-12 md:gap-y-16 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Organize</p>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Effortless Class and Assignment Management
            </h2>
            <p className="text-medium">
              Easily categorize your classes and assignments by educational
              institutions. Maximize your learning experience with a structured
              approach.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button variant="secondary">Learn More</Button>
              <Button
                iconRight={<ChevronRight className="text-scheme-text" />}
                variant="link"
                size="link"
              >
                Sign Up
              </Button>
            </div>
          </div>
          <div className="grid w-full auto-cols-fr grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-y-16 lg:gap-x-12">
            <div>
              <div className="mb-5 md:mb-6">
                <RelumeIcon className="size-12 text-scheme-text" />
              </div>
              <h1 className="heading-h4 mb-5 font-bold md:mb-6">
                Tailored for All Educational Institutions
              </h1>
              <p>From schools to universities, we've got you covered.</p>
            </div>
            <div>
              <div className="mb-5 md:mb-6">
                <RelumeIcon className="size-12 text-scheme-text" />
              </div>
              <h1 className="heading-h4 mb-5 font-bold md:mb-6">
                Streamlined Workflow for Better Productivity
              </h1>
              <p>Stay organized and focused on your academic goals.</p>
            </div>
            <div>
              <div className="mb-5 md:mb-6">
                <RelumeIcon className="size-12 text-scheme-text" />
              </div>
              <h1 className="heading-h4 mb-5 font-bold md:mb-6">
                Connect and Collaborate with Peers
              </h1>
              <p>Share schedules and assignments effortlessly with friends.</p>
            </div>
            <div>
              <div className="mb-5 md:mb-6">
                <RelumeIcon className="size-12 text-scheme-text" />
              </div>
              <h1 className="heading-h4 mb-5 font-bold md:mb-6">
                Achieve More with Smart Scheduling Tools
              </h1>
              <p>Optimize your time management with flexible scheduling.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
