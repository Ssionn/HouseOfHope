"use client";

const TimelineItem = ({ time, name, action }) => (
  <div className="relative flex items-start mb-4">
    <div className="absolute flex justify-center items-center h-full border-l-[3px] border-purple-300"></div>

    <div className="ml-6">
      <p className="text-xs text-gray-400">{time}</p>
      <p className="text-md font-semibold text-gray-800">{name}</p>
      <p className="text-sm text-gray-600">{action}</p>
    </div>
  </div>
);

export default function Timeline() {
  return (
    <div className="mx-auto ml-4">
      <TimelineItem
        time="3 minuten geleden"
        name="Jelle"
        action="heeft een survey ingeleverd"
      />
      <TimelineItem
        time="32 minuten geleden"
        name="Eline"
        action="heeft een survey ingeleverd"
      />
      <TimelineItem
        time="42 minuten geleden"
        name="Marchantelo"
        action="heeft een survey ingeleverd"
      />
      <TimelineItem
        time="45 minuten geleden"
        name="Annabel"
        action="heeft een survey ingeleverd"
      />
      <TimelineItem
        time="46 minuten geleden"
        name="Simon"
        action="heeft een survey ingeleverd"
      />
    </div>
  );
}
