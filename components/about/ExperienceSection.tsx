import { experience } from "@/data/experiences";

export default function ExperienceSection() {
  return (
    <div className="flex flex-col md:flex-row items-start">
      {/* Sidebar Kiri */}
      <div className="md:w-3/5 mt-8">
        <h1 className="text-4xl font-bold text-white">Experience</h1>
        <p className="md:text-md lg:text-md text-sm text-gray-400 mt-4 leading-relaxed">
          Throughout my journey, I have developed skills in business management,
          design, and software development.
        </p>
      </div>

      {/* Konten Kanan */}
      <div className="w-full md:pl-24 md:px-0 px-5">
        {/* Experience Section */}
        <div className="mt-5 space-y-6 text-gray-400 leading-relaxed">
          {experience.map((exp, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-gray-100">
                {exp.company}
              </h3>
              <p className="text-sm text-gray-500 pb-3">
                {exp.location} | {exp.role} | {exp.period}
              </p>
              <ul className="list-disc md:text-md lg:text-md text-sm list-inside mt-2 text-gray-400">
                {exp.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
