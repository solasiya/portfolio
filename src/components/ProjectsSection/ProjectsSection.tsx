"use client";

import { useState } from "react";
import { DragOrderList } from "../lightswind/DragOrderList";
import { motion } from "framer-motion";

export const ProjectsSection = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "OGNAMISM Business Portfolio Website",
      subtitle:
        "Developed a business marketing website for a client in the financial industry...",
      date: "2025",
      link: "https://ognamism.onrender.com/",
    },
    {
      id: 2,
      title: "Store Management Invetory (KUMMO) System",
      subtitle:
        "Kummo Spaza Manager is an inventory management web application designed and developed...",
      date: "2025",
      link: "https://spazamanager.onrender.com/auth",
      image: "https://iili.io/KSRGY5G.jpg",
    },
    {
      id: 3,
      title: "Contour Training Academy LMS Prototype",
      subtitle:
        "Currently working on Contour Training Academy new LMS prototype...",
      date: "2025",
      link: "https://contouracademy.africa/",
      image: "https://iili.io/fJWhWjn.png",
    },
    {
      id: 4,
      title: "Local E-commerce Platform",
      subtitle:
        "Designed and currently working implenting the new e-commerce platform called LocalThread...",
      date: "2025",
      link: "https://example.com/ecommerce",
      image: "https://iili.io/fJWl6CB.png",
    },
  ]);

  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ when: "beforeChildren", staggerChildren: 0.1 }}
    >
      <section className="max-w-7xl mx-auto px-6 py-12">
        <motion.h2
          className="text-3xl font-bold text-foreground mb-8 text-center"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Projects
        </motion.h2>
        <DragOrderList items={projects} />
      </section>
    </motion.div>
  );
};
