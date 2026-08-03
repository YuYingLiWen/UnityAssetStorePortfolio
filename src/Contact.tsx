import PageHeader from "./PageHeader";
import contact from "./data/contact";


export default function Contact() {
    return (
        <div>
            <PageHeader
                title="Contact"
                description="Get in touch with me."
            />

            <div className="card">
                <div className="card-body">

                    <h5 className="card-title">
                        {contact.name}
                    </h5>

                    <p className="card-text">
                        Email:{" "}
                        <a href={`mailto:${contact.email}`}>
                            {contact.email}
                        </a>
                    </p>

                    <p className="card-text">
                        GitHub:{" "}
                        <a
                            href={contact.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {contact.github}
                        </a>
                    </p>

                    <p className="card-text">
                        LinkedIn:{" "}
                        <a
                            href={contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {contact.linkedin}
                        </a>
                    </p>

                    <p className="card-text">
                        Website:{" "}
                        <a
                            href={contact.website}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {contact.website}
                        </a>
                    </p>

                </div>
            </div>
        </div>
    );
}