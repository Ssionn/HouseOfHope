"use client";
import { useState, useEffect } from 'react';
import { getQuestions } from '../../../../actions/faq';

export default function FaqPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [faqData, setFaqData] = useState<object | null | undefined>(null);

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    try {
        async function getFaqQuestions() {
            const questions = await getQuestions();

            setFaqData(questions);
        }

        getFaqQuestions();
    } catch (err) {
        console.error(err);
    }
    }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">FAQs</h1>
      <div className="space-y-4">
      {faqData && Object.entries(faqData).map(([key, faq], index) => (
          <div
            key={key}
            className="border border-gray-200 rounded-lg"
          >
            <button
              className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-xl font-medium">{faq.question}</span>
              <span>
                {activeIndex === index ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </span>
            </button>
            {activeIndex === index && (
              <div className="p-4 text-gray-700 border-t border-gray-200">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button className="text-sm text-blue-500">
          See All FAQs
        </button>
        <p className="mt-4 text-sm">
          Contact us at <a href="mailto:houseofhope@hope.com" className="text-blue-600 underline">HouseOfHope@hope.com</a> via email!
        </p>
      </div>
    </div>
  );
}
