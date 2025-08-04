"use client";

import React from "react";

export function Layout6() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="heading-h3 mb-5 font-bold md:mb-6">
              Meet Your New Study Companion: The Neural Network Assistant
            </h1>
            <p className="text-medium mb-6 md:mb-8">
              Our Neural Network Assistant is designed to enhance your academic
              experience. Chat with an AI bot that can create and schedule
              tasks, analyze your study patterns, and provide solutions to your
              problems.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Task Management
                </h6>
                <p>
                  Easily create and manage tasks tailored to your unique study
                  needs.
                </p>
              </div>
              <div>
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Problem Solving
                </h6>
                <p>
                  Get instant help with academic challenges directly from your
                  AI assistant.
                </p>
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
