import { motion } from "framer-motion";

export default function AboutHeader() {
  return (
    <motion.div
      className="pt-8"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="md:text-6xl lg:text-6xl text-5xl font-semibold text-center pb-2">
        About Me
      </h1>
      <p className="text-center md:text-md lg:text-md text-sm text-gray-400">
        A path of learning and transformation
      </p>
    </motion.div>
  );
}
