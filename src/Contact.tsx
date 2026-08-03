import PageHeader from "./PageHeader";
import contact from "./data/contact";


export default function Contact() {
    return (
        <div>
            <PageHeader
                title="Contact"
                description="Let's get in touch!"
            />

            <div className="card">
                <div className="card-body">

                    <h5 className="card-title">
                        {contact.name}
                    </h5>

                    <p className="card-text">
                        <i className="bi bi-envelope-fill me-2"></i>
                        <a href={`mailto:${contact.email}`}>
                            {contact.email}
                        </a>
                    </p>

                    <p className="card-text">
                        <i className="bi bi-github me-2"></i>
                        <a
                            href={contact.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </p>

                    <p className="card-text">
                        <i className="bi bi-linkedin me-2"></i>
                        <a
                            href={contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}