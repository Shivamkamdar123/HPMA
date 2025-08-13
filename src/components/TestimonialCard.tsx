import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

interface TestimonialProps {
  text: string;
  author: string;
  role: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ text, author, role, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 relative">
      <div className="absolute -top-6 left-8 text-4xl text-beige-900">
        {FaQuoteLeft({})}
      </div>
      <div className="pt-4">
        <p className="text-gray-600 mb-6 italic">{text}</p>
        <div className="flex items-center">
          <img
            src={image}
            alt={author}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-serif text-beige-900 font-semibold">{author}</h4>
            <p className="text-gray-500 text-sm">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
