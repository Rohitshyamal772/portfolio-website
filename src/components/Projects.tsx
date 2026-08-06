import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiExternalLink } from "react-icons/fi";
import "./styles/Projects.css";

const SCREENSHOT_API = "https://api.microlink.io/?screenshot=true&meta=false&embed=screenshot.url&url=";

const featuredProjects = [
  {
    title: "Hungry Hub (Zomato Clone)",
    description:
      "Responsive food-ordering frontend with restaurant listings and menus.",
    tags: ["React", "HTML", "CSS", "JavaScript"],
    demo: "https://hungry-hub.base44.app",
    image: "/images/hungryhub.png",
    gradient: "linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)",
    initial: "HH",
  },
  {
    title: "Way to Fitness (Gym Website)",
    description:
      "Modern responsive gym website with membership plans and contact features.",
    tags: ["React", "CSS", "JavaScript"],
    demo: "https://v0-gym-website-nelihd66v-rohitshyamal772-gmailcoms-projects.vercel.app/",
    image: `${SCREENSHOT_API}https://v0-gym-website-nelihd66v-rohitshyamal772-gmailcoms-projects.vercel.app/`,
    gradient: "linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)",
    initial: "WF",
  },
  {
    title: "Pure Plant Pure Living",
    description:
      "Eco-inspired responsive product and wellness website.",
    tags: ["React", "HTML", "CSS"],
    demo: "https://pure-plant-pure-living.base44.app/",
    image: "/images/pureplant.png",
    gradient: "linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)",
    initial: "PL",
  },
  {
    title: "CMS MindStudio Hub",
    description:
      "Multi-role Learning Management System with Admin, Instructor, and Student dashboards.",
    tags: ["React", "Node.js", "MySQL", "Tailwind CSS"],
    demo: "https://mindstudio-hub.preview.emergentagent.com/",
    image: `${SCREENSHOT_API}https://mindstudio-hub.preview.emergentagent.com/`,
    gradient: "linear-gradient(135deg, #f39c12 0%, #d35400 100%)",
    initial: "MH",
  },
];

const additionalProjects = [
  {
    title: "Healthcare Appointment System",
    status: "Completed",
    description:
      "A comprehensive healthcare platform for managing appointments, patient records, and doctor schedules.",
    tags: ["React", "Node.js", "MySQL"],
    image: "/images/healthcare.svg",
    gradient: "linear-gradient(135deg, #1abc9c 0%, #16a085 100%)",
    initial: "HA",
    demo: "",
  },
  {
    title: "Clothing Website",
    status: "Completed",
    description:
      "An e-commerce clothing store with product listings, cart functionality, and checkout flow.",
    tags: ["React", "CSS", "JavaScript"],
    image: "/images/clothing.png",
    gradient: "linear-gradient(135deg, #3498db 0%, #2980b9 100%)",
    initial: "CW",
  },
];

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = document.querySelectorAll(".featured-card");
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 60 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: i * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      const additionalCards = document.querySelectorAll(".additional-card");
      additionalCards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            delay: i * 0.1 + 0.3,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="projects-section" ref={sectionRef}>
      <div className="projects-container">
        <h2 className="projects-title">
          Featured <span>Projects</span>
        </h2>
        <div className="featured-grid">
          {featuredProjects.map((project, index) => (
            <div className="featured-card" key={index}>
              <div
                className="featured-card-image"
                style={{ background: project.gradient }}
              >
                <img
                  className="featured-card-img"
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />
                <span className="featured-card-initial">{project.initial}</span>
              </div>
              <div className="featured-card-body">
                <h3 className="featured-card-title">{project.title}</h3>
                <p className="featured-card-desc">{project.description}</p>
                <div className="featured-card-tags">
                  {project.tags.map((tag, i) => (
                    <span className="featured-tag" key={i}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="featured-card-actions">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="featured-btn primary"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="projects-title additional-title">
          Additional <span>Projects</span>
        </h2>
        <div className="additional-grid">
          {additionalProjects.map((project, index) => (
            <div className="additional-card" key={index}>
              <div
                className="additional-card-image"
                style={{ background: project.gradient }}
              >
                <img
                  className="additional-card-img"
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />
                <span className="additional-card-initial">
                  {project.initial}
                </span>
              </div>
              <div className="additional-card-body">
                <div className="additional-card-header">
                  <h3 className="additional-card-title">{project.title}</h3>
                  <span className="additional-card-status">
                    {project.status}
                  </span>
                </div>
                <p className="additional-card-desc">{project.description}</p>
                <div className="additional-card-tags">
                  {project.tags.map((tag, i) => (
                    <span className="additional-tag" key={i}>
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
