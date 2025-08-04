"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { Check, RelumeIcon } from "relume-icons";

export function Pricing5() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-8 w-full max-w-lg lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Premium</p>
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">Pricing Plan</h2>
          <p className="text-medium">
            Choose the plan that fits your needs and unlock the full potential
            of StudyAssistant.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 items-center gap-y-12 md:gap-x-12 md:gap-y-16 lg:grid-cols-2 lg:gap-x-20">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2">
            <div className="flex self-start">
              <div className="mr-6 flex-none self-start">
                <RelumeIcon className="size-8 text-scheme-text" />
              </div>
              <div>
                <h3 className="heading-h6 mb-3 font-bold md:mb-4">
                  Key Features
                </h3>
                <p>
                  AI Learning Assistant with voice control for seamless task
                  management and scheduling.
                </p>
              </div>
            </div>
            <div className="flex self-start">
              <div className="mr-6 flex-none self-start">
                <RelumeIcon className="size-8 text-scheme-text" />
              </div>
              <div>
                <h3 className="heading-h6 mb-3 font-bold md:mb-4">
                  Daily Goals
                </h3>
                <p>
                  Plan your homework and tasks effectively with daily
                  goal-setting features.
                </p>
              </div>
            </div>
            <div className="flex self-start">
              <div className="mr-6 flex-none self-start">
                <RelumeIcon className="size-8 text-scheme-text" />
              </div>
              <div>
                <h3 className="heading-h6 mb-3 font-bold md:mb-4">
                  Cloud Sync
                </h3>
                <p>
                  Access your data anytime, anywhere with secure cloud
                  synchronization across all devices.
                </p>
              </div>
            </div>
          </div>
          <Card className="h-full px-6 py-8 md:p-8">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="heading-h5 mb-2 font-bold">Basic Plan</h4>
                <p>Starting at $2/month</p>
              </div>
              <h5 className="heading-h1 justify-self-end font-bold">$2</h5>
            </div>
            <div className="my-8 h-px w-full shrink-0 bg-scheme-border" />
            <p>Includes:</p>
            <div className="mt-4 mb-8 grid grid-cols-1 gap-y-4 py-2 md:grid-cols-2 md:gap-x-6">
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <p>Voice-controlled AI Assistant</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <p>Daily homework goals</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <p>Cloud data synchronization</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <p>Homework sharing feature</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <p>Class notifications</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <p>Workload reminders</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <p>Personalized user profile</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <p>Detailed analytics</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <p>Multiple organizations support</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <p>Developer support access</p>
              </div>
            </div>
            <div className="my-8 h-px w-full shrink-0 bg-scheme-border" />
            <div>
              <Button title="Get Started" className="w-full">
                Get Started
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
