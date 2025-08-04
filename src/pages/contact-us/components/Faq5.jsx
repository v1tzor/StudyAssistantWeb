"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { Add } from "relume-icons";

export function Faq5() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="md:mb-18 mb-12 max-w-lg lg:mb-20">
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">FAQs</h2>
          <p className="text-medium">
            Find quick answers to your questions about the StudyAssistant app
            and its features.
          </p>
        </div>
        <Accordion
          type="multiple"
          className="grid items-start justify-stretch gap-4"
        >
          <Card>
            <AccordionItem value="item-0" className="border-none px-5 md:px-6">
              <AccordionTrigger
                icon={
                  <Add className="text-scheme-text size-7 shrink-0 transition-transform duration-300 md:size-8" />
                }
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                How to reset password?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                To reset your password, go to the login page and click on
                'Forgot Password?'. Follow the instructions sent to your email
                to create a new password.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-1" className="border-none px-5 md:px-6">
              <AccordionTrigger
                icon={
                  <Add className="text-scheme-text size-7 shrink-0 transition-transform duration-300 md:size-8" />
                }
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                Is there a mobile app?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Yes! The StudyAssistant app is available for both iOS and
                Android devices. Download it from the App Store or Google Play
                to get started.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-2" className="border-none px-5 md:px-6">
              <AccordionTrigger
                icon={
                  <Add className="text-scheme-text size-7 shrink-0 transition-transform duration-300 md:size-8" />
                }
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                Can I share schedules?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Absolutely! You can easily share your schedules and homework
                with friends within the app. Stay connected and support each
                other in your studies.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-3" className="border-none px-5 md:px-6">
              <AccordionTrigger
                icon={
                  <Add className="text-scheme-text size-7 shrink-0 transition-transform duration-300 md:size-8" />
                }
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                What is premium plan?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                The premium plan offers additional features such as advanced
                analytics, priority support, and offline access. Upgrade to
                enhance your StudyAssistant experience.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-4" className="border-none px-5 md:px-6">
              <AccordionTrigger
                icon={
                  <Add className="text-scheme-text size-7 shrink-0 transition-transform duration-300 md:size-8" />
                }
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                How to contact support?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                You can contact our support team through the 'Contact Us'
                section on our website. We’re here to help with any questions or
                issues you may have.
              </AccordionContent>
            </AccordionItem>
          </Card>
        </Accordion>
        <div className="md:mt-18 mt-12 lg:mt-20">
          <h4 className="heading-h4 mb-3 font-bold md:mb-4">
            Still have questions?
          </h4>
          <p className="text-medium">Reach out to us anytime!</p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
