"use client";

import React from "react";

export function Layout90() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-8 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <h3 className="heading-h3 font-bold">
            Stay Informed with Smart Notifications for Your Academic Success
          </h3>
          <p className="text-medium">
            With our Smart Notifications, you’ll always be in the loop. Get
            timely alerts for high workloads, incomplete assignments, and
            reminders for class times. Stay organized and focused, ensuring that
            you never miss a crucial moment in your academic journey.
          </p>
        </div>
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
          className="w-full rounded-image object-cover"
          alt="Relume placeholder image"
        />
      </div>
    </section>
  );
}
