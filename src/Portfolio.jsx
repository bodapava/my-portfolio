import React, { useState } from "react";
import "./Portfolio.css";

/*
  HOW THIS FILE IS ORGANIZED
  ----------------------------------------------
  1. DATA — plain arrays/objects up top (experience, education, languages,
     timeline). Edit these to update the site — you never need to touch the
     JSX/markup below to change what shows up.
  2. COMPONENT — renders the data. Two "tabs" (Home / Artifacts) are just a
     variable in React state (`activeTab`) that decides what to show — no
     routing library needed, which also means no extra setup for GitHub Pages.
*/

// ---------- 1. DATA — edit this section freely ----------

const profile = {
  name: "Priyanka Bodapati",
  title: "Senior Full Stack Developer",
  location: "Cincinnati, OH",
  email: "priyankabodapati59@gmail.com",
  phone: "+1 xxxxxxx",
  tagline:
    "Full-stack engineer with 8+ years building secure, reliable web applications for finance and payments companies — now expanding into AI and machine learning.",
  about:
    "I'm a full-stack software engineer with over 8 years of experience building web applications, mainly for finance and payments companies. I work across the whole stack — the parts people see and use, and the systems running behind the scenes — and I care most about building things that are secure, dependable, and easy to use. I'm currently growing my skills in AI and machine learning, and this site doubles as a place to document that journey.",
  // BASE_URL adapts automatically whether this site is hosted at the
  // domain root or in a GitHub Pages subfolder (e.g. /my-portfolio/).
  resumeUrl: `${import.meta.env.BASE_URL}Priyanka_Bodapati_Resume.pdf`,
  photoUrl: `${import.meta.env.BASE_URL}profile.jpg`,
  links: {
    github: "#", // TODO: add your GitHub profile URL
    linkedin: "#", // TODO: add your LinkedIn profile URL
  },
};

const languages = ["Java", "Python", "JavaScript", "React", "Angular", "Java", "Node", "GraphQl", "Postgres", "SQL"];

const experience = [
  {
    company: "WorldPay",
    role: "Senior Full Stack Developer",
    period: "Oct 2024 — Present",
    location: "Cincinnati, OH",
    summary:
      "Building secure, scalable web applications and APIs for a global payments platform, working across both the front end and back end.",
  },
  {
    company: "Fidelity Investments",
    role: "Full Stack Developer",
    period: "Feb 2023 — Sep 2024",
    location: "Cincinnati, OH",
    summary:
      "Developed customer-facing tools and backend services for one of the largest financial services firms in the country.",
  },
  {
    company: "Infosys",
    role: "Full Stack Developer",
    period: "Apr 2016 — Oct 2021",
    location: "Hyderabad, India",
    summary:
      "Built and maintained enterprise web applications for global clients, from initial design through deployment.",
  },
];

const education = [
  {
    degree: "Master's in Information Technology",
    school: "University of Cincinnati, Ohio",
  },
  {
    degree: "Bachelor's in Chemical Engineering",
    school: "Andhra University, Visakhapatnam, India",
  },
];

const timeline = [
  {
    year: 1950,
    kind: "origin",
    title: "Turing Test",
    desc: "Turing proposes the imitation game as a test for machine intelligence.",
  },
  {
    year: 1956,
    kind: "origin",
    title: "Dartmouth Conference",
    desc: "The term 'artificial intelligence' is coined — the field's founding event.",
  },
  {
    year: 1969,
    kind: "winter",
    title: "Perceptrons",
    desc: "Minsky & Papert show single-layer neural nets can't solve XOR, cooling research for a decade.",
  },
  {
    year: 1973,
    kind: "winter",
    title: "First AI Winter",
    desc: "The UK's Lighthill Report deems AI a failure; funding collapses.",
  },
  {
    year: 1986,
    kind: "origin",
    title: "Backpropagation",
    desc: "Rumelhart, Hinton & Williams popularize backprop, reviving neural network research.",
  },
  {
    year: 1987,
    kind: "winter",
    title: "Second AI Winter",
    desc: "The Lisp-machine market collapses; costly expert systems prove brittle.",
  },
  {
    year: 1997,
    kind: "origin",
    title: "Deep Blue",
    desc: "IBM's Deep Blue beats world chess champion Garry Kasparov.",
  },
  {
    year: 2012,
    kind: "boom",
    title: "AlexNet",
    desc: "Trained on GPUs, AlexNet wins ImageNet and ignites the deep learning boom.",
  },
  {
    year: 2016,
    kind: "boom",
    title: "AlphaGo",
    desc: "DeepMind's AlphaGo defeats Go champion Lee Sedol, years ahead of expert predictions.",
  },
  {
    year: 2017,
    kind: "boom",
    title: "Transformer",
    desc: "'Attention Is All You Need' introduces the architecture behind nearly every modern LLM.",
  },
  {
    year: 2022,
    kind: "boom",
    title: "ChatGPT",
    desc: "Generative AI reaches mainstream users, built on cloud-scale compute.",
  },
  {
    year: 2025,
    kind: "boom",
    title: "The GenAI Race",
    desc: "OpenAI, Google, Microsoft, Meta & Anthropic race as training compute doubles roughly every six months.",
  },
];

const discussionPost = {
  date: "July 2026",
  title: "What This Timeline Taught Me",
  body: `Looking at 75 years of AI history laid out side by side, one pattern jumps out: progress here has never been a straight line up. Twice — in the 1970s and again in the late 1980s — the field crashed hard after promising more than the technology could deliver, and funding disappeared almost overnight. Both times, AI came back once someone solved one unglamorous, practical problem: more data, more computing power, or a better piece of math, like backpropagation or the Transformer.

The takeaway I keep coming back to: today's AI boom will only last as long as it keeps solving real problems, not just generating hype. If I had to guess the next entry on this timeline, my bet isn't a "smarter" model — it's AI becoming reliable enough to be trusted with real responsibility, doing tasks correctly on its own instead of just answering questions well.`,
};

// ---------- 2. COMPONENT ----------

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="pf">
      <nav className="pf-nav">
        <div className="pf-wrap pf-nav-row">
          <div className="pf-mark">
            PB<span>.</span>
          </div>
          <div className="pf-tabs">
            <button className={activeTab === "home" ? "pf-tab active" : "pf-tab"} onClick={() => setActiveTab("home")}>
              Portfolio
            </button>
            <button
              className={activeTab === "artifacts" ? "pf-tab active" : "pf-tab"}
              onClick={() => setActiveTab("artifacts")}>
              Artifacts
            </button>
          </div>
        </div>
      </nav>

      {activeTab === "home" ? <HomeTab /> : <ArtifactsTab />}

      <footer className="pf-footer">
        <div className="pf-wrap pf-footer-row">
          <span>© 2026 {profile.name}</span>
          <div className="pf-footer-links">
            <a href={profile.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomeTab() {
  return (
    <>
      <header className="pf-hero">
        <div className="pf-wrap pf-hero-grid">
          <div>
            <span className="pf-tag">Open to new opportunities</span>
            <h1 className="pf-headline">
              Hi, I'm {profile.name.split(" ")[0]} — <em>{profile.title}.</em>
            </h1>
            <p className="pf-sub">{profile.tagline}</p>
            <div className="pf-meta-row">
              <div>
                Based in <b>{profile.location}</b>
              </div>
              <div>
                Email <b>{profile.email}</b>
              </div>
              <div>
                Phone <b>{profile.phone}</b>
              </div>
            </div>
            <div className="pf-cta-row">
              <a className="pf-btn pf-btn-primary" href={profile.resumeUrl} download>
                Download Résumé
              </a>
              <a className="pf-btn" href={`mailto:${profile.email}`}>
                Contact Me
              </a>
            </div>
          </div>
          <div className="pf-photo-wrap">
            <img src={profile.photoUrl} alt={profile.name} className="pf-photo" />
          </div>
        </div>
      </header>

      <section id="about">
        <div className="pf-wrap">
          <EntryLabel num="00" title="About" />
          <p className="pf-about">{profile.about}</p>
        </div>
      </section>

      <section id="languages">
        <div className="pf-wrap">
          <EntryLabel num="01" title="Languages Known" />
          <div className="pf-lang-row">
            {languages.map((lang) => (
              <span className="pf-lang-pill" key={lang}>
                {lang}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="experience">
        <div className="pf-wrap">
          <EntryLabel num="02" title="Experience" />
          {experience.map((job) => (
            <div className="pf-job" key={job.company}>
              <div className="pf-job-head">
                <div>
                  <div className="pf-job-role">{job.role}</div>
                  <div className="pf-job-company">
                    {job.company} · {job.location}
                  </div>
                </div>
                <div className="pf-job-period">{job.period}</div>
              </div>
              <p className="pf-job-summary">{job.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="education">
        <div className="pf-wrap">
          <EntryLabel num="03" title="Education" />
          <div className="pf-edu-grid">
            {education.map((ed) => (
              <div className="pf-edu" key={ed.degree}>
                <div className="pf-edu-degree">{ed.degree}</div>
                <div className="pf-edu-school">{ed.school}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ArtifactsTab() {
  return (
    <section id="artifacts" className="pf-artifacts-section">
      <div className="pf-wrap">
        <EntryLabel num="A1" title="AI & ML Timeline" />
        <p className="pf-artifacts-intro">
          A visual walk through 75 years of artificial intelligence — the breakthroughs, and the two "winters" where the
          field nearly stalled out.
        </p>

        <div className="pf-timeline-scroll">
          {timeline.map((t) => (
            <div className="pf-tl-item" key={t.year}>
              <div className="pf-tl-year">{t.year}</div>
              <div>
                <span className={`pf-tl-dot pf-dot-${t.kind}`} />
                <span className="pf-tl-title">{t.title}</span>
              </div>
              <div className="pf-tl-desc">{t.desc}</div>
            </div>
          ))}
        </div>

        <div className="pf-legend">
          <span>
            <i className="pf-tl-dot pf-dot-origin" /> Origins & Breakthroughs
          </span>
          <span>
            <i className="pf-tl-dot pf-dot-winter" /> AI Winters
          </span>
          <span>
            <i className="pf-tl-dot pf-dot-boom" /> Deep Learning & Generative AI
          </span>
        </div>

        <div className="pf-post">
          <div className="pf-post-date">{discussionPost.date} · Discussion</div>
          <h3 className="pf-post-title">{discussionPost.title}</h3>
          {discussionPost.body.split("\n\n").map((para, i) => (
            <p className="pf-post-body" key={i}>
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Small reusable pieces ----------

function EntryLabel({ num, title }) {
  return (
    <div className="pf-entry-label">
      <span className="pf-entry-num">{num}</span>
      <span className="pf-entry-title">{title}</span>
      <span className="pf-entry-line" />
    </div>
  );
}
