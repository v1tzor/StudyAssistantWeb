"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight, RelumeIcon } from "relume-icons";

export function Layout254() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Connect</p>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Stay Connected and Share Effortlessly
            </h2>
            <p className="text-medium">
              Enhance your academic experience by connecting with friends. Share
              schedules and homework seamlessly across all your educational
              platforms.
            </p>
          </div>
        </div>
        <div className="grid place-items-center gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-[1fr_1.5fr_1fr] lg:gap-x-12">
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <RelumeIcon className="size-12 text-scheme-text" />
              </div>
              <h3 className="heading-h5 mb-3 font-bold md:mb-4">
                Collaborate with Peers
              </h3>
              <p>
                Join your friends and streamline your academic responsibilities
                together for better results.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <RelumeIcon className="size-12 text-scheme-text" />
              </div>
              <h3 className="heading-h5 mb-3 font-bold md:mb-4">
                Share Schedules Easily
              </h3>
              <p>
                Keep everyone in sync with shared schedules and homework updates
                for all your classes.
              </p>
            </div>
          </div>
          <div className="relative order-last w-full sm:col-span-2 lg:order-none lg:col-span-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              alt="Relume placeholder image"
              className="h-auto w-full rounded-image object-cover"
            />
          </div>
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <RelumeIcon className="size-12 text-scheme-text" />
              </div>
              <h3 className="heading-h5 mb-3 font-bold md:mb-4">
                Stay Informed Together
              </h3>
              <p>
                Receive notifications about changes and updates to ensure no one
                misses important deadlines.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <RelumeIcon className="size-12 text-scheme-text" />
              </div>
              <h3 className="heading-h5 mb-3 font-bold md:mb-4">
                Boost Your Learning
              </h3>
              <p>
                Collaborating with friends can enhance your understanding and
                retention of course material.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
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
    </section>
  );
}
