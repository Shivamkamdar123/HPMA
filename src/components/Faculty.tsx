import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface FacultyMember {
  id: string;
  name: string;
  title: string;
  specialty: string;
  bio: string;
  image: string;
}

const Faculty: React.FC = () => {
  const [faculty, setFaculty] = useState<FacultyMember[]>([]);

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/faculty');
        setFaculty(response.data.member || []);
      } catch (error) {
        console.error('Error fetching faculty:', error);
      }
    };

    fetchFaculty();
  }, []);

  return (
    <section id="faculty" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Our Distinguished Faculty
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={`/images/faculty/${member.image}`}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-beige-900 font-semibold mb-2">{member.title}</p>
                <p className="text-gray-600 mb-4">{member.specialty}</p>
                <p className="text-gray-500 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
