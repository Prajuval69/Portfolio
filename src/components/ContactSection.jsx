import { Mail, Linkedin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Interested in working together or just want to connect? Feel free to reach out!
        </p>

        <div className="flex flex-col items-center gap-8 text-center">
          {/* Email */}
          <div className="flex items-center space-x-3">
            <Mail className="h-6 w-6 text-primary" />
            <a
              href="mailto:prajuvalsrxpf@gmail.com"
              className="text-lg text-muted-foreground hover:text-primary transition-colors"
            >
              prajuvalsrxpf@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center space-x-3">
            <Linkedin className="h-6 w-6 text-primary" />
            <a
              href="https://www.linkedin.com/in/prajuval-rawat-985286233/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-muted-foreground hover:text-primary transition-colors"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
