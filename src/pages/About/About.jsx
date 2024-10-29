import React from "react";

const About = () => {
  const workExperience = [
    {
      jobtitle: "Front end Developer Intern",
      where: "Blackpearl Enterprises",
      date: "Oct 2024 - Present",
    },
    { jobtitle: "Full Stack Web Developer Intern", where: "High Impact Talent", date: "July 2024 - Aug 2024" },
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Mechanical Engineering",
      institution: "Vignan Institute Of Technology And Management (VITAM)",
      date: "2022 – 2025",
    },
    {
      degree: "Diploma in Mechanical Engineering",
      institution: "Aum Sai Institute Of Technical Education",
      date: "2019 – 2022",
    },
  ];

  const skills = {
    frontend: ["HTML", "CSS", "JavaScript", "ReactJS", "Tailwind CSS"],
    backend: ["Node.js", "Express", "MongoDB"],
    additional: ["Creative Thinking", "C++", "GSAP", "Framer Motion", "Git", "VS Code"],
  };

  return (
    <div className="max-w-5xl bg-[#0c0c0c] mx-auto px-4 text-white pt-24">
      <h1 className="text-4xl font-bold mb-6 marcellus-regular">About Me</h1>
      <hr className="border-t border-gray-300 my-4 max-w-[500px] mx-auto" />

      <div className="mb-8 flex flex-col items-center text-center sm:flex-row sm:text-left">
        <div className="text-lg w-full mb-4 sm:mb-0 sm:mr-4">A bit about myself</div>
        <p className="text-md ">
        I'm Sudhansu Sekhar Behera, a Mechanical Engineer starting a career in IT as a Full Stack Developer with the MERN stack. I learned these skills through online courses and enjoy improving every day. I like designing, solving problems, and in my free time, I play chess, sudoku, and look for design ideas on Pinterest.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 marcellus-regular">Work Experience</h3>
        <table className="min-w-full mb-8">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">Job Title</th>
              <th className="py-2 px-4 border-b text-left">Company</th>
              <th className="py-2 px-4 border-b text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {workExperience.map((data, i) => (
              <tr key={i}>
                <th className="py-2 px-4 border-b text-left">{data.jobtitle}</th>
                <td className="py-2 px-4 border-b">{data.where}</td>
                <td className="py-2 px-4 border-b">{data.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 marcellus-regular">Education</h3>
        <table className="min-w-full mb-8">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">Degree</th>
              <th className="py-2 px-4 border-b text-left">Institution</th>
              <th className="py-2 px-4 border-b text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {education.map((data, i) => (
              <tr key={i}>
                <th className="py-2 px-4 border-b text-left">{data.degree}</th>
                <td className="py-2 px-4 border-b">{data.institution}</td>
                <td className="py-2 px-4 border-b">{data.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 marcellus-regular">Skills</h3>
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <div className="md:w-1/3">
            <h4 className="font-semibold mb-2 text-lg">Frontend Skills</h4>
            <ul className="list-disc list-inside space-y-1">
              {skills.frontend.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/3">
            <h4 className="font-semibold mb-2 text-lg">Backend Skills</h4>
            <ul className="list-disc list-inside space-y-1">
              {skills.backend.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/3">
            <h4 className="font-semibold mb-2 text-lg">Additional Skills</h4>
            <ul className="list-disc list-inside space-y-1">
              {skills.additional.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
