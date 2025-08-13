import React from 'react';

interface ProgramCategory {
  title: string;
  programs: string[];
}

const Programs: React.FC = () => {
  const categories: ProgramCategory[] = [
    {
      title: "Musical Instruments",
      programs: [
        "Guitar", "Ukulele", "Sitar", "Violin", "Tabla", 
        "Piano", "Flute", "Octapad", "Drums", "Harmonium", 
        "Keyboard", "Banjo", "Dholak", "Sarangi", "Saxophone", "Casio"
      ]
    },
    {
      title: "Vocal Training",
      programs: [
        "Classical Singing",
        "Modern Vocal Training",
        "Vocal Music Classes"
      ]
    },
    {
      title: "Learning Options",
      programs: [
        "In-Studio Classes",
        "Home Tutoring",
        "Online Programs"
      ]
    }
  ];

  return (
    <section id="programs" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Our Programs
        </h3>
        <div className="space-y-12">
          {categories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-semibold text-burgundy-900 mb-6">{category.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.programs.map((program, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <h4 className="text-lg font-medium text-gray-900 mb-2">{program}</h4>
                    <a href="#contact" className="text-burgundy-900 hover:text-burgundy-700 text-sm font-medium">
                      Learn more →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-gray-900 mb-8">
            <h2 className="text-2xl font-semibold text-burgundy-300 mb-4">
            Contact specific branches for current schedules, pricing, and program availability. 
            Flexible timing options are available to accommodate your schedule.
            </h2>
          </p>
          <a
            href="/contact"
            className="inline-block bg-burgundy-900 text-white px-8 py-3 rounded-md hover:bg-burgundy-800 transition-colors duration-300"
          >
            {/* Enroll Now Button */}
            <button className="block">Enroll Now</button>
          </a>
         
        </div>
      </div>
    </section>
  );
};

export default Programs;
