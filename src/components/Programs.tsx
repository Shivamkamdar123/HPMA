import React from "react";

interface ProgramItem {
  name: string;
  image: string;
  description: string;
}

const programs: ProgramItem[] = [
  {
    name: "Guitar",
    image:
      "https://cdn.pixabay.com/photo/2017/11/07/00/18/guitar-2925274_640.jpg",
    description:
      "A versatile string instrument used in classical and modern music.",
  },
  {
    name: "Tabla",
    image:
      "https://images.pexels.com/photos/16743021/pexels-photo-16743021.jpeg",
    description:
      "A pair of hand drums essential in Indian classical music. Known for its rhythmic depth.",
  },
  {
    name: "Piano",
    image: "https://images.pexels.com/photos/2043571/pexels-photo-2043571.jpeg",
    description:
      "A timeless instrument for both classical and contemporary music.",
  },
  {
    name: "Flute",
    image:
      "https://images.pexels.com/photos/20555922/pexels-photo-20555922.jpeg",
    description:
      "A woodwind instrument known for its melodious tone in Indian ragas and Western orchestras.",
  },
  {
    name: "Harmonium",
    image:
      "https://i.pinimg.com/1200x/0e/ec/31/0eec313b5d51f29ad4db4a7e2357c9c1.jpg",
    description:
      "A keyboard instrument producing sound with reeds, widely used in Indian music.",
  },
  {
    name: "Saxophone",
    image:
      "https://cdn.pixabay.com/photo/2017/09/21/18/46/saxophone-2772907_1280.jpg",
    description:
      "A brass woodwind instrument, iconic in jazz and blues.",
  },
  {
    name: "Ukele",
    image: "https://cdn.pixabay.com/photo/2021/11/13/09/44/ukulele-6790888_1280.jpg",
    description:
      "A Hawaiian small guitar-like instrument with cheerful sound.",
  },
  {
    name: "Violin",
    image:
      "https://cdn.pixabay.com/photo/2015/11/25/05/08/violin-1061240_1280.jpg",
    description:
      "A bowed string instrument, essential in orchestras and classical music",
  },
  {
    name: "Octapad",
    image:
      "https://i.pinimg.com/1200x/b2/9e/dd/b29edd253df856aed4efa9d8e46042eb.jpg",
    description:
      "An electronic percussion instrument, essentially a compact drum machine, that utilizes eight touch-sensitive pads to trigger various sounds and samples.",
  },

];

const Programs: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Our Programs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl group-hover:scale-100 transition duration-300"
            >
              {/* Card Image */}
              <img
                src={program.image}
                alt={program.name}
                className="h-48 w-full object-cover"
              />

              {/* Card Title */}
              {/* <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {program.name}
                </h3>
              </div> */}

              {/* Hover Popup */}
              <div className="cursor-pointer absolute inset-0 bg-opacity-80 bg-black/50 text-white p-6 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition duration-300">
                <h3 className="text-5xl font-bold mb-2">{program.name}</h3>
                <p className="text-md">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
