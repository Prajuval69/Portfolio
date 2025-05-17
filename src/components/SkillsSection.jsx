import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Programming Languages
  { name: "Java", level: 65, category: "languages" },
  { name: "Python", level: 70, category: "languages" },
  { name: "SQL", level: 69, category: "languages" },
  { name: "JavaScript", level: 55, category: "languages" },
  { name: "HTML/CSS", level: 70, category: "languages" },
  { name: "R", level: 60, category: "languages" },

  // Machine Learning & Data Science
  { name: "TensorFlow", level: 55, category: "ml" },
  { name: "PyTorch", level: 50, category: "ml" },
  { name: "scikit-learn", level: 70, category: "ml" },
  { name: "Pandas", level: 75, category: "ml" },
  { name: "NumPy", level: 70, category: "ml" },
  { name: "OpenCV", level: 60, category: "ml" },

  // Web & App Development
  { name: "Spring Boot", level: 70, category: "web" },
  { name: "React Native", level: 55, category: "web" },
  { name: "Flutter", level: 50, category: "web" },
  { name: "React.js", level: 70, category: "web" },
  
  

  // Databases
  { name: "MySQL", level: 75, category: "databases" },
  { name: "SQLite", level: 70, category: "databases" },
  { name: "MongoDB", level: 65, category: "databases" },

  // Tools & Dev Environment
  { name: "Git", level: 75, category: "tools" },
  { name: "GitHub", level: 75, category: "tools" },
  { name: "Maven", level: 65, category: "tools" },
  { name: "VS Code", level: 75, category: "tools" },
  { name: "Eclipse", level: 70, category: "tools" },

  // Cloud & DevOps
  { name: "Firebase", level: 65, category: "cloud" },
  { name: "GitHub Actions", level: 65, category: "cloud" },
  { name: "CI/CD", level: 60, category: "cloud" },

];


const categories = [
  "all",
  "languages",
  "ml",
  "web",
  "databases",
  "tools",
  "cloud",
];


export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};