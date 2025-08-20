import React from "react";

interface ProgramItem {
  name: string;
  image: string;
  description: string;
}

interface ProgramCategory {
  title: string;
  programs: ProgramItem[];
}

const Programs: React.FC = () => {
  const categories: ProgramCategory[] = [
    {
      title: "Musical Instruments",
      programs: [
        {
          name: "Guitar",
          image: "https://cdn.pixabay.com/photo/2017/11/07/00/18/guitar-2925274_640.jpg",
          description: "A versatile string instrument used in classical and modern music.",
        },
        {
          name: "Tabla",
          image: "https://images.pexels.com/photos/16743021/pexels-photo-16743021.jpeg",
          description: "A pair of hand drums essential in Indian classical music.",
        },
        {
          name: "Piano",
          image: "https://images.pexels.com/photos/2043571/pexels-photo-2043571.jpeg",
          description: "A timeless instrument for both classical and contemporary music.",
        },
        {
          name: "Flute",
          image: "https://images.pexels.com/photos/20555922/pexels-photo-20555922.jpeg",
          description: "A woodwind instrument known for its melodious tone.",
        },
         {
          name: "Saxophone",
          image: "https://cdn.pixabay.com/photo/2016/05/24/11/54/saxophone-1412218_640.jpg",
          description: "A brass woodwind instrument known for its use in jazz and blues",
        },
        {
          name: "Sitar",
          image: "https://images.pexels.com/photos/31168773/pexels-photo-31168773.jpeg",
          description: "A traditional Indian string instrument with a rich, resonant sound.",
        },
        {
          name: "Harmonium",
          image: "https://cdn.pixabay.com/photo/2015/08/16/19/55/harmonium-891544_960_720.jpg",
          description: "A free-reed keyboard instrument commonly used in Indian music.",
        },
        {
          name: "Sarangi",
          image: "https://images.pexels.com/photos/8125213/pexels-photo-8125213.jpeg",
          description: "A bowed string instrument known for its deep, emotional tone",
        },
        // ➝ Add more instruments similarly
      ],
    },
    {
      title: "Vocal Training",
      programs: [
        { name: "Classical Singing", image: "https://artiumacademy.mo.cloudinary.net/v1n/blogs/tips-for-developing-your-classical-singing-technique.webp", 
          description: "Traditional Indian & Western classical training." },
        { name: "Modern Vocal Training", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5LuwOz8rS45gy3pPwlM950H9gK6Ibjy49ew&s", 
          description: "Learn modern techniques & stage presence." },
      ],
    },
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
              <h3 className="text-2xl font-semibold text-burgundy-900 mb-6">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.programs.map((program, index) => (
                  <div
                    key={index}
                    className="relative group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                  >
                    {/* Image */}
                    <img
                      src={program.image}
                      alt={program.name}
                      className="h-40 w-full object-cover"
                    />
                    {/* Name */}
                    <div className="p-4">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {program.name}
                      </h4>
                    </div>
                    {/* Hover Details Box */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-90 text-white text-sm p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {program.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-burgundy-300 mb-4">
            Contact specific branches for schedules, pricing, and program availability.
          </h2>
          <a
            href="/contact"
            className="inline-block bg-burgundy-900 text-white px-8 py-3 rounded-md hover:bg-burgundy-800 transition-colors duration-300"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Programs;
