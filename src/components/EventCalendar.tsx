"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Image from "next/image";
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Meeting",
    time: "12:00 PM - 2:00 PM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe.",
  },
  {
    id: 2,
    title: "Workshop",
    time: "3:00 PM - 5:00 PM",
    description:
      "An interactive workshop on project management and collaboration.",
  },
  {
    id: 3,
    title: "Lunch Break",
    time: "1:00 PM - 1:30 PM",
    description: "A short lunch break to relax and recharge.",
  },
];
const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold my-4">Students</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>

      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="border-2 border-t-4 odd:border-t-dhruboSky
            even:border-t-dhruboPurple border-gray-100 rounded-md p-5"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-xs text-gray-300">{event.time}</span>
            </div>

            <p className="text-sm mt-2 text-gray-400">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
