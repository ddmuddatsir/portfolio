import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfileSection() {
  return (
    <div className="md:flex md:flex-row md:pl-48 md:pb-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        whileHover={{
          scale: 1.1,
          rotate: 3,
        }}
        className="flex justify-center md:rounded-full"
      >
        <div className="relative">
          <Image
            src="/fotoprofile.jpg"
            alt="Foto Profil"
            width={200}
            height={200}
            className="rounded-full border-4 border-gray-800 shadow-xl shadow-indigo-500/50 transition-all duration-300 md:w-80 md:mt-16"
          />
        </div>
      </motion.div>

      <div className="md:pl-24 w-full text-center md:text-left md:pr-32">
        <div className="pb-6 py-12 md:pt-6">
          <motion.p
            className="text-3xl text-white font-bold max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Nur Muhammad Muddatsir
          </motion.p>
          <motion.p
            className="md:text-md lg:text-md text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Full-stack Software Engineer
          </motion.p>
        </div>

        <motion.div
          className="md:text-md lg:text-md text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mt-8 md:text-left">
            <p className="text-gray-400">
              Hello! I&apos;m a professional with a unique background that
              blends{" "}
              <strong className="text-gray-200">
                creativity, business strategy, and technology
              </strong>
              .
            </p>
            <p className="mt-5 text-gray-400">
              💡{" "}
              <strong className="text-gray-200">
                From Multimedia to Branding:
              </strong>{" "}
              I started my journey in vocational school specializing in
              multimedia, where I honed my skills in visual design,
              storytelling, and digital production.
            </p>
            <p className="mt-5 text-gray-400">
              🚀{" "}
              <strong className="text-gray-200">
                3 Years in Marketing & Branding:
              </strong>{" "}
              I then spent three years in the industry, building strong brand
              identities and impactful marketing strategies.
            </p>
            <p className="mt-5 text-gray-400">
              🎓{" "}
              <strong className="text-gray-200">Business & Technology:</strong>{" "}
              To expand my expertise, I pursued a degree in{" "}
              <strong className="text-gray-200">Business Management</strong>,
              gaining deeper insights into business strategies. Now, I am also
              advancing my skills as a{" "}
              <strong className="text-gray-200">Fullstack Developer</strong>,
              combining creativity and analytical thinking to develop innovative
              digital solutions.
            </p>
          </div>
          <p className="mt-6 text-lg text-gray-400 font-semibold">📌 Why Me?</p>
          <p className="text-gray-400">
            I believe that the combination of{" "}
            <strong className="text-gray-200">
              strong branding, effective business strategy, and efficient
              technology
            </strong>{" "}
            is the key to success in the digital era. I&apos;m ready to bring
            this multidisciplinary approach to the industry.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
