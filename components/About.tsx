import Image from 'next/image';
import React from 'react';
import sine from '../public/assets/curve.svg';

function About() {
  return (
    <div
      id="about"
      className="bg-white flex flex-col justify-center items-center"
    >
      <h1 className="relative text-center py-1 text-2xl md:text-3xl underline-effect w-max mx-auto">
        About Us
      </h1>
      <div className="sm: w-3/4 md:w-3/5 text-lg mt-2">
        <div className="body-text space-y-5">
          <p>
            <strong>InfraMaster</strong> is a specialized and tailor-made
            professional course designed specifically for recent civil
            engineering graduates. It offers a unique opportunity for these
            young professionals to kickstart their careers in the civil
            engineering industry by equipping them with practical knowledge and
            hands-on experience through ongoing project exposure.
          </p>
          <p>
            The main objective of InfraMaster is to bridge the gap between
            theoretical education and real-world industry demands. Recognizing
            that traditional academic programs often lack practical application,
            the course aims to provide participants with the necessary skills
            and expertise that employers seek in new civil engineering recruits.
          </p>

          <br></br>
        </div>
      </div>
      <div className="w-4/5 mx-64">
        <h1 className="text-xl">Key Features of InfraMaster-</h1>
        <br></br>
        <div className="grid sm:grid-cols-3 gap-x-5 md:gap-x-10 gap-y-10 text-center">
          <div className="shadow-lg">
            <div className="bg-slate-700">
              <h1 className="py-3 text-center text-white">
                Tailor-made Curriculum
              </h1>
            </div>
            <p className="p-4 body-text">
              The course curriculum is meticulously crafted by industry experts
              and seasoned professionals to address the specific needs of recent
              civil engineering graduates. It covers essential topics, emerging
              trends, and the latest technologies relevant to the industry.
            </p>
          </div>
          <div className="shadow-lg">
            <div className="bg-slate-700">
              <h1 className="py-3 text-center text-white">
                Practical Industry Knowledge
              </h1>
            </div>
            <p className="p-4 body-text">
              InfraMaster focuses on imparting practical, hands-on knowledge to
              its participants. Through a combination of theoretical sessions
              and practical workshops, students gain insights into real-world
              scenarios and problem-solving approaches.
            </p>
          </div>
          <div className="shadow-lg">
            <div className="bg-slate-700">
              <h1 className="py-3 text-center text-white">
                Ongoing Project Experience
              </h1>
            </div>
            <p className="p-4 body-text">
              One of the standout features of InfraMaster is its unique approach
              to providing ongoing project exposure. Participants are engaged in
              live industry projects, allowing them to gain valuable experience,
              work with teams, and understand project lifecycles from inception
              to completion.
            </p>
          </div>
          <div className="shadow-lg">
            <div className="bg-slate-700">
              <h1 className="py-3 text-center text-white">Industry Mentors</h1>
            </div>
            <p className="p-4 body-text">
              The course offers mentorship by experienced professionals
              currently working in the civil engineering sector. These mentors
              provide valuable guidance, share their expertise, and offer career
              advice, enriching the overall learning experience.
            </p>
          </div>
          <div className="shadow-lg">
            <div className="bg-slate-700">
              <h1 className="py-3 text-center text-white">Skill Development</h1>
            </div>
            <p className="p-4 body-text">
              Participants undergo intensive skill development training,
              including communication skills, project management, teamwork, and
              leadership abilities. These soft skills complement their technical
              knowledge, making them well-rounded professionals.
            </p>
          </div>
          <div className="shadow-lg">
            <div className="bg-slate-700">
              <h1 className="py-3 text-center text-white">
                Networking Opportunities
              </h1>
            </div>
            <p className="p-4 body-text">
              InfraMaster provides ample networking opportunities with industry
              leaders, companies, and potential employers. This enables
              participants to establish valuable connections, enhancing their
              job prospects upon course completion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
