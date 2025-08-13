import React from 'react';
import { BsMusicNoteBeamed } from 'react-icons/bs';

const LessonCard: React.FC<{
  title: string;
  description: string;
  iconUrl: string;
}> = ({ title, description, iconUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
      <div className="w-16 h-16 bg-beige-900 rounded-full flex items-center justify-center mb-4 mx-auto">
        <img src={iconUrl} alt={title} className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-serif text-beige-900 text-center mb-3">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default LessonCard;
