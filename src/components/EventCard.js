import React from "react";

function EventCard({ title, date, time, description, image }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-6">
        <h3 className="text-xl font-serif text-beige-900 mb-2">{title}</h3>
        <div className="text-gold-600 mb-2">
          <span>{date}</span>
          {time && <span className="ml-2">• {time}</span>}
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default EventCard;
