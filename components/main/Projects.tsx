import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
    id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NetflixClone.png"
          title="Modern Netflix Clone"
          description={
            <>
              ● Engineered user authentication and account management functionalities using Firebase, ensuring secure and seamless signup and login experiences.
              <br />
              ● Developed dynamic web interfaces with Next.js, incorporating responsive design principles for optimal user interaction.
              <br />
              ● Integrated TMDb API to fetch and display movie data dynamically, mimicking the Netflix-style user interface.
              <br />
            </>
          }
        />
        <ProjectCard
          src="/MeteoriteLandingImg.jpeg"
          title="Meteorite Landing Data Visualization"
          description={
            <>
              ● Leveraged Python, including Pandas, NumPy, Matplotlib, and Geolocation libraries, to analyze and visualize NASA's meteorite landing dataset.
              <br />
              ● Demonstrated proficiency in data analysis by creating six compelling visualizations that offered insights into meteorite landing patterns and trends.
              <br />
              ● Applied geospatial analysis techniques to enhance understanding of meteorite distribution across geographical locations.
              <br />
            </>
          }
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description={
            <>
              ● Engineered user authentication and account management functionalities using Firebase, ensuring secure and seamless signup and login experiences.
              <br />
              ● Developed dynamic web interfaces with Next.js, incorporating responsive design principles for optimal user interaction.
              <br />
              ● Integrated TMDb API to fetch and display movie data dynamically, mimicking the Netflix-style user interface.
              <br />
            </>
          }
        />
      </div>
    </div>
  );
};

export default Projects;