import { Briefcase, Code, University, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Tech Enthusiast
            </h3>

            <p className="text-muted-foreground">
           Hi! I'm Prajuval, a tech enthusiast with a multidisciplinary background in full stack development, AI/ML, and data science. Whether it's building intelligent web apps, leading club initiatives, or solving real-world problems through code, I love blending creativity with technology. I'm always eager to learn, collaborate, and turn challenges into opportunities for innovation.
            </p>

            

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Problem Solving</h4>
                  <p className="text-muted-foreground">
                    Passionate about solving real-world problems through logical thinking and practical tech solutions. I enjoy breaking down challenges and building efficient, user-focused outcomes.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <University className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">University</h4>
                  <p className="text-muted-foreground">
                    Currently pursuing my undergrad and in the final year and will be graduating in 2026 from Anurag University
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Fresher</h4>
                  <p className="text-muted-foreground">
                    Tech enthusiast eager to learn, grow, and contribute to real-world projects as a fresher.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};