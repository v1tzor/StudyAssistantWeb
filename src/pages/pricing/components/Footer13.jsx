"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
  YoutubeLogo,
} from "relume-icons";

export function Footer13() {
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <Card className="grid grid-cols-1 gap-x-[4vw] gap-y-12 p-8 md:gap-y-16 md:p-12 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4">
          <div className="flex flex-col items-start">
            <div className="max-w-md">
              <div className="mb-5 md:mb-6">
                <a href="#">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
                    alt="Logo image"
                    className="inline-block"
                  />
                </a>
              </div>
              <h1 className="heading-h1 mb-5 font-bold md:mb-6">
                Stay Organized with StudyAssistant
              </h1>
              <p>
                Your academic journey made easier with our powerful
                organizational tools.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Button title="Learn More">Learn More</Button>
                <Button title="Sign Up" variant="secondary">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-8">
            <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 sm:grid-cols-2 md:gap-x-8 md:gap-y-4">
              <ul>
                <li className="text-small py-2 font-semibold">
                  <a href="#">About Us</a>
                </li>
                <li className="text-small py-2 font-semibold">
                  <a href="#">Contact Us</a>
                </li>
                <li className="text-small py-2 font-semibold">
                  <a href="#">Blog Posts</a>
                </li>
                <li className="text-small py-2 font-semibold">
                  <a href="#">Help Center</a>
                </li>
                <li className="text-small py-2 font-semibold">
                  <a href="#">FAQs</a>
                </li>
              </ul>
              <ul>
                <li className="text-small py-2 font-semibold">
                  <a href="#">Careers</a>
                </li>
                <li className="text-small py-2 font-semibold">
                  <a href="#">Feedback</a>
                </li>
                <li className="text-small py-2 font-semibold">
                  <a href="#">Community</a>
                </li>
                <li className="text-small py-2 font-semibold">
                  <a href="#">Support</a>
                </li>
                <li className="text-small py-2 font-semibold">
                  <a href="#">Resources</a>
                </li>
              </ul>
            </div>
            <div className="grid grid-flow-col grid-cols-[max-content] justify-start gap-x-3 md:justify-end">
              <a href="#">
                <FacebookLogo className="size-6 text-scheme-text" />
              </a>
              <a href="#">
                <InstagramLogo className="size-6 text-scheme-text" />
              </a>
              <a href="#">
                <XLogo className="size-6 p-0.5 text-scheme-text" />
              </a>
              <a href="#">
                <LinkedinLogo className="size-6 text-scheme-text" />
              </a>
              <a href="#">
                <YoutubeLogo className="size-6 text-scheme-text" />
              </a>
            </div>
          </div>
        </Card>
        <div className="text-small flex flex-col-reverse items-start justify-between pt-6 pb-4 md:flex-row md:items-center md:pt-8 md:pb-0">
          <p>© 2024 Relume. All rights reserved.</p>
          <ul className="text-small grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li className="underline">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="underline">
              <a href="#">Terms of Service</a>
            </li>
            <li className="underline">
              <a href="#">Cookies Settings</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
