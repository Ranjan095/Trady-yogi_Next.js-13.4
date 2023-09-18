/** @format */

import React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import FAQCARD from "./FAQ-CARD";
import Link from "next/link";

export default function FAQ() {
  let question = [
    {
      title: "How do I get started?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?",
    },
    {
      title: "How do I get started?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?",
    },
    {
      title: "How do I get started?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?",
    },
    {
      title: "How do I get started?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-2 py-10 md:px-0">
      <div>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
            assumenda
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
          {question.map((faq, i) => (
            <FAQCARD key={i} {...faq} />
          ))}
        </div>
        <p className="textbase mt-6 text-center text-gray-600">
          Can&apos;t find what you&apos;re looking for?{" "}
          <Link
            href="/contact"
            className="font-semibold text-black hover:underline"
          >
            Contact our support
          </Link>
        </p>
      </div>
    </section>
  );
}
