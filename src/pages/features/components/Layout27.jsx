"use client";

import React from "react";

export function Layout27() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="heading-h3 mb-5 font-bold md:mb-6">
              Streamline Your Homework with Smart Management Features
            </h2>
            <p className="text-medium mb-6 md:mb-8">
              Effortlessly add homework tasks and connect them to your classes.
              Our app intelligently identifies your next subject during lessons,
              allowing you to focus on learning.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="heading-h2 mb-2 font-bold">100%</h3>
                <p>Stay organized and efficient in your studies.</p>
              </div>
              <div>
                <h3 className="heading-h2 mb-2 font-bold">100%</h3>
                <p>Maximize your productivity with smart features.</p>
              </div>
            </div>
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
