import React from "react";
import {
  MusicalNoteIcon,
  AcademicCapIcon,
  UserGroupIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import Hero from "./Hero";
import Programs from "./Programs";
import Faculty from "./Faculty";
import Events from "./Events";
import LessonCard from "./LessonCard";
import TestimonialCard from "./TestimonialCard";
import { Link } from "react-router-dom";

interface Lesson {
  title: string;
  description: string;
  iconUrl: string;
}

interface Testimonial {
  text: string;
  author: string;
  role: string;
  image: string;
}

interface Stat {
  number: string;
  label: string;
}

const Home: React.FC = () => {
  const stats: Stat[] = [
    { number: "1000+", label: "Students Taught" },
    { number: "15+", label: "Expert Instructors" },
    { number: "25+", label: "Programs Offered" },
  ];

  const lessons: Lesson[] = [
    {
      title: "Piano Lessons",
      description:
        "Master the piano through our comprehensive curriculum tailored to all skill levels.",
      iconUrl:
        "https://cdn.pixabay.com/photo/2018/04/29/16/35/piano-3360423_1280.png",
    },
    {
      title: "Guitar Classes",
      description:
        "Learn acoustic or electric guitar with personalized instruction from expert musicians.",
      iconUrl:
        "https://cdn.pixabay.com/photo/2023/05/22/18/11/guitar-8011240_1280.jpg",
    },
    {
      title: "Drum Lessons",
      description:
        "Develop your rhythm and technique with our experienced drum instructors.",
      iconUrl:
        "https://cdn.pixabay.com/photo/2016/10/25/18/14/audio-1769600_1280.png",
    },
    {
      title: "Violin Classes",
      description:
        "Experience the beauty of classical music with our violin programs.",
      iconUrl:
        "https://cdn.pixabay.com/photo/2012/04/13/20/54/violin-33610_1280.png",
    },
  ];

  const testimonials: Testimonial[] = [
    {
      text: "The instructors here are incredible. My daughter has improved so much since she started taking piano lessons.",
      author: "Walter White",
      role: "Parent",
      image:
        "https://media.istockphoto.com/id/465182557/photo/a-music-teacher-standing-in-front-of-a-chalkboard.jpg?s=612x612&w=0&k=20&c=-WE3dNOcpzcXLsF06SfpW81E56LgK5H-PaJKsEiSXMY=",
    },
    {
      text: "I've been taking guitar lessons for 6 months and the progress I've made is amazing. The teachers are patient and skilled.",
      author: "Michael Chen",
      role: "Student",
      image:
        "https://media.istockphoto.com/id/1343586032/photo/school-children-singing-and-playing-keyboard-musical-instrument-with-their-teacher-in-music.jpg?s=612x612&w=0&k=20&c=B7Q66awlFxruW-kSpnTtQjePZ-lshDZ4Su1EcyrIvwM=",
    },
    {
      text: "The performance opportunities and recording sessions have helped me grow as a musician tremendously.",
      author: "john snow",
      role: "Student",
      image:
        "https://media.istockphoto.com/id/2149793122/photo/boy-playing-violin-with-instructors-help-at-music-lessons.jpg?s=612x612&w=0&k=20&c=DqzWPOz4d5gYWBIyEwTZlQf7c0YsMhy1nUMP0aD5t9E=",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero />
      <div className="flex justify-center my-8">
        <div className="h-[4px] w-1/2 bg-gradient-to-r from-burgundy-900 via-gold-500 to-burgundy-900 rounded-full"></div>
      </div>

      {/* Featured Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-beige-900 mb-4">
              Discover Our Programs
            </h2>
            <p className="text-xl text-gray-600">
              Choose from our wide range of music lessons
            </p>
          </div>
          <div className="flex items-center justify-center my-10">
            <div className="h-[2px] w-1/4 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
            <span className="mx-3 text-gold-500 text-xl">🎵</span>
            <div className="h-[2px] w-1/4 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {lessons.map((lesson, index) => (
              <LessonCard key={index} {...lesson} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://media.istockphoto.com/id/2071941644/vector/children-in-a-music-class-sit-on-the-floor-joyfully-exploring-various-instruments-like-drum.jpg?s=612x612&w=0&k=20&c=T8wAG6gLkfzFop4dpqMKmzBOz5amrCNanzBStMEt-yk="
                alt="Our Music Studio"
                className="rounded-lg shadow-xl full-width full-height "
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-beige-900 mb-6">
                World-Class Music Education
              </h2>

              <p className="text-gray-600 mb-6">
                With over 15 years of excellence in music education, we provide
                a nurturing environment where students can discover their
                musical potential. Our state-of-the-art facilities and
                experienced instructors ensure the highest quality of music
                education.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <AcademicCapIcon className="w-6 h-6 text-beige-900 mr-3" />
                  <span>Certified Music Instructors</span>
                </li>
                <li className="flex items-center">
                  <UserGroupIcon className="w-6 h-6 text-beige-900 mr-3" />
                  <span>Small Class Sizes</span>
                </li>
                <li className="flex items-center">
                  <MusicalNoteIcon className="w-6 h-6 text-beige-900 mr-3" />
                  <span>Regular Performance Opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center my-8">
        <div className="w-1/2">
          <div className="h-[2px] bg-yellow-800 rounded-full"></div>
          <div className="h-[2px] bg-burgundy-900 rounded-full mt-1"></div>
        </div>
      </div>

      {/* Programs Section */}
      <Programs />
      <div className="flex items-center justify-center my-10">
        <div className="h-[2px] w-1/4 bg-gold-500"></div>
        <div className="w-2 h-2 mx-2 rounded-full bg-burgundy-900"></div>
        <div className="h-[2px] w-1/4 bg-gold-500"></div>
      </div>

      {/* Faculty Section */}
      {/* Uncomment the following line to include the Faculty section */}
      {/* <Faculty /> */}

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-beige-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600">
              Hear from our community of musicians
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial: Testimonial, index: number) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <Events />

      {/* Online & Offline Classes Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <VideoCameraIcon className="w-12 h-12 text-beige-900 mb-4" />
              <h3 className="text-2xl font-serif text-beige-900 mb-4">
                Online Classes
              </h3>
              <p className="text-gray-600 mb-6">
                Learn from anywhere with our interactive online lessons. Get the
                same quality instruction from the comfort of your home.
              </p>
              <button className="bg-beige-900 text-white px-6 py-2 rounded-md hover:bg-beige-800 transition-colors">
                Enroll Now
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <MusicalNoteIcon className="w-12 h-12 text-beige-900 mb-4" />
              <h3 className="text-2xl font-serif text-beige-900 mb-4">
                In-Studio Classes
              </h3>
              <p className="text-gray-600 mb-6">
                Experience hands-on learning in our professional studios with
                state-of-the-art equipment and instruments.
              </p>
              <button className="bg-beige-900 text-white px-6 py-2 rounded-md hover:bg-beige-800 transition-colors">
                Book a Tour
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center my-10">
        <div className="h-[1px] w-1/4 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
        <span className="mx-4 text-gold-500 text-2xl font-serif">&amp;</span>
        <div className="h-[1px] w-1/4 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
      </div>

      {/* Contact Section */}

      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-beige-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600">We'd love to hear from you!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-serif text-beige-900 mb-4">
                Contact Us
              </h3>
              <p className="text-gray-600 mb-6">
                Have questions? Reach out to our team for more information about
                our programs.
              </p>
              <button className="bg-beige-900 text-white px-6 py-2 rounded-md hover:bg-beige-800 transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-serif text-beige-900 mb-4">
                Visit Us
              </h3>
              <p className="text-gray-600 mb-6">
                Come see our facilities and meet our instructors. We can't wait
                to welcome you!
              </p>
              <div className="flex items-center"></div>
            </div>
          </div>
        </div>
        {/* Schedule a Tour Button on the center with animation */}
        <div className="text-center mt-8 down -12">
          <Link
            to="/contact"
            className="inline-block bg-orange-500 text-gray-900 px-8 py-3 rounded-md hover:bg-yellow-400 transition-colors duration-300"
          >
            Schedule a Tour
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-beige-900 text-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat: Stat, index: number) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
