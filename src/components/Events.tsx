import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  venue: string;
}

const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/events');
        setEvents(response.data.event || []);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);
<hr className="w-1/2 border-t-2 border-dashed border-gold-500 mx-auto" />

  return (
    <section id="events" className="py-16 bg-gray-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Upcoming Events
        </h2>
        <hr className="w-1/2 border-t-2 border-gray-900 mx-auto" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-gray-600 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
              <div className="text-beige-900 mb-4">
                <p>{new Date(event.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</p>
                <p>{event.time} - {event.venue}</p>
              </div>
              <p className="text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
<hr className="w-1/2 border-t-2 border-burgundy-900 mx-auto" />

export default Events;
