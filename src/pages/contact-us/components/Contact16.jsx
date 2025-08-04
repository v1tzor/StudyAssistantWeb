"use client";

import React from "react";
import { Call, LocationOn, Mail } from "relume-icons";

export function Contact16() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div>
          <div className="mb-12 grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:mb-20 md:grid-cols-[1fr_.75fr] md:gap-x-20 md:gap-y-16">
            <div className="max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Connect</p>
              <h2 className="heading-h2 mb-5 font-bold md:mb-6">
                Get in Touch
              </h2>
              <p className="text-medium">
                We’re here to help you with any inquiries or support you may
                need.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-6 py-2">
                <div className="flex flex-row">
                  <div className="mr-4 md:mb-4">
                    <Mail className="size-6 text-scheme-text" />
                  </div>
                  <div>
                    <h3 className="heading-h6 mb-2 font-bold">Email</h3>
                    <a className="underline" href="#">
                      hello@relume.io
                    </a>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="mr-4 md:mb-4">
                    <Call className="size-6 text-scheme-text" />
                  </div>
                  <div>
                    <h3 className="heading-h6 mb-2 font-bold">Phone</h3>
                    <a className="underline" href="#">
                      +1 (800) 123-4567
                    </a>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="mr-4 md:mb-4">
                    <LocationOn className="size-6 text-scheme-text" />
                  </div>
                  <div>
                    <h3 className="heading-h6 mb-2 font-bold">Office</h3>
                    <p>456 Learning Ave, San Francisco CA 94103 US</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="#" className="justify-self-end md:w-[321.6px] lg:w-auto">
          <img
            src="https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-map-image.svg"
            alt="Relume placeholder map image"
            className="size-full h-[400px] object-cover md:h-[516px]"
          />
        </a>
      </div>
    </section>
  );
}
