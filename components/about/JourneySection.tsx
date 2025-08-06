import { learnStep } from "@/data/learnStep";
import { motion } from "framer-motion";

export default function JourneySection() {
  return (
    <motion.div
      className="mx-auto space-y-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      <div className="flex flex-col md:flex-row md:pb-16">
        {/* Header di Kiri */}
        <div className="w-full">
          <h1 className="text-4xl font-bold text-white">
            My Journey & Growth in Programming
          </h1>
          <p className="md:text-md lg:text-md text-sm text-gray-400 mt-4 leading-relaxed">
            My journey in the world of technology has been one of exploration,
            where each step brings me closer to level up.
          </p>
        </div>

        {/* Konten di Kanan */}
        <div className="w-full md:pl-24 md:px-0 px-5">
          <h2 className="text-3xl font-semibold md:mt-0 mt-9">Step by Step</h2>

          <div className="mt-5 space-y-6 md:text-md lg:text-md text-sm text-gray-400 leading-relaxed">
            {learnStep.map((step, index) => (
              <div key={index}>
                <p>
                  {step.icon}{" "}
                  <strong className="text-gray-200">{step.years}:</strong>{" "}
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <p className="md:text-md lg:text-md text-sm text-gray-400 mt-8 leading-relaxed">
            I believe that technology is constantly evolving, and I am committed
            to continuous learning and innovation.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
