import React from "react";
import EventCard from "../components/EventCard";

function Events() {
  const events = [
    {
      title: "Friday Live Drive",
      date: "Every Friday",
      time: "6:00 PM",
      description:
        "Watch our talented students perform live on stage! A weekly showcase of musical talent across various genres.",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      title: "Student Concert Series",
      date: "Last Saturday of Every Month",
      time: "4:00 PM",
      description:
        "Monthly concerts featuring our advanced students performing classical, jazz, and contemporary pieces.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMZyVwGSNZ44Pu0_jc9b8o1LwYEetTawFymQ&s=10",
    },
    {
      title: "Master Class Workshop",
      date: "August 15, 2025",
      time: "2:00 PM - 5:00 PM",
      description:
        "Special workshop with industry professionals. Learn advanced techniques and gain valuable insights.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS44dP0RR8A4l6tXy_kY3AC92Wu1pXTSrMfiQ&s=10",
    },
  ];

  return (
    <div>
      <section className="bg-beige-900 text-gray-900 center-content py-12 mb-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl all-center font-serif mb-4">
            Events & Performances
          </h2>
          <p className="text-xl">
            Join us for live music performances and educational events
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>

        <section className="bg-gray-50 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-serif text-beige-900 mb-4">
            Performance Opportunities
          </h3>
          <div className="space-y-4 text-gray-600">
            <p>
              At our academy, we believe in providing regular performance
              opportunities to help students:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Build confidence on stage</li>
              <li>Gain real performance experience</li>
              <li>Learn to handle performance anxiety</li>
              <li>Showcase their progress to family and friends</li>
              <li>Network with other musicians</li>
            </ul>
          </div>
        </section>

        <section className="text-center py-8">
          <h3 className="text-2xl font-serif text-beige-900 mb-4">
            See All Performances on Social Media
          </h3>
          <p className="text-gray-600 mb-6">
            Our students get priority access to performance opportunities
          </p>

          <a
            href="https://youtube.com/@hiddenpearlsmusicalacademy1192"
            target="_blank"
          >
            <button
              className="px-6 py-3 bg-burgundy-900 text:white rounded-lg shadow-md
             hover:bg-gold-500 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Watch Our Programs
            </button>
          </a>
        </section>
      </div>
    </div>
  );
}

export default Events;
