import "./projectCard.css";

interface ProjectCardProps {
    title: string;
    image: string;
    description: string;
}

export default function ProjectCard({
    title,
    image,
    description
}: ProjectCardProps) {
    return (
        <div className="card project-card">
            <img
                src={image}
                className="card-img-top"
                alt={title + "asdf"}
            />
            <div className="card-body">
                <h5 className="card-title"> {title} </h5>
                <p className="card-text"> {description} </p>
            </div>
        </div>
    );
}