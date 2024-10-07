"use client";
import { useState } from 'react';

const faqData = [
  {
    question: "Hoe werkt de online test?",
    answer: "De online test werkt eenvoudig en intuïtief. Gebruikers beantwoorden een reeks persoonlijkheidsvragen die zijn ontworpen om hun teamrol en -samenstelling beter te begrijpen. Volg gewoon de stappen op het scherm en vul elke vraag in. Zodra alle vragen zijn beantwoord, wordt er een profiel aangemaakt op basis van de antwoorden, en kan de gebruiker of teamleider de resultaten bekijken.",
  },
  {
    question: "Is de test gratis?",
    answer: "Ja, de basisversie van de test is volledig gratis. Gebruikers kunnen de test invullen zonder kosten. Voor geavanceerde functies of diepgaandere analyses kan er een betaalde optie beschikbaar zijn voor teamleiders die meer functionaliteiten nodig hebben.",
  },
  {
    question: "Hoe lang duurt het om de test in te vullen?",
    answer: "Het invullen van de test duurt meestal tussen de 10 en 15 minuten. Dit kan variëren afhankelijk van hoe snel de gebruiker de vragen beantwoordt.",
  },
  {
    question: "Wat gebeurt er met mijn antwoorden?",
    answer: "Jouw antwoorden worden veilig opgeslagen in ons systeem. De gegevens worden alleen gebruikt voor het maken van jouw persoonlijkheidsprofiel en zijn toegankelijk voor jou en jouw teamleider. We behandelen jouw privacy met de hoogste zorg en voldoen aan de AVG-voorschriften (Algemene Verordening Gegevensbescherming) voor gegevensbeveiliging.",
  },
  {
    question: "Kan ik de test meerdere keren doen?",
    answer: "Ja, je kunt de test meerdere keren doen. Er is geen limiet aan het aantal keren dat je de test kunt invullen, en je kunt de resultaten van elke poging opslaan en vergelijken als je dat wilt.",
  },
  {
    question: "Hoe krijg ik de resultaten van de test?",
    answer: "Zodra je de test hebt afgerond, worden de resultaten direct op de website getoond. Je kunt ze ook downloaden als een rapport of per e-mail ontvangen, afhankelijk van jouw voorkeur.",
  },
  {
    question: "Heb ik een account nodig om de test in te vullen?",
    answer: "Ja, je moet een account aanmaken om de test in te vullen. Dit zorgt ervoor dat jouw resultaten veilig worden opgeslagen en dat je deze later opnieuw kunt bekijken. Het account helpt je ook om toegang te krijgen tot andere functies, zoals het bekijken van teamanalyses en het volgen van je voortgang.",
  },
  {
    question: "Wat als ik technische problemen ondervind tijdens de test?",
    answer: "Als je technische problemen ondervindt, zoals een vastgelopen pagina of problemen met het laden van de test, kun je proberen de pagina te verversen of een andere browser te gebruiken. Als het probleem blijft bestaan, neem dan contact op met onze technische ondersteuning via HouseOf@hope.com en we helpen je zo snel mogelijk.",
  },
  {
    question: "Kan ik mijn resultaten later terugzien?",
    answer: "Ja, je kunt je resultaten later terugzien via je persoonlijke dashboard. Zodra je bent ingelogd, heb je toegang tot eerdere testresultaten en kun je ze op elk moment bekijken.",
  },
  {
    question: "Is de test beschikbaar op mobiele apparaten?",
    answer: "Ja, de test is volledig compatibel met mobiele apparaten en tablets. Je kunt de test invullen waar je ook bent, op elk apparaat met een internetverbinding.",
  },
  {
    question: "Hoelang worden de resultaten bewaard?",
    answer: "De resultaten worden bewaard zolang je een account hebt bij House of Hope. Je kunt ze op elk moment terugzien via je persoonlijke dashboard. Als je je account verwijdert, worden alle gerelateerde gegevens, inclusief je testresultaten, permanent verwijderd.",
  },
  {
    "question": "Wat gebeurt er als mijn sessie halverwege stopt? Wordt mijn sessie opgeslagen?",
    "answer": "Ja, je sessie wordt automatisch opgeslagen onder je account-ID. Dit betekent dat als je de sessie om wat voor reden dan ook halverwege moet stoppen, je op elk moment kunt terugkeren naar waar je was gebleven. Zodra je weer inlogt op je account, zal het systeem je voortgang laden, zodat je zonder problemen verder kunt gaan. Zorg er wel voor dat je bent ingelogd voordat je de test start om ervoor te zorgen dat je voortgang wordt opgeslagen."
  }, 
];

export default function FaqPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the accordion if it's already open
    } else {
      setActiveIndex(index); // Open the clicked accordion
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">FAQs</h1>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
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
