import portfolioImage from './assets/images/webPortfolioCover.png';
import bgaCover from './assets/images/bgaCover.png';

const projectsData = [
  {
    id: "bga",
    title: "BGA Technology Services",
    briefDescription: "A comprehensive website built for BGA Technology Services, showcasing their products and services.",
    lengthyDescription: "BGA Technology Services engaged me to design and develop a high-performance, user-friendly website that would effectively showcase their business and serve as a primary point of contact for their customers. To align with the company's tech-forward image, I opted for a sleek, dark, and futuristic design. The website features a clean and sophisticated aesthetic, enhanced by carefully selected image assets that further elevate its visual appeal. Following the website's deployment, BGA Technology Services experienced a significant increase in customer inquiries, highlighting the website's success in engaging and attracting their target audience.",
    image: bgaCover,
    technologies: ["React", "Tailwind CSS", "Node.js"],
    challenges: "Implementing a responsive design that works seamlessly across all devices while maintaining fast load times.",
    outcome: "The website significantly improved BGA's online presence, resulting in a 70% increase in customer inquiries.",
    linkName: "BGA Technology Services Website",
    link: "https://bgatechservices.com.au/",
  },
  {
    id: "portfolio",
    title: "Web Portfolio",
    briefDescription: "The website you are browsing right now!",
    lengthyDescription: "This project represents my inaugural venture into web development. Despite the availability of numerous shortcuts, such as pre-made templates, Bootstrap frameworks, and software that could have generated a website for me, I chose to build it from scratch. What began as a simple single-page site evolved into a comprehensive platform featuring a gallery of my photographs and a detailed database of my projects. Through this process, I acquired a wealth of skills that will be invaluable for future projects. I am particularly proud of the design, which reflects my personal style and has influenced many of my subsequent websites and projects. While the development took considerable time, as one would expect for a first attempt, the final result exceeded my expectations and stands as a testament to my growth and dedication.",
    image: portfolioImage,
    technologies: ["React", "Tailwind CSS", "Node.js"],
    challenges: "Everything.",
    outcome: "A contact point for individuals looking to hire me, a showcase of my work and achievements, and a valuable learning experience as I ventured into the world of web development.",
    linkName: null,
    link: null,
  },
  // Add more projects here
];

export default projectsData;
