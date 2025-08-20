import React, { JSX } from "react";
import {
  AcademicCapIcon,
  UserGroupIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

interface Achievement {
  icon: JSX.Element;
  title: string;
  description: string;
}

const About: React.FC = () => {
  const achievements: Achievement[] = [
    {
      icon: <AcademicCapIcon className="w-8 h-8" />,
      title: "Expert Faculty",
      description:
        "Our instructors are graduates from prestigious music schools and have years of performance experience.",
    },
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: "Student Success",
      description:
        "Over 1000 students have completed our programs and gone on to successful music careers.",
    },
    {
      icon: <TrophyIcon className="w-8 h-8" />,
      title: "Recognition",
      description:
        "Recognized as one of the leading music education institutions in the region.",
    },
  ];

  return (
    <div>
      <section className="bg-background-amber text-text-brown py-12 mb-12">
        <div className="relative">
          <h2 className="text-4xl font-serif mb-4 text-center">
            About Our Academy
          </h2>
          <p className="text-xl text-center">
            Excellence in Music Education Since 2005
          </p>
        </div>
      </section>
      <div className="container mx-auto px-15">
        <section className="mb-11">
          <div className="h-[3px] w-2/3 mx-auto my-8 bg-gradient-to-r from-transparent via-yellow-400 to-transparent shadow-[0_0_10px_#FFD700]"></div>

          {/* <div className="flex flex-col my-8">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-[1px] bg-gold-500 my-[2px]"></div>
            ))}
          </div> */}

          {/* <div className="relative w-full my-8">
            <svg
              viewBox="0 0 1440 100"
              className="w-full h-8"
              preserveAspectRatio="none"
            >
              <path
                fill="#FFD700"
                d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"
              ></path>
            </svg>
          </div> */}

          {/* <div className="flex justify-center my-8">
            <div className="flex space-x-5">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-gradient-to-br from-gold-500 to-burgundy-900 rotate-45 transform"
                ></div>
              ))}
            </div>
          </div> */}

          {/* image */}
          <div className="flex justify-center h-100 mb-8">
            <img
              src="https://yt3.googleusercontent.com/NG9nBnktmGnrJBOiZ_qp7mDDiRs3HPxIwO5asUjboxAzI3I1DqFQEyLZGFq-FI2EVFv8WGUABw=w1138-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
              alt="Our Story"
              className="className= w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          <h3 className="text-2xl font-serif text-accent-maroon mb-6">
            Our Story
          </h3>
          <div className="prose max-w-none text-text-charcoal space-y-4">
            <p>
              Founded in 2010, our music academy has been dedicated to nurturing
              musical talent and fostering a love for music in students of all
              ages. What started as a small studio has grown into a
              comprehensive music education center, thanks to our commitment to
              excellence and our passion for teaching.
            </p>
            <p>
              We believe that music education goes beyond just learning to play
              an instrument. It's about developing discipline, creativity, and
              self-expression. Our holistic approach combines technical training
              with performance opportunities, ensuring that our students become
              well-rounded musicians.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center p-6 bg-background-peach rounded-lg"
            >
              <div className="text-accent-coral flex justify-center mb-4">
                {achievement.icon}
              </div>
              <h4 className="text-xl font-serif text-accent-maroon mb-2">
                {achievement.title}
              </h4>
              <p className="text-text-charcoal">{achievement.description}</p>
            </div>
          ))}
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-serif text-accent-maroon mb-6">
            Our Approach
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-serif text-accent-maroon">
                Personalized Learning
              </h4>
              <p className="text-text-charcoal">
                We understand that every student is unique. Our instructors
                create personalized learning plans that cater to individual
                goals and learning styles.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-serif text-accent-maroon">
                Professional Development
              </h4>
              <p className="text-text-charcoal">
                Beyond teaching music, we prepare our students for professional
                opportunities through performance training, recording sessions,
                and industry workshops.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-background-beige p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-serif text-accent-maroon mb-6">
            Our Facilities
          </h3>
          <ul className="space-y-4 text-text-charcoal">
            <li>
              • State-of-the-art recording studio with professional equipment
            </li>
            <li>• Soundproofed practice rooms with high-quality instruments</li>
            <li>• Performance hall for recitals and concerts</li>
            <li>• Modern classrooms with multimedia capabilities</li>
            <li>• Student lounge and resource library</li>
          </ul>
        </section>

        <section className="text-center py-8">
          <h3 className="text-2xl font-serif text-accent-maroon mb-4">
            Join Our Musical Community
          </h3>
          <p className="text-text-charcoal mb-6">
            Experience the difference of learning with passionate educators
          </p>
          <button className="btn-primary">it</button>
        </section>
      </div>
    </div>
  );
};

export default About;
