"use client"
import React, { useState, useRef } from 'react';
import Link from 'next/link';

const FAQ: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  const faqData = [
    {
      question: "How can I donate to your organization?",
      answer: "You can donate through our website by clicking on the 'Donate' button, or you can send a check to our mailing address. We also accept donations through various online payment platforms."
    },
    {
      question: "What percentage of my donation goes to the cause?",
      answer: "We ensure that 85% of your donation goes directly to our programs and services, while the remaining 15% covers administrative and fundraising costs."
    },
    {
      question: "Can I volunteer with your organization?",
      answer: "Yes, we welcome volunteers! Please visit our 'Get Involved' page to learn more about volunteer opportunities and how to sign up."
    },
    {
      question: "Are my donations tax-deductible?",
      answer: "Yes, all donations to our organization are tax-deductible. You will receive a receipt for your donation which you can use for tax purposes."
    },
    {
      question: "How do you ensure transparency and accountability?",
      answer: "We are committed to transparency and accountability. We publish our annual reports and financial statements on our website, and we are regularly audited by external agencies."
    }
  ];

  return (
    <>
      <section>
        <div className="py-24 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="flex flex-col text-left basis-1/2">
            <p className="inline-block font-semibold text-primary mb-4">Charity FAQ</p>
            <p className="sm:text-4xl text-3xl font-extrabold text-base-content">Frequently Asked Questions</p>
          </div>
          <ul className="basis-1/2">
            {faqData.map((item, index) => (
              <li key={index}>
                <button
                  className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                  aria-expanded={expandedIndex === index}
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="flex-1 text-base-content">{item.question}</span>
                  <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${expandedIndex === index ? 'rotate-90' : ''}`}></rect>
                    <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out"></rect>
                  </svg>
                </button>
                <div
                  className="transition-all duration-300 ease-in-out overflow-hidden"
                  style={{ maxHeight: expandedIndex === index ? '1000px' : '0', transition: 'max-height 0.3s ease-in-out' }}
                >
                  <div className="pb-5 leading-relaxed">
                    <div className="space-y-2 leading-relaxed">{item.answer}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="bg-white">
          <div className="mx-auto py-16 sm:px-6 lg:px-8">
            <div className="relative isolate overflow-hidden px-6 py-24 text-center sm:rounded-3xl sm:px-16">
              <h2 className="font-nudge-extrabold mx-auto max-w-2xl text-3xl font-bold uppercase tracking-wide sm:text-4xl">Join our Community Now</h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">Be a part of our community and help us bring hope and support to those in need. Your involvement makes a difference.</p>
              <div className="isolate mt-8 flex items-center justify-center -space-x-2 overflow-hidden">
                <span className="!ml-2 font-bold italic text-red-500">Join these awesome members</span>
              </div>
              <div className="mt-12 flex items-center justify-center gap-x-6">
                <Link href="/contact-us" className="w-[180px] text-center rounded-lg bg-red-500 px-6 py-4 font-semibold text-white shadow-sm hover:bg-red-600">
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;