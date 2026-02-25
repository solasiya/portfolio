import { Badge } from "../lightswind/badge";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <motion.div
      id="hero"
      className="text-foreground bg-transparent flex flex-col md:flex-row 
      items-center justify-center max-w-7xl mx-auto w-full"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          // acts like staggerChildren / delayChildren
          delayChildren: 0.3,
          staggerChildren: 0.2,
        },
      }}
    >
      {/* Left Section */}
      <motion.div
        className="flex-1 space-y-4 p-6 text-left md:text-left"
        initial={false} // so it inherits parent animation
      >
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          Solomon Asiya
          <motion.span
            className="text-sm text-pink-500 font-semibold block"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            }}
          >
            He / Him
          </motion.span>
        </motion.h1>

        <motion.h2
          className="text-xl text-muted-foreground mt-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          Tech-Driven Conservationist & Project Manager
        </motion.h2>

        <motion.p
          className="mt-4 text-xs text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          Multidisciplinary professional with 5+ years of experience in project
          management, data analysis, and environmental information systems, now
          successfully transitioning and applying expertise to the Software
          Development and Cloud Computing sectors. I combine a strong foundation
          in environmental management and GIS with modern technical skills. I am
          focused on leveraging digital transformation to solve complex
          problems, supported by formal training in Full Stack Development and
          Oracle Cloud Infrastructure (OCI) certifications. I am proficient in
          data analysis, GIS, database management, and utilizing REST APIs.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          <Badge className="text-xs bg-pink-500">Project Management</Badge>
          <Badge className="text-xs bg-pink-500">Problem Solving</Badge>
          <Badge className="text-xs bg-pink-500">Decision Making</Badge>
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="flex-1 flex justify-center p-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
      >
        <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
          <img
            src="https://iili.io/K8fstJ2.png"
            alt="Solomon Asiya"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
