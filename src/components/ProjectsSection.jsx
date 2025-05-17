import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Crime Records Management System",
    description:
      "A lightweight Spring Boot web application to manage crime records with Thymeleaf. Enables adding, searching, editing, and deleting records without JS dependencies.",
    features: [
      "Add, search, edit, and delete crime records",
      "Search by crime type or ID",
      "Uses Thymeleaf templates for dynamic HTML rendering",
      "Spring Boot backend with H2 or MySQL",
    ],
    tags: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "HTML/CSS"],
    githubUrl:
      "https://github.com/Prajuval69/Criminal-Database-Management-System",
  },
  {
    id: 2,
    title: "ETL Pipeline: Financial Data Processor",
    description:
      "An automated ETL pipeline using Python and Pandas for ingesting, transforming, and storing financial transactions with real-time exchange rate integration.",
    features: [
      "Extracts and cleans data from CSV",
      "Stores data in SQLite",
      "Fetches exchange rates via API",
      "Scheduled execution using Task Scheduler",
    ],
    tags: ["Python", "Pandas", "SQLite", "ETL", "Automation"],
    githubUrl: "https://github.com/Prajuval69/ETL-Pipeline",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A glimpse into my technical work. Each project showcases real-world
          applications with practical use cases and modern tech stacks.
        </p>

        <div className="space-y-10">
          {projects.map((project, key) => (
            <div
              key={key}
              className="bg-card rounded-lg p-6 shadow-md border border-border"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>

              <ul className="list-disc list-inside text-sm mb-4 text-foreground/90">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 text-xs mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm inline-flex items-center gap-1 text-primary hover:underline"
                >
                  View on GitHub <Github size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button flex items-center gap-2 mx-auto w-fit"
            href="https://github.com/Prajuval69"
            target="_blank"
          >
            Explore More on GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
