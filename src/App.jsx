import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  "about",
  "experience",
  "projects",
  "skills",
  "education",
  "achievements",
  "certifications",
  "contact",
];

const EXPERIENCE = [
  {
    role: "Frontend Intern",
    company: "StarPortal",
    period: "Jun 2025 – Aug 2025",
    bullets: [
      "Built responsive frontend components and integrated APIs for a next-generation trading platform.",
      "Converted UI/UX mockups into responsive, cross-browser compatible interfaces with high fidelity.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Booqin · Remote",
    period: "Sep 2025 – Oct 2025",
    bullets: [
      "Developed scalable frontend components using React.js, JavaScript, and Tailwind CSS.",
      "Implemented responsive UI designs and improved user experience across all device breakpoints.",
    ],
  },
];

const PROJECTS = [
  {
    num: "PROJECT_01",
    title: "Resume Analyzer",
    desc: "AI-powered Resume Analyzer featuring resume scoring, ATS insights, and AI-generated feedback. Supports PDF upload, text extraction, and a responsive real-time analysis UI.",
    tags: ["Puter.js", "Next.js", "Tailwind CSS", "AI"],
    links: [],
  },
  {
    num: "PROJECT_02",
    title: "AI Text Summarizer",
    desc: "AI-powered text summarization app using Next.js and Hugging Face NLP APIs. Includes server-side routes for efficient text processing and clean summary generation.",
    tags: ["Next.js", "Hugging Face API", "Tailwind CSS", "NLP"],
    links: [{ label: "↗ GitHub", href: "https://github.com/soharatnam" }],
  },
  {
    num: "PROJECT_03",
    title: "SmartAttendee",
    desc: "Full-stack attendance management system with role-based dashboards and REST API integration. Optimised frontend performance and improved scalability across the app.",
    tags: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "MERN"],
    links: [
      { label: "↗ GitHub", href: "https://github.com/soharatnam" },
      { label: "↗ Live Demo", href: "#" },
    ],
  },
  {
    num: "PROJECT_04",
    title: "Mini Projects",
    desc: "A collection of small fun builds — including browser-based games, a weather app, and other UI experiments. Built to practice core JavaScript, API integration, and frontend fundamentals.",
    tags: ["JavaScript", "HTML5", "CSS3", "APIs", "React.js"],
    links: [{ label: "↗ GitHub", href: "https://github.com/soharatnam" }],
  },
];

const CERTIFICATIONS = [
  {
    icon: "📊",
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Tata · Forage",
    date: "June 2026",
    desc: "Completed practical tasks in exploratory data analysis, AI-driven delinquency prediction, business data storytelling, and implementing an AI-powered collections strategy.",
  },
  {
    icon: "💻",
    title: "Full Stack Web Development",
    issuer: "Udemy",
    date: "2025",
    desc: "Comprehensive course covering frontend and backend development — including React.js, Node.js, Express, databases, and building complete full-stack applications.",
  },
  {
    icon: "⚛️",
    title: "React.js Certification",
    issuer: "GeeksforGeeks",
    date: "2025",
    desc: "Certified course covering React fundamentals, hooks, component architecture, state management, and building scalable frontend applications.",
  },
  {
    icon: "📈",
    title: "Data Analytics & Big Data",
    issuer: "IBM SkillsBuild",
    date: "2025",
    desc: "Covered core concepts of data analytics and big data — including data processing, visualization, and analytical techniques for real-world datasets.",
  },
];

const SKILLS = [
  {
    category: "Languages",
    items: ["Java", "JavaScript ES6+", "Python", "SQL", "PostgreSQL"],
  },
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
    ],
  },
  {
    category: "Backend & Tools",
    items: ["Node.js", "Express.js", "MongoDB", "Git", "GitHub", "Postman"],
  },
];

const COURSEWORK = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "DBMS",
  "Operating Systems",
  "Computer Networks",
  "Software Engineering",
  "Compiler Design",
];

const EDUCATION = [
  {
    school: "JSS Academy of Technical Education",
    degree: "B.Tech in Computer Science · Noida, UP",
    period: "2023 – 2027",
    score: "8.5",
    scoreLabel: "CGPA",
  },
  {
    school: "Meerut Public Girls' School",
    degree: "Class XII · Meerut, UP",
    period: "2020 – 2023",
    score: "93.6%",
    scoreLabel: "XII Score",
  },
  {
    school: "Meerut Public Girls' School",
    degree: "Class X · Meerut, UP",
    period: "2020",
    score: "95%",
    scoreLabel: "X Score",
  },
];

const ACHIEVEMENTS = [
  {
    icon: "🏆",
    title: "EY Techathon 5.0 — Top 5%",
    desc: "Led a team selected among 50,000+ participants to present SkillSathi AI — an AI/ML-based personalised learning platform at the EY Techathon 5.0.",
  },
  {
    icon: "📊",
    title: "Tata GenAI Data Analytics — Forage",
    desc: "Completed Tata's GenAI Powered Data Analytics Job Simulation on Forage (June 2026) — covering exploratory data analysis, AI-driven delinquency prediction, and business data storytelling.",
  },
  {
    icon: "🥇",
    title: "Deconstruct — AIR 52",
    desc: "Secured All India Rank 52 in the nationwide Deconstruct competition, competing against thousands of participants across India.",
  },
  {
    icon: "🌐",
    title: "SheFi Scholar 2025",
    desc: "Awarded a full scholarship for Web3 education and community learning under the prestigious SheFi program, supporting women in blockchain and crypto.",
  },
  {
    icon: "🎓",
    title: "Academic Excellence — Top 5%",
    desc: "Secured Top 5% rank in the Meerut region in Class 10 board examinations with a score of 95%, demonstrating strong academic foundations.",
  },
];

const CONTACT_LINKS = [
  {
    icon: "📧",
    label: "Email",
    value: "soharatnam12095@gmail.com",
    href: "mailto:soharatnam12095@gmail.com",
  },
  {
    icon: "📱",
    label: "Phone",
    value: "+91 9219035120",
    href: "tel:+919219035120",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/soharatnam",
    href: "https://linkedin.com",
  },
  {
    icon: "⌨️",
    label: "GitHub",
    value: "github.com/soharatnam",
    href: "https://github.com",
  },
];

// ── FADE-UP HOOK ─────────────────────────────────────────────────────────────

function useFadeUp() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function useStaggerFadeUp(count) {
  const refs = useRef([]);
  useEffect(() => {
    refs.current.forEach((el, i) => {
      if (!el) return;
      el.style.transitionDelay = `${i * 80}ms`;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add("visible");
            observer.unobserve(el);
          }
        },
        { threshold: 0.12 },
      );
      observer.observe(el);
    });
  }, [count]);
  return refs;
}

//  COMPONENTS

function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <>
      <nav>
        <div className="nav-logo"></div>
        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a href={`#${link}`}>
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <div
          className="hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          onKeyDown={(e) =>
            (e.key === "Enter" || e.key === " ") && setMenuOpen((o) => !o)
          }
          role="button"
          tabIndex={0}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a key={link} href={`#${link}`} onClick={() => setMenuOpen(false)}>
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}
      </div>
    </>
  );
}
function Certifications() {
  const refs = useStaggerFadeUp(CERTIFICATIONS.length);
  return (
    <section id="certifications">
      <div className="section-label">08 — Certifications</div>
      <h2 className="section-title">Certifications</h2>
      <div className="cert-grid">
        {CERTIFICATIONS.map((c, i) => (
          <div
            className="cert-card fade-up"
            key={c.title}
            ref={(el) => (refs.current[i] = el)}
          >
            <div className="cert-icon">{c.icon}</div>
            <div className="cert-info">
              <div className="cert-title">{c.title}</div>
              <div className="cert-meta">
                <span className="cert-issuer">{c.issuer}</span>
                <span className="cert-sep">·</span>
                <span className="cert-date">{c.date}</span>
              </div>
              <p className="cert-desc">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
function Hero() {
  return (
    <>
      <div className="hero-photo">
        <img className="absolute" src="/soha.jpg.jpg" alt="Soha Ratnam" />
        <h1 className="relative">
            <span className="name-first">Soha</span>
            <span className="name-last">Ratnam</span>
          </h1>
      </div>
      <div className="hero" id="home">
        <div className="hero-content">
          <div className="hero-tag">Available for opportunities</div>
          <h1>
            <span className="name-first">Soha</span>
            <span className="name-last">Ratnam</span>
          </h1>
          <div className="hero-role">
            <span>Full Stack Developer</span>
            <span className="sep">/</span>
            <span className="sep">/</span>
            <span className="highlight">B.Tech CSE '27</span>
          </div>
          <p className="hero-bio">
            Building fast, thoughtful interfaces at the intersection of design
            and engineering. Currently studying at JSS Academy of Technical
            Education, Noida — with hands-on experience shipping
            production-grade frontend across fintech and commerce platforms.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in Touch
            </a>
            <a
              href="/Soha_portfolio.pdf"
              download="Soha_Ratnam_Resume.pdf"
              className="btn btn-outline"
            >
              Download Resume ↓
            </a>
          </div>
        </div>

        <div className="hero-stats">
          {[
            { num: "8.5", label: "CGPA" },
            { num: "AIR 68", label: "Deconstruct " },
            { num: "50K+", label: "EY Techathon" },
          ].map((s) => (
            <div className="hero-stat" key={s.label}>
              <div className="num">{s.num}</div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function About() {
  const textRef = useFadeUp();
  const metaRef = useFadeUp();
  return (
    <section id="about">
      <div className="section-label">01 — About</div>
      <h2 className="section-title">Who I Am</h2>
      <div className="about-grid">
        <div className="about-text fade-up" ref={textRef}>
          <p>
            I'm Soha Ratnam, a Computer Science undergrad at JSS Academy of
            Technical Education, Noida, with a CGPA of 8.9. I specialise in
            building polished, performant web interfaces using React.js and
            Next.js — from design-to-code translations to full-stack
            integrations.
          </p>
        </div>
        <div className="about-meta fade-up" ref={metaRef}>
          {[
            {
              icon: "📍",
              label: "Location",
              value: "Noida , Uttar Pradesh, India",
            },
            {
              icon: "🎓",
              label: "Currently",
              value: "B.Tech CSE  · 2023–2027",
            },
            { icon: "📧", label: "Email", value: "soharatnam12095@gmail.com" },
          ].map((m) => (
            <div className="meta-item" key={m.label}>
              <div className="meta-icon">{m.icon}</div>
              <div>
                <div className="meta-label">{m.label}</div>
                <div className="meta-value">{m.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const refs = useStaggerFadeUp(EXPERIENCE.length);
  return (
    <section id="experience">
      <div className="section-label">03 — Experience</div>
      <h2 className="section-title">Where I've Worked</h2>
      <div className="exp-list">
        {EXPERIENCE.map((exp, i) => (
          <div
            className="exp-card fade-up"
            key={exp.company}
            ref={(el) => (refs.current[i] = el)}
          >
            <div className="exp-header">
              <div className="exp-role">{exp.role}</div>
              <div className="exp-period">{exp.period}</div>
            </div>
            <div className="exp-company">{exp.company}</div>
            <ul className="exp-bullets">
              {exp.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const refs = useStaggerFadeUp(PROJECTS.length);
  return (
    <section id="projects">
      <div className="section-label">02 — Projects</div>
      <h2 className="section-title">Things I've Built</h2>
      <div className="proj-grid">
        {PROJECTS.map((p, i) => (
          <div
            className="proj-card fade-up"
            key={p.num}
            ref={(el) => (refs.current[i] = el)}
          >
            <div className="proj-num">{p.num}</div>
            <div className="proj-title">{p.title}</div>
            <p className="proj-desc">{p.desc}</p>
            <div className="proj-tags">
              {p.tags.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
            {p.links.length > 0 && (
              <div className="proj-links">
                {p.links.map((l) => (
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="proj-link"
                    key={l.label}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const refs = useStaggerFadeUp(SKILLS.length);
  return (
    <section id="skills">
      <div className="section-label">04 — Skills</div>
      <h2 className="section-title">Tech Stack</h2>
      <div className="skills-grid">
        {SKILLS.map((s, i) => (
          <div
            className="skill-category fade-up"
            key={s.category}
            ref={(el) => (refs.current[i] = el)}
          >
            <div className="skill-cat-name">{s.category}</div>
            <div className="skill-items">
              {s.items.map((item) => (
                <div className="skill-item" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="course-section" style={{ marginTop: "60px" }}>
        <div className="section-label">Relevant Coursework</div>
        <div className="course-chips" style={{ marginTop: "20px" }}>
          {COURSEWORK.map((c) => (
            <div className="course-chip" key={c}>
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  const refs = useStaggerFadeUp(EDUCATION.length);
  return (
    <section id="education">
      <div className="section-label">05 — Education</div>
      <h2 className="section-title">Academic Background</h2>
      <div className="edu-list">
        {EDUCATION.map((e, i) => (
          <div
            className="edu-card fade-up"
            key={`${e.school}-${e.degree}`}
            ref={(el) => (refs.current[i] = el)}
          >
            <div className="edu-left">
              <div className="edu-school">{e.school}</div>
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-period">{e.period}</div>
            </div>
            <div>
              <div className="edu-score">{e.score}</div>
              <div className="edu-score-label">{e.scoreLabel}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Achievements() {
  const refs = useStaggerFadeUp(ACHIEVEMENTS.length);
  return (
    <section id="achievements">
      <div className="section-label">06 — Achievements</div>
      <h2 className="section-title">Milestones &amp; Recognition</h2>
      <div className="achieve-grid">
        {ACHIEVEMENTS.map((a, i) => (
          <div
            className="achieve-card fade-up"
            key={a.title}
            ref={(el) => (refs.current[i] = el)}
          >
            <div className="achieve-glow" />
            <div className="achieve-icon">{a.icon}</div>
            <div className="achieve-title">{a.title}</div>
            <p className="achieve-desc">{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const leftRef = useFadeUp();
  const rightRef = useFadeUp();
  return (
    <section id="contact">
      <div className="contact-wrapper">
        <div className="contact-left fade-up" ref={leftRef}>
          <div className="section-label">07 — Contact</div>
          <h2>
            Let's Build
            <br />
            <span>Something</span>
            <br />
            Together.
          </h2>
          <p>
            I'm currently open to internship roles, freelance projects, and
            full-time opportunities after graduation. If you have something in
            mind, let's talk.
          </p>
        </div>

        <div className="contact-cta fade-up" ref={rightRef}>
          <div className="contact-links">
            {CONTACT_LINKS.map((c) => (
              <a
                href={c.href}
                className="contact-link"
                key={c.label}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <div className="contact-link-icon">{c.icon}</div>
                <div className="contact-link-info">
                  <div className="contact-link-label">{c.label}</div>
                  <div className="contact-link-value">{c.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-left">
        © 2025 Soha Ratnam · Built with React &amp; Tailwind CSS
      </div>
    </footer>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const glowRef = useRef(null);
  const scrollRef = useRef(null);

  // Cursor glow
  useEffect(() => {
    const handler = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + "px";
        glowRef.current.style.top = e.clientY + "px";
      }
    };
    document.addEventListener("mousemove", handler);
    return () => document.removeEventListener("mousemove", handler);
  }, []);

  // Scroll progress bar
  useEffect(() => {
    const handler = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / total) * 100;
      if (scrollRef.current) scrollRef.current.style.width = progress + "%";
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <div className="grid-bg" />
      <div className="cursor-glow" ref={glowRef} />
      <div className="scroll-line" ref={scrollRef} />

      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main>
        <Hero />
        <div className="divider" />
        <About />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <Experience />
        <div className="divider" />
        <Skills />
        <div className="divider" />
        <Education />
        <div className="divider" />
        <Achievements />
        <div className="divider" />
        <Certifications />
        <div className="divider" />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
