import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Item {
  title: string;
  description?: string;
}

const certificationCourses: Item[] = [
  { title: "Praveshika Certificate", description: "Beginner certificate in performing arts" },
  { title: "Sangeetika Junior Diploma", description: "Entry-level music certification" },
  { title: "Geethika Senior Diploma", description: "Senior-level music certification" },
  { title: "Certificate in Performing Art" },
];

const diplomaCourses: Item[] = [
  { title: "Madhyama Diploma", description: "Intermediate diploma in performing arts" },
  { title: "Vid Diploma", description: "Advanced training diploma" },
  { title: "Kala Ratna with Diploma", description: "Honors with diploma in performing art" },
  { title: "Advanced Diploma in Performing Art" },
  { title: "B.A. (1st to 3rd Year)" },
  { title: "B.P.A. (1st to 3rd Year)" },
  { title: "Master of Arts" },
  { title: "Master of Performing Arts" },
  { title: "Elective Classical Vocal" },
  { title: "Elective Sugam Sangeet" },
  { title: "Bachelor of Arts (1 Year)" },
  { title: "B.A. Instrumental (1 Year)" },
];

const subjects: Item[] = [
  { title: "Guitar" },
  { title: "Violin" },
  { title: "Sitaar" },
  { title: "Tabla" },
  { title: "Singing / Vocal" },
  { title: "Piano" },
  { title: "Flute" },
  { title: "Octapad" },
  { title: "Drums" },
  { title: "Keyboard" },
  { title: "Benjo" },
  { title: "Dholak" },
  { title: "Home Tutor (All Instruments)" },
];

const Section: React.FC<{ title: string; items: Item[] }> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-2xl mb-6 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold text-lg"
      >
        {title}
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="px-6 py-4 bg-gray-50"
          >
            <ul className="grid sm:grid-cols-2 gap-3">
              {items.map((item, idx) => (
                <li
                  key={idx}
                  className="p-3 bg-white rounded-lg shadow hover:shadow-md transition"
                >
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  {item.description && (
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Programs: React.FC = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        🎶 Hidden Pearls Music Programs
      </h2>

      <Section title="🎓 Certification Courses" items={certificationCourses} />
      <Section title="🏅 Diploma Courses" items={diplomaCourses} />
      <Section title="🎵 Instruments & Subjects" items={subjects} />
    </section>
  );
};

export default Programs;
