import React from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, BookOpen, Building2, Code2, Users } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section with Profile */}
      <div className="relative bg-gradient-to-r from-green-400 to-green-500 h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="relative z-20 text-center py-8">
          <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img 
              src="https://drive.google.com/file/d/18ld9Exzrwb4737h0qDHrZ5gKH9Dnf5wh/view?usp=sharing"
              alt="Daley Nyae Tinga"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Daley Nyae Tinga</h1>
          <p className="text-xl text-white/90 mb-3">Backend Developer & Technical Writer</p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:tingadaley@gmail.com" className="text-white hover:text-white/80 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/daley-nyae" className="text-white hover:text-white/80 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/nyae44" className="text-white hover:text-white/80 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="tel:0742660902" className="text-white hover:text-white/80 transition-colors">
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8 -mt-8 sm:-mt-16 relative z-30">
        {/* Education Section */}
        <section className="mt-12 sm:mt-16 mb-16">
          <div className="flex items-center mb-6">
            <div className="bg-white p-2 rounded-lg shadow-md">
              <BookOpen className="w-6 h-6 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 ml-3">Education</h2>
          </div>
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-gray-900">Technical University of Mombasa</h3>
              <p className="text-gray-600">Bachelor of Science in Computer Science</p>
              <p className="text-gray-500">Expected 2027 • Mombasa, Kenya</p>
              <p className="mt-2 text-gray-700">Relevant Coursework: Data Structures and Algorithms (Python), Prob & Stat in CS (Python), Database Design, Advanced Database Management Systems</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-gray-900">Pwani University</h3>
              <p className="text-gray-600">Diploma in Computer Science</p>
              <p className="text-gray-500">November 2019 • Kilifi, Kenya</p>
              <p className="mt-2 text-gray-700">Relevant Coursework: Relational Database Management Systems, Networking Fundamentals, Operating Systems, Data Structures and Algorithms</p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <div className="bg-white p-2 rounded-lg shadow-md">
              <Building2 className="w-6 h-6 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 ml-3">Experience</h2>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-gray-900">Freelance Backend Developer and Technical Writer</h3>
            <p className="text-gray-500">August 2023 – Present • Mombasa, Kenya</p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
              <li>Developed backend solutions using Golang (Gin, GORM) and Python (Django, FastAPI) for various clients</li>
              <li>Improved database performance by 30% by optimizing PostgreSQL and SQLite queries</li>
              <li>Containerized 80% of projects using Docker, enabling easier deployment and reducing setup time by 60%</li>
              <li>Assisted 1 startup in structuring their backend, reducing development time by 1–2 months through better database and API design</li>
            </ul>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <div className="bg-white p-2 rounded-lg shadow-md">
              <Code2 className="w-6 h-6 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 ml-3">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold text-gray-900">URL Shortener Application</h3>
                <a href="https://github.com/nyae44/url-shortener-app" className="text-green-500 hover:text-green-600">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-600 mt-1">Golang • SQLite • HTML • CSS</p>
              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
                <li>Developed a lightweight and efficient URL shortener web service using Golang</li>
                <li>Designed a RESTful API to handle URL shortening and redirection</li>
                <li>Integrated SQLite for data persistence and efficient retrieval</li>
                <li>Structured using modular design for maintainability and scalability</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold text-gray-900">Library Management Web Application</h3>
                <a href="https://github.com/nyae44/django-library-management" className="text-green-500 hover:text-green-600">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-600 mt-1">Python • Django • Bootstrap • Docker</p>
              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
                <li>Built a full-stack Library Management System using Django and Bootstrap</li>
                <li>Implemented user authentication for restricted access</li>
                <li>Leveraged Django's ORM for database management</li>
                <li>Containerized the application using Docker</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Skills & Social Engagements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <div className="flex items-center mb-6">
              <div className="bg-white p-2 rounded-lg shadow-md">
                <Code2 className="w-6 h-6 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 ml-3">Technical Skills</h2>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Languages</h3>
                  <p className="text-gray-700">Python, Golang, Kotlin</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Technologies</h3>
                  <p className="text-gray-700">Django, FastAPI, Gin, Jetpack-Compose, Docker, PostgreSQL, SQLite</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Concepts</h3>
                  <p className="text-gray-700">Backend development, Application deployment, Caching, API, Database Normalization, Agile Methodology, Cloud Computing</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-6">
              <div className="bg-white p-2 rounded-lg shadow-md">
                <Users className="w-6 h-6 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 ml-3">Social Engagements</h2>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <ul className="space-y-4 text-gray-700">
                <li>Volunteer writer at Write the Docs, contributing articles on backend engineering and API documentation</li>
                <li>Individual member of RISC-V, contributing to the open-source hardware ecosystem and exploring RISC-V for backend and infrastructure projects</li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-gradient-to-r from-green-400 to-green-500 mt-16">
        <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-white">© 2025 Daley Nyae Tinga. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;