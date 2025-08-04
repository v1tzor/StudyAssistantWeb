"use client";

import React from "react";
import { RelumeIcon } from "relume-icons";

export function Layout24() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="mb-5 md:mb-6">
              <RelumeIcon className="size-12 text-scheme-text" />
            </div>
            <h3 className="heading-h3 mb-5 font-bold md:mb-6">
              Effortlessly Manage Your Class Schedules with Flexible Scheduling
              Features
            </h3>
            <p className="text-medium">
              With our flexible scheduling, you can easily design recurring
              class schedules and make one-time adjustments for special
              occasions. Track changes and manage your time effectively,
              ensuring you never miss a class or assignment.
            </p>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
