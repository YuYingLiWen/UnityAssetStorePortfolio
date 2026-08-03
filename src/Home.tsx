import ProjectCard from "./ProjectCard";
import PageHeader from "./PageHeader";
import projects from "./data/projects";
import "./Home.css";


export default function Home() {
    return (
        <div>
            <PageHeader
                title="Home"
                description="Hi there! Here you will find my projects."
            />
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