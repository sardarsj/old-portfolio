import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate Full Stack developer with a knack for crafting robust and scalable web applications.I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, Express.js and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Apr'23 - Present",
    role: "Frontend Developer",
    company: "Keen & Able Computers Pvt Ltd",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["Javascript", "React.js", "Next.js", "tailwind"],
  },
  {
    year: "Feb'22 - May'22",
    role: "Web Developer Intern",
    company: "CuriousJr",
    description: `Collaborated with the development team to design and implement engaging and interactive games aimed at teaching coding concepts to young learners. Participated in code reviews to ensure the quality and efficiency of the software, with a focus on optimization and best coding practices.`,
    technologies: ["HTML", "CSS", "Javascript", "Blockly"],
  },
];

export const PROJECTS = [
  {
    title: "Real-time Chat App",
    image: project1,
    description:
      "Developed a full-stack Web application to display Chat messages. Messages appear in real-time, ensuring instant communication. Quick access to start private conversations Push notifications for new messages and chat updates Users can create or join group chats with multiple participants.",
    technologies: ["HTML", "CSS", "React", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Netflix Clone",
    image: project2,
    description:
      "Implemented a responsive frontend using React.js, ensuring seamless navigation and an intuitive interface Created a robust backend using Express.js and Node.js to handle user authentication, video streaming, an d database operations.",
    technologies: ["HTML", "CSS", "React", "Node.js", "Express.js", "MongoDB"],

  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "tailwind"],
  },
  {
    title: "Admin Dashboard ",
    image: project4,
    description:
      " Integrated Syncfusion UI components for user authentication, interactive charts, dynamic forms, and data tables within the dashboard. Employed advanced optimization techniques like lazy loading and streamlined data retrieval, significantly enhancing dashboard load times and overall performance.",
    technologies: ["HTML", "CSS", "React", "Syncfusion"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+91 9310299498 ",
  email: "sardarsjsingh08@gmail.com",
};
