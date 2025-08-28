"use client";

import Lighting from "@/components/Lighting";
import Head from "next/head";
import { contactData } from "@/data/contact";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact - Software Engineer Portfolio</title>
        <meta
          name="description"
          content="Hubungi saya untuk kolaborasi proyek atau diskusi teknologi. Saya terbuka untuk peluang freelance dan partnership."
        />
      </Head>

      <Lighting
        starCount={60}
        nebulaOpacity={0.1}
        starAnimRange={{ animY: [-2, 3], animX: [-1, 2] }}
      />

      <div className="relative md:px-24 py-20 min-h-screen text-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 pt-8">
            <h1 className="md:text-6xl lg:text-6xl text-5xl font-semibold text-center pb-2">
              Get In Touch
            </h1>
            <p className="text-center md:text-md lg:text-md text-sm text-gray-400">
              Interested in starting a project together, discussing innovation,
              or just exchanging thoughts about the digital world? I&apos;d love
              to connect!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-semibold mb-8 text-gray-300">
                  Contact Information
                </h2>

                <div className="space-y-3">
                  <div className="p-5 bg-gray-950/30 rounded-xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300">
                    <h3 className="text-lg font-medium text-gray-300 mb-2">
                      Email
                    </h3>
                    <a
                      href={`mailto:${contactData.email}`}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {contactData.email}
                    </a>
                  </div>

                  <div className="p-5 bg-gray-950/30 rounded-xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300">
                    <h3 className="text-lg font-medium text-gray-300 mb-2">
                      Phone
                    </h3>
                    <a
                      href={`tel:${contactData.phone}`}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {contactData.phone}
                    </a>
                  </div>

                  <div className="p-5 bg-gray-950/30 rounded-xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300">
                    <h3 className="text-lg font-medium text-gray-300 mb-2">
                      Location
                    </h3>
                    <p className="text-gray-400">{contactData.location}</p>
                    <p className="text-sm text-gray-500">
                      {contactData.timezone}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-300">
                  Connect With Me
                </h3>
                <div className="flex space-x-3">
                  <a
                    href={contactData.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gray-950/30 rounded-xl border border-gray-800/50 hover:border-gray-600/50 transition-all duration-300 hover:bg-gray-900/40"
                    title="GitHub"
                  >
                    <svg
                      className="w-5 h-5 text-gray-500 hover:text-gray-300 transition-colors duration-200"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>

                  <a
                    href={contactData.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gray-950/30 rounded-xl border border-gray-800/50 hover:border-gray-600/50 transition-all duration-300 hover:bg-gray-900/40"
                    title="LinkedIn"
                  >
                    <svg
                      className="w-5 h-5 text-gray-500 hover:text-gray-300 transition-colors duration-200"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>

                  <a
                    href={contactData.social.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gray-950/30 rounded-xl border border-gray-800/50 hover:border-gray-600/50 transition-all duration-300 hover:bg-gray-900/40"
                    title="Behance"
                  >
                    <svg
                      className="w-5 h-5 text-gray-500 hover:text-gray-300 transition-colors duration-200"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.5 4.5h4c1.3 0 2.4.4 3.2 1.1.8.7 1.2 1.7 1.2 2.9 0 .8-.2 1.5-.7 2.1-.5.6-1.1 1-1.9 1.2 1 .2 1.8.7 2.4 1.4.6.7.9 1.6.9 2.7 0 1.3-.5 2.4-1.4 3.2-.9.8-2.1 1.2-3.6 1.2H7.5V4.5zm2.3 5.8h1.7c.6 0 1.1-.2 1.4-.5.3-.3.5-.7.5-1.2s-.2-.9-.5-1.2c-.3-.3-.8-.5-1.4-.5H9.8v3.4zm0 6.4h2c.7 0 1.3-.2 1.7-.6.4-.4.6-.9.6-1.5s-.2-1.1-.6-1.5c-.4-.4-1-.6-1.7-.6H9.8v4.2zM16.5 7h5v1.5h-5V7zm.8 7.5c0-1.1.4-2 1.1-2.7.7-.7 1.6-1 2.6-1s1.9.3 2.6 1c.7.7 1.1 1.6 1.1 2.7 0 1.1-.4 2-1.1 2.7-.7.7-1.6 1-2.6 1s-1.9-.3-2.6-1c-.7-.7-1.1-1.6-1.1-2.7zm4.5 0c0-.6-.2-1.1-.5-1.5-.3-.4-.8-.6-1.3-.6s-1 .2-1.3.6c-.3.4-.5.9-.5 1.5s.2 1.1.5 1.5c.3.4.8.6 1.3.6s1-.2 1.3-.6c.3-.4.5-.9.5-1.5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form or CTA */}
            <div className="space-y-8">
              <h2 className="text-3xl font-semibold mb-8 text-gray-200">
                Let&apos;s Work Together
              </h2>

              <div className="p-8 bg-gray-950/20 rounded-2xl border border-gray-800/30 backdrop-blur-sm">
                <h3 className="text-xl font-medium mb-4 text-gray-300">
                  Ready to start a project?
                </h3>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  Im ready to help you turn your ideas into reality. Lets
                  discuss your project!
                </p>

                <div className="space-y-3">
                  <a
                    href={`mailto:${contactData.email}?subject=Project Inquiry&body=Hi Muddatsir,%0A%0AI'm interested in discussing a project with you.%0A%0AProject details:%0A%0A%0A%0ABest regards,`}
                    className="block w-full bg-blue-950/20 hover:bg-blue-900/30 border border-blue-800/30 hover:border-blue-700/50 text-blue-200 hover:text-blue-100 text-center py-4 px-6 rounded-xl font-medium transition-all duration-300 hover:backdrop-blur-md hover:shadow-lg hover:shadow-blue-900/20"
                  >
                    Send Email
                  </a>

                  <a
                    href={`https://wa.me/${contactData.phone.replace(
                      /\D/g,
                      ""
                    )}?text=Hi%20Muddatsir,%20I'm%20interested%20in%20discussing%20a%20project%20with%20you.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-950/20 hover:bg-green-900/30 border border-green-800/30 hover:border-green-700/50 text-green-200 hover:text-green-100 text-center py-4 px-6 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-green-900/20"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="text-center text-gray-600 text-sm">
                <p>I usually respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
