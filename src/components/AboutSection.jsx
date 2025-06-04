import { Briefcase, Code, User } from "lucide-react";

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
              Software Engineer who loves building useful, intuitive web apps
            </h3>

            <p className="text-muted-foreground">
              Hi! I’m Susie, a graduate CS student at Northeastern University with a background
              in both computer science and English. I enjoy building clean, intuitive, and scalable
              web applications that are easy to use and impactful.
            </p>

            <p className="text-muted-foreground">
              I’ve worked across the full stack using technologies like React, TypeScript, Node.js,
              Spring Boot, and MongoDB. I also have experience with Redis, Docker, and AWS,
              and I’m certified as an AWS AI Practitioner. Whether it’s creating smooth user experiences
              or solving backend challenges with real-time data and caching, I love turning ideas into well-crafted software.
            </p>
            <p className="text-muted-foreground">
              I’m currently looking for internship or co-op opportunities in software engineering,
              web development, or cloud infrastructure. If you're looking for someone who’s curious,
              thoughtful, and enjoys collaborating across teams—let’s connect!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
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
                  <h4 className="font-semibold text-lg"> Software Engineer</h4>
                  <p className="text-muted-foreground">
                    Building scalable, reliable systems from front-end interfaces
                    to backend services using React, Node.js, Spring Boot, and more.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive, accessible, and performant web apps
                    with modern frameworks like React, Vue, and Tailwind CSS.
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
                  <h4 className="font-semibold text-lg">Cloud Architect</h4>
                  <p className="text-muted-foreground">
                    Designing and deploying cloud-native applications using
                    AWS, Docker, and CI/CD pipelines to ensure scalability and efficiency.
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
