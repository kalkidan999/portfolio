import React from "react";

const Resume: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950 tex-neutral-900 dark:text-neutral-100">
      <main className="flex-1 max-w-5xl mx-auto px-6 py-20 space-y-16">
          {/* Header */}
          <section>
            <h1 className="text-4xl font-bold mb-4">Resume</h1>
            <p className="text-neutral-600 dark:text-neutral-400">
               Mobile Engineer specializing in scalable corporate applications.
            </p>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-semibold mb-6" >Experience</h2>
            <div className="space-y-8">
              {/* Experience 1 */}
              <div>
                <h3 className="font-semibold">Senior Software Engineer</h3>
                <p className="text-sm text-neutral-500">Step Innovations Africa · 2025 - Present</p>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                Led mobile application development initiatives, configured and customized open-source platforms for enterprise use, and mentored junior engineers to ensure high-quality, scalable software delivery.
              </p>
              </div>
              {/* Experience 2 */}
              <div>
                <h3 className="font-semibold">Lead Mobile Application Developer</h3>
                <p className="text-sm text-neutral-500">Belcash Technology Solutions · 2021 - Present</p>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                Led the design, architecture, and delivery of scalable mobile applications, ensuring high code quality, performance optimization, and alignment with business objectives.
              </p>
              </div>
              {/* Experience 3 */}
               <div>
                <h3 className="font-semibold">Software Engineer</h3>
                <p className="text-sm text-neutral-500">CIYA Technologies · 2021 - 2022</p>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                Developed a ride-sharing app using Flutter for both iOS and Android platforms, with a focus on user-friendly interfaces and real-time GPS tracking.
              </p>
              </div>
            </div>
          </section>

          {/* Skills */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>
          <div className="flex flex-wrap gap-3">
            {["Dart", "Flutter", "Node.Js", "iOS", "Android", "Bloc","Provider", "TypeScript", "React", "REST APIs", "Firebase", "MongoDB" ].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm rounded-md bg-gray-100 dark:bg-neutral-800"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </section>
        {/* Download */}
        <section>
          <a
            href="/resume.pdf"
            download="Kalkidan_Demes_Resume.pdf"
            className="inline-block px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Download Resume
          </a>
        </section>
        
      </main>
    </div>
    // <section className="py-20 px-4 text-center max-w-4xl mx-auto min-h-full bg-white dark:bg-neutral-950">
    //   <h1 className="text-4xl font-bold mb-6 text-neutral-700 dark:text-neutral-300">My Resume</h1>
    //   <p className="text-gray-700 dark:text-neutral-300 mb-4">
    //     Here you can display your work experience, education, and skills in detail.
    //   </p>
    //   <p className="text-gray-700  dark:text-neutral-300">
    //     You can add download buttons or embed a PDF viewer here.
    //   </p>
    // </section>
  );
};

export default Resume;