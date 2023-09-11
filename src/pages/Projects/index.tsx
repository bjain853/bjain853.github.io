import { FC } from "react";
import Card from "./Card";

import { Project } from '../../types'

const Projects: FC<any> = ({ ref }) => {
  const Projects: Project[] = [
    {
      name: "Proflix",
      summary: "Envisioned and developed a video streaming platform for content sourced by the user, complete with authentication and with support of up to 5 profiles per user comparable to Netflix",
      link: "https://github.com/bjain853/Proflix",
      techStack: ["NextJS", "NodeJS", "ExpressJS", "Material-UI", "MySQL", "Redis", "JSON Web Tokens"]
    },
    {
      name: "Code Collab",
      summary: `Built a cloud-based code editor, which supports multiple programming languages (HTML, CSS, JavaScript)
        real-time code editing and rendering of the result aimed at making code collaboration easier. Unique feature includes an image to code convertor which employs Machine Learning algorithms to convert
        an image of code snippet to actual code.`,
      link: "https://github.com/bjain853/codecollab",
      techStack: ["ReactJS", "NodeJS", "GraphQL", "Express", "TessaractJS", "Tailwind CSS", "Material-UI"]
    },
    {
      name: "Web Gallery",
      summary: "Created a secure image repository which focuses on providing a space for users to share and comment on other users’ posts using an intuitive graphical user interface hosted and served by a secure and robust backend",
      link: "https://github.com/bjain853/webgallery",
      techStack: ["HTML", "Javascript (ES6)", "CSS3", "NodeJS", "Clam Scan Anti-virus"]
    },
    {
      name: "Microblog",
      summary: "A simple blog page where people can post their thoughts while also being able to comment on and like and/or dislike other user's posts",
      link: "https://github.com/bjain853/microblog",
      techStack: ["HTML", "CSS3", "JavaScript", "NodeJS"]
    },
    {
      name: "UImpactify MVP",
      summary: "A beautiful online course management system built for an Ed-Tech, UImpactify. Worked in an AGILE environment to maximize product's developement efficiency",
      link: "https://github.com/bjain853/UImpactify",
      techStack: ["GatsbyJS", "MongoDB", "NodeJS", "ExpressJS", "Material-UI"]
    },
  ];

  return (
    <section ref={ref} id='projects'>
      <h1 className='text-2xl font-bold text-center my-5 sm:hidden'>Projects</h1>
      <ul className='p-4'>
        {Projects.map((project, index) => (
          <li key={index}>
            <Card {...project} />
          </li>
        ))
        }
      </ul>
    </section>
  );
}

export default Projects