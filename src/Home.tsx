import ProjectCard from "./ProjectCard";
import projects from "./data/projects";
import "./Home.css";

export default function Home() {
    return (
        <div>
            <h1> Home </h1>
            <p> Welcome to the home page.</p>
            <div className="masonry-container">
                {
                    projects.map((project, index) => (

                        <ProjectCard
                            key={index}
                            title={project.title}
                            image={project.image}
                            description={project.description}
                        />
                    ))
                }
            </div>
        </div>
    );
}