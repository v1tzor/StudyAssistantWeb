"use client";

import React from "react";
import { Call, LocationOn, Mail } from "relume-icons";

export function Contact19() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Get in Touch</p>
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">Contact Us</h2>
          <p className="text-medium">We'd love to hear from you!</p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-3 md:gap-y-16">
          <div>
            <div className="mb-5 lg:mb-6">
              <Mail className="size-12 text-scheme-text" />
            </div>
            <h3 className="heading-h4 mb-3 font-bold lg:mb-4">Email</h3>
            <p className="mb-5 md:mb-6">
              Reach us at our email for any inquiries.
            </p>
            <a className="underline" href="#">
              hello@relume.io
            </a>
          </div>
          <div>
            <div className="mb-5 lg:mb-6">
              <Call className="size-12 text-scheme-text" />
            </div>
            <h3 className="heading-h4 mb-3 font-bold lg:mb-4">Phone</h3>
            <p className="mb-5 md:mb-6">Call us for immediate assistance.</p>
            <a className="underline" href="#">
              +1 (555) 123-4567
            </a>
          </div>
          <div>
            <div className="mb-5 lg:mb-6">
              <LocationOn className="size-12 text-scheme-text" />
            </div>
            <h3 className="heading-h4 mb-3 font-bold lg:mb-4">Office</h3>
            <p className="mb-5 md:mb-6">
              Visit us at our main office location.
            </p>
            <a className="underline" href="#">
              456 Learning Ave, New York, NY 10001
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
