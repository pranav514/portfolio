"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "MERN AI GPT",
    description: "MERN chat app using Material UI and OpenAI's GPT-3.5 for instant, accurate responses to programming and daily life queries. Seamless user experience, real-time interaction. Your go-to companion for efficient problem-solving.",
    image: "/images/projects/1.png",
    tag: ["All", "Web","Mobile"],
    gitUrl: "https://github.com/VishakhaSainani/MERN-GPT",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Amazon clone 2.0",
    description: "Built a dynamic Amazon Clone 2.0 using TypeScript and Tailwind CSS, integrating APIs for product display, cart management, order confirmation, and payment processing via Stripe. Utilized Firebase for data storage and retrieval. Demonstrated expertise in full-stack development, UI/UX design, and secure e-commerce functionalities.",
    image: "/images/projects/2.png",
    tag: ["All", "Web","Mobile"],
    gitUrl: "https://github.com/pranav514/Amazon-clone-1",
    previewUrl: "https://amazon-clone-1.vercel.app/",
  },
  {
    id: 3,
    title: "Stack overflow clone",
    description: "Developed a comprehensive Stack Overflow Clone using the MERN (MongoDB, Express, React, Node.js) stack. Integrated all Stack Overflow features, including questions, answers, voting, user profiles, and more. Deployed the frontend on Netlify and the backend on Vercel, showcasing seamless collaboration between these platforms. Demonstrated proficiency in full-stack development, REST API design, and deployment on cloud platforms",
    image: "/images/projects/3.png",
    tag: ["All", "Web","Mobile"],
    gitUrl: "https://github.com/pranav514/Stack-overflow-clone",
    previewUrl: "https://stack-overflow-1.netlify.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
