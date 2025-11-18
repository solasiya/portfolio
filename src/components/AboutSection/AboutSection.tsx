import { Separator } from "../lightswind/separator";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <motion.div
      id="about"
      className="text-foreground max-w-7xl mx-auto w-full px-6 py-12 space-y-4"
      initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-3xl font-bold">About Me</h2>
      <p className="text-muted-foreground text-sm max-w-3xl">
        I am a multidisciplinary professional with over 5 years experience in conservation project management and environmental information systems. I combine a strong understanding of Protected Areas legislation and natural resource management with modern technical skills. I am proficient in data analysis, GIS , database management, and utilizing REST APIs. My career is focused on enhancing digital transformation in conservation, supported by formal training in Full Stack Development, including programming languages like Python and JavaScript, and my new certifications in Oracle Cloud Infrastructure.
      </p>
      <Separator />
    </motion.div>
  );
};
