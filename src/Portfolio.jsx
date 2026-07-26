import React, { useState, useEffect } from "react";
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
    github: "https://github.com/bodapava", // TODO: add your GitHub profile URL
    linkedin: "https://www.linkedin.com/in/priyanka-bodapati-94945a261", // TODO: add your LinkedIn profile URL
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

const mlVsDl = {
  intro:
    "Deep learning isn't a separate technology from machine learning — it's a subset of it. Every deep learning system is a machine learning system, but most machine learning systems aren't deep learning. The question worth asking on any real project isn't \"which one is smarter,\" it's \"which one fits my data, my budget, and my need to explain the answer.\"",
  plain: {
    ml: "Machine Learning (ML): software that finds patterns in data using statistical methods (like decision trees, linear regression, or random forests) instead of being explicitly programmed with rules. A person still tells it which features of the data to look at.",
    dl: 'Deep Learning (DL): a type of ML built from layered "neural networks" loosely inspired by the brain. Instead of a person picking out the important features, the network discovers them itself directly from raw data — pixels, audio waves, or words.',
  },
  comparisons: [
    {
      aspect: "How it learns",
      ml: "Learns from features a person selects and prepares ahead of time.",
      dl: "Learns its own features straight from raw data, layer by layer.",
    },
    {
      aspect: "Data needed",
      ml: "Works well with small to medium datasets — hundreds to tens of thousands of rows.",
      dl: "Needs large datasets, often hundreds of thousands to millions of examples, to perform well.",
    },
    {
      aspect: "Hardware",
      ml: "Trains fine on a normal laptop or CPU.",
      dl: "Usually needs a GPU (or cluster of them) to train in a reasonable amount of time.",
    },
    {
      aspect: "Training time",
      ml: "Minutes to a few hours.",
      dl: "Hours to weeks, depending on model and data size.",
    },
    {
      aspect: "Explainability",
      ml: "Easier to explain why it made a decision — you can point to the features that mattered.",
      dl: 'Harder to interpret — often described as a "black box."',
    },
    {
      aspect: "Best suited for",
      ml: "Structured, tabular data: spreadsheets, transaction logs, form fields.",
      dl: "Unstructured data: images, video, audio, and natural language.",
    },
  ],
  whenToUse: {
    ml: [
      "Your dataset is small or medium sized",
      "You need to explain a decision to a regulator, auditor, or customer",
      "You need cheap, fast training and predictions on ordinary hardware",
      "The problem is structured/tabular — rows and columns, not pixels or sound",
    ],
    dl: [
      "You have a large volume of raw, unstructured data to learn from",
      "Hand-crafting features would be impractical or impossible",
      "You have access to GPUs and can tolerate longer training times",
      "The task involves recognizing complex patterns humans can't easily write as rules",
    ],
  },
  caseStudies: [
    {
      tag: "Machine Learning",
      title: "Email Spam Filtering",
      body: "Most spam filters are built on classic ML algorithms like Naive Bayes or logistic regression, not deep neural networks. Each email is turned into a handful of well-understood features — word frequency, sender reputation, presence of links, excessive capitalization — and a lightweight model classifies it as spam or not. This is a good ML fit because the signals are well known, the dataset needed is modest, and the filter has to run instantly across billions of inboxes on cheap hardware. A large neural network would cost far more to run and train for barely any accuracy gain.",
    },
    {
      tag: "Deep Learning",
      title: "Tesla Autopilot & Full Self-Driving",
      body: "Tesla's driving system relies on deep learning — convolutional and transformer-based neural networks — to process raw video from eight cameras in real time. It has to recognize pedestrians, lane lines, traffic lights, and other vehicles across a nearly infinite range of lighting, weather, and road conditions, something no one could hand-code as explicit rules. Tesla trains these networks on billions of miles of real driving footage from its fleet, using massive GPU clusters. That combination — huge raw data, unstructured input, and patterns too complex to describe by hand — is exactly the kind of problem deep learning was built for.",
    },
  ],
};

const neuralNet = {
  coreIdea:
    "A neural network learns the way you do — not from hard-coded rules, but from repetition. You didn't memorize a checklist to recognize your best friend's face; you just saw it enough times, from enough angles, that your brain built its own rules. A neural network does the same thing, just with numbers instead of instinct.",
  neuronIntro:
    "Every network is built from one repeated block: the artificial neuron. It takes in numbers, multiplies each by a \"weight\" for how much it matters, adds them up, and decides whether to fire. Here's that same decision, playing out over pizza toppings instead of pixels — drag the sliders and watch.",
  activationIntro:
    "The neuron above uses the simplest rule there is: cross a threshold, fire — otherwise stay quiet. That rule is called an activation function, the \"switch\" that turns a weighted sum into an output. A hard on/off switch is easy to picture but bad for learning, since a tiny weight change almost never flips it. Real networks lean on smoother switches instead:",
  activationTypes: [
    {
      name: "Step Function",
      desc: "Outputs a flat 1 past a threshold, 0 below it — what the neuron above uses. Simple, but too rigid for real training.",
      example: "A wall light switch: fully on or off, nothing in between.",
    },
    {
      name: "Sigmoid",
      desc: "Squashes any input into a smooth 0–1 curve, so a neuron can express \"a little confident\" instead of a flat yes or no.",
      example: "A spam filter reporting \"87% likely spam\" instead of a flat yes/no.",
    },
    {
      name: "Tanh",
      desc: "The same S-curve as sigmoid, but ranges from -1 to 1 — letting a neuron express a negative signal, not just a weak positive one.",
      example: "Sentiment scoring that ranges from clearly negative to clearly positive.",
    },
    {
      name: "ReLU (Rectified Linear Unit)",
      desc: "Passes positive numbers through untouched, flattens negatives to zero. Cheap and fast, which is why most hidden layers default to it.",
      example: "The hidden layers behind most photo filters, like Instagram and Snapchat effects.",
    },
    {
      name: "Softmax",
      desc: "Used only in the output layer — converts raw scores into probabilities that add up to 100%, so the network can pick its best guess.",
      example: "How ChatGPT picks its next word, or a photo app decides cat vs. dog vs. fox.",
    },
  ],
  chainIntro:
    "One neuron only makes a single yes/no call. Real power comes from chaining thousands of them into layers — the \"chain of thought\" that turns raw pixels into \"that's a cat.\" Think of a factory line: the first layer spots crude patterns, like edges. The next combines those into shapes — an ear, an eye. Later layers combine shapes into faces. By the last layer, it's not looking at pixels anymore — it's confidently saying \"cat.\"",
  trainingIntro:
    "A new network starts with random weights, so its first guesses are close to nonsense. It gets smart through a repeating training loop — try, get told how wrong, adjust, try again. Click through the steps:",
  trainingSteps: [
    {
      title: "1. Forward Pass",
      desc: "The network pushes one example — say, a photo — through every layer to produce a guess, like \"72% cat.\"",
    },
    {
      title: "2. Compute the Loss",
      desc: "A \"loss function\" compares the guess to the real answer and boils the error into one number — lower is better.",
    },
    {
      title: "3. Backpropagation",
      desc: "The network works backward through each layer, calculating how much every weight contributed to the error.",
    },
    {
      title: "4. Update the Weights",
      desc: "Each weight gets nudged toward the value that would have reduced the error — a method called gradient descent.",
    },
    {
      title: "5. Repeat — Thousands of Times",
      desc: "Steps 1–4 run again on the next example, then the next — often millions of times — until guesses stop improving.",
    },
  ],
  types: [
    {
      tag: "The Basic One",
      name: "Feedforward Neural Network",
      desc: "Information flows one direction, input to output, with no loops or memory — the simplest architecture, and the one diagrammed above.",
      example:
        "Bank credit-scoring models that predict loan default risk from a customer's income, debt, and payment history.",
    },
    {
      tag: "Sees Images",
      name: "Convolutional Neural Network (CNN)",
      desc: "Scans small patches of an image at a time, so it can spot a shape no matter where it appears in the picture.",
      example: "The face filters on Instagram and Snapchat, and radiology tools that flag possible tumors in an X-ray.",
    },
    {
      tag: "Remembers Sequences",
      name: "Recurrent Neural Network (RNN / LSTM)",
      desc: "Carries memory from one step to the next, so earlier inputs in a sequence shape how later ones are understood.",
      example:
        "The autocomplete that predicts your next word while texting, or models that forecast tomorrow's stock price from the last 30 days.",
    },
    {
      tag: "Reads Everything at Once",
      name: "Transformer",
      desc: "Reads an entire sequence at once, using \"attention\" to weigh which earlier words matter most to the word it's currently working on.",
      example: "ChatGPT, Google Translate, and virtually every modern large language model.",
    },
  ],
  blackBox:
    "Here's the catch: once trained, a network's \"knowledge\" is smeared across millions of numeric weights that no human can read line by line. Nobody can point to one weight and say \"this is why it called that a cat.\" That's the black box problem — deep learning trades interpretability for accuracy.\n\nIt's not just academic. A bank using a network to reject a loan, or a hospital using one to flag a scan, often can't fully explain the call to a regulator or a patient. That gap is exactly why explainable AI (XAI) has become its own field — an attempt to pry the box open, at least a little.",
};

// ---------- 2. COMPONENT ----------

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

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

const artifactsMeta = [
  {
    id: "timeline",
    num: "A1",
    title: "AI & ML Timeline",
    tags: ["Data Visualization", "AI History"],
    summary:
      "A visual walk through 75 years of artificial intelligence — the breakthroughs, and the two \"winters\" where the field nearly stalled out.",
  },
  {
    id: "mlvsdl",
    num: "A2",
    title: "Machine Learning vs. Deep Learning",
    tags: ["Machine Learning", "Deep Learning"],
    summary:
      "A side-by-side comparison of ML and DL — how each learns, what it needs to work well, and which real-world problems it's actually built for.",
  },
  {
    id: "neuralnet",
    num: "A3",
    title: "Neural Networks Explained",
    tags: ["Deep Learning", "Interactive"],
    summary:
      "How machines learn patterns the way humans do — broken into simple building blocks, with an interactive neuron you can play with yourself.",
  },
];

function ArtifactsTab() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selected]);

  if (selected === "timeline") return <TimelineArtifact onBack={() => setSelected(null)} />;
  if (selected === "mlvsdl") return <MlVsDlArtifact onBack={() => setSelected(null)} />;
  if (selected === "neuralnet") return <NeuralNetworkArtifact onBack={() => setSelected(null)} />;

  return (
    <section id="artifacts" className="pf-artifacts-section">
      <div className="pf-wrap">
        <div className="pf-entry-label">
          <span className="pf-entry-title">Artifacts</span>
          <span className="pf-entry-line" />
        </div>
        <p className="pf-artifacts-intro">
          A collection of write-ups from my AI &amp; ML coursework. Pick one below to read the full piece.
        </p>

        <div className="pf-artifact-list">
          {artifactsMeta.map((a) => (
            <div className="pf-artifact-card" key={a.id}>
              <div className="pf-artifact-card-head">
                <span className="pf-entry-num">{a.num}</span>
                <h3 className="pf-artifact-card-title">{a.title}</h3>
              </div>
              <p className="pf-artifact-summary">{a.summary}</p>
              <div className="pf-artifact-meta">
                {a.tags.map((t) => (
                  <span className="pf-tag-pill" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <button className="pf-btn pf-btn-primary" onClick={() => setSelected(a.id)}>
                View Artifact →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BackButton({ onBack }) {
  return (
    <button className="pf-back-btn" onClick={onBack}>
      ← Back to Artifacts
    </button>
  );
}

function TimelineArtifact({ onBack }) {
  return (
    <section id="artifacts" className="pf-artifacts-section">
      <div className="pf-wrap">
        <BackButton onBack={onBack} />
        <EntryLabel num="A1" title="AI & ML Timeline" />
        <p className="pf-artifacts-intro">
          A visual walk through 75 years of artificial intelligence — the breakthroughs, and the two "winters" where the
          field nearly stalled out.
        </p>

        <div className="pf-timeline-flow">
          {timeline.map((t, i) => (
            <React.Fragment key={t.year}>
              <div className={`pf-tl-node pf-tl-node-${t.kind}`}>
                <div className="pf-tl-node-head">
                  <span className={`pf-tl-dot pf-dot-${t.kind}`} />
                  <span className="pf-tl-year">{t.year}</span>
                  <span className="pf-tl-title">{t.title}</span>
                </div>
                <div className="pf-tl-desc">{t.desc}</div>
              </div>
              {i < timeline.length - 1 && (
                <div className="pf-tl-connector">
                  <span className="pf-tl-connector-line" />
                  <span className="pf-tl-connector-arrow" />
                </div>
              )}
            </React.Fragment>
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

function MlVsDlArtifact({ onBack }) {
  return (
    <section id="artifacts" className="pf-artifacts-section">
      <div className="pf-wrap">
        <BackButton onBack={onBack} />
        <EntryLabel num="A2" title="Machine Learning vs. Deep Learning" />
        <p className="pf-artifacts-intro">{mlVsDl.intro}</p>

        <div className="pf-plain-grid">
          <div className="pf-plain-card">
            <span className="pf-tag-pill">Machine Learning</span>
            <p className="pf-plain-text">{mlVsDl.plain.ml}</p>
          </div>
          <div className="pf-plain-card">
            <span className="pf-tag-pill">Deep Learning</span>
            <p className="pf-plain-text">{mlVsDl.plain.dl}</p>
          </div>
        </div>

        <div className="pf-table-scroll">
          <table className="pf-ml-table">
            <thead>
              <tr>
                <th></th>
                <th>Machine Learning</th>
                <th>Deep Learning</th>
              </tr>
            </thead>
            <tbody>
              {mlVsDl.comparisons.map((row) => (
                <tr key={row.aspect}>
                  <td className="pf-ml-aspect">{row.aspect}</td>
                  <td>{row.ml}</td>
                  <td>{row.dl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pf-when-grid">
          <div className="pf-when-card">
            <div className="pf-when-title">Choose Machine Learning when…</div>
            <ul className="pf-highlights">
              {mlVsDl.whenToUse.ml.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="pf-when-card">
            <div className="pf-when-title">Choose Deep Learning when…</div>
            <ul className="pf-highlights">
              {mlVsDl.whenToUse.dl.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pf-case-grid">
          {mlVsDl.caseStudies.map((study) => (
            <div className="pf-case-card" key={study.title}>
              <span className="pf-tag-pill">{study.tag}</span>
              <h4 className="pf-case-title">{study.title}</h4>
              <p className="pf-case-body">{study.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NeuralNetworkArtifact({ onBack }) {
  return (
    <section id="artifacts" className="pf-artifacts-section">
      <div className="pf-wrap">
        <BackButton onBack={onBack} />
        <EntryLabel num="A3" title="Neural Networks Explained" />
        <p className="pf-artifact-subtitle">How Machines Learn Patterns Like Humans</p>

        <p className="pf-artifacts-intro">{neuralNet.coreIdea}</p>

        <div className="pf-nn-block">
          <h3 className="pf-nn-subhead">The Artificial Neuron</h3>
          <p className="pf-artifacts-intro">{neuralNet.neuronIntro}</p>
          <NeuronDemo />
        </div>

        <div className="pf-nn-block">
          <h3 className="pf-nn-subhead">The Activation Function: the Neuron's Switch</h3>
          <p className="pf-artifacts-intro">{neuralNet.activationIntro}</p>
          <div className="pf-case-grid pf-activation-grid">
            {neuralNet.activationTypes.map((a) => (
              <div className="pf-case-card" key={a.name}>
                <h4 className="pf-case-title">{a.name}</h4>
                <p className="pf-case-body">{a.desc}</p>
                <p className="pf-case-body pf-case-example">
                  <b>Real world:</b> {a.example}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="pf-nn-block">
          <h3 className="pf-nn-subhead">Chain of Thought: How Layers Connect</h3>
          <p className="pf-artifacts-intro">{neuralNet.chainIntro}</p>
          <div className="pf-chain-diagram">
            <LayerDiagram layers={[3, 4, 4, 2]} />
            <div className="pf-chain-labels">
              <span>Input Layer</span>
              <span>Hidden Layer</span>
              <span>Hidden Layer</span>
              <span>Output Layer</span>
            </div>
          </div>
        </div>

        <div className="pf-nn-block">
          <h3 className="pf-nn-subhead">The Training Loop</h3>
          <p className="pf-artifacts-intro">{neuralNet.trainingIntro}</p>
          <TrainingStepper steps={neuralNet.trainingSteps} />
        </div>

        <div className="pf-nn-block">
          <h3 className="pf-nn-subhead">Types of Neural Networks</h3>
          <div className="pf-case-grid">
            {neuralNet.types.map((t) => (
              <div className="pf-case-card" key={t.name}>
                <span className="pf-tag-pill">{t.tag}</span>
                <h4 className="pf-case-title">{t.name}</h4>
                <p className="pf-case-body">{t.desc}</p>
                <p className="pf-case-body pf-case-example">
                  <b>Real world:</b> {t.example}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="pf-post">
          <div className="pf-post-date">Limitation · Worth Knowing</div>
          <h3 className="pf-post-title">The Black Box Problem</h3>
          {neuralNet.blackBox.split("\n\n").map((para, i) => (
            <p className="pf-post-body" key={i}>
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function NeuronDemo() {
  const [salt, setSalt] = useState(6);
  const [cheese, setCheese] = useState(6);
  const [pickiness, setPickiness] = useState(5);

  const sum = salt * 0.6 + cheese * 0.8 - pickiness;
  const fires = sum > 2;

  return (
    <div className="pf-neuron-demo">
      <div className="pf-neuron-controls">
        <label>
          <span>
            How salty do you like food? <b>{salt}/10</b>
          </span>
          <input type="range" min="0" max="10" value={salt} onChange={(e) => setSalt(Number(e.target.value))} />
        </label>
        <label>
          <span>
            How cheesy does the pizza need to be? <b>{cheese}/10</b>
          </span>
          <input type="range" min="0" max="10" value={cheese} onChange={(e) => setCheese(Number(e.target.value))} />
        </label>
        <label>
          <span>
            How picky are you feeling tonight? <b>{pickiness}/10</b>
          </span>
          <input
            type="range"
            min="0"
            max="10"
            value={pickiness}
            onChange={(e) => setPickiness(Number(e.target.value))}
          />
        </label>
      </div>

      <div className="pf-neuron-visual">
        <svg viewBox="0 0 320 140" className="pf-nn-svg" role="img" aria-label="Artificial neuron diagram">
          <line x1="50" y1="35" x2="180" y2="70" className="pf-nn-edge" />
          <line x1="50" y1="105" x2="180" y2="70" className="pf-nn-edge" />
          <line x1="180" y1="70" x2="270" y2="70" className={`pf-nn-edge${fires ? " pf-nn-edge-active" : ""}`} />
          <circle cx="50" cy="35" r="16" className="pf-nn-node pf-nn-node-in" />
          <circle cx="50" cy="105" r="16" className="pf-nn-node pf-nn-node-in" />
          <circle cx="180" cy="70" r="22" className={`pf-nn-node pf-nn-node-sum${fires ? " pf-nn-firing" : ""}`} />
          <text x="180" y="75" textAnchor="middle" className="pf-nn-label">
            Σ
          </text>
          <circle cx="270" cy="70" r="16" className={`pf-nn-node pf-nn-node-out${fires ? " pf-nn-firing" : ""}`} />
        </svg>
        <p className={`pf-neuron-result ${fires ? "pf-fires" : "pf-quiet"}`}>
          {fires ? "🔥 Neuron fires — you'll love this pizza!" : "😐 Neuron stays quiet — not tonight."}
        </p>
      </div>
    </div>
  );
}

function LayerDiagram({ layers, width = 600, height = 240 }) {
  const layerX = layers.map((_, i) => 50 + (i * (width - 100)) / (layers.length - 1));
  const positions = layers.map((count, li) => {
    const gap = height / (count + 1);
    return Array.from({ length: count }, (_, ni) => ({ x: layerX[li], y: gap * (ni + 1) }));
  });

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="pf-nn-svg" role="img" aria-label="Neural network layer diagram">
      {positions.slice(0, -1).map((layerPos, li) =>
        layerPos.map((p1, i1) =>
          positions[li + 1].map((p2, i2) => (
            <line key={`e-${li}-${i1}-${i2}`} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} className="pf-nn-edge" />
          ))
        )
      )}
      {positions.map((layerPos, li) =>
        layerPos.map((p, i) => (
          <circle
            key={`n-${li}-${i}`}
            cx={p.x}
            cy={p.y}
            r={13}
            className={`pf-nn-node ${
              li === 0 ? "pf-nn-node-in" : li === positions.length - 1 ? "pf-nn-node-out" : "pf-nn-node-hidden"
            }`}
          />
        ))
      )}
    </svg>
  );
}

function TrainingStepper({ steps }) {
  const [step, setStep] = useState(0);
  const total = steps.length;

  return (
    <div className="pf-stepper">
      <div className="pf-stepper-dots">
        {steps.map((s, i) => (
          <button
            key={s.title}
            className={`pf-stepper-dot${i === step ? " active" : ""}`}
            onClick={() => setStep(i)}
            aria-label={s.title}>
            {i + 1}
          </button>
        ))}
      </div>
      <div className="pf-stepper-card">
        <div className="pf-stepper-title">{steps[step].title}</div>
        <p className="pf-stepper-desc">{steps[step].desc}</p>
      </div>
      <div className="pf-stepper-nav">
        <button className="pf-btn" onClick={() => setStep((step - 1 + total) % total)}>
          ← Prev
        </button>
        <span className="pf-stepper-count">
          {step + 1} / {total}
        </span>
        <button className="pf-btn pf-btn-primary" onClick={() => setStep((step + 1) % total)}>
          {step === total - 1 ? "↺ Loop back to Step 1" : "Next →"}
        </button>
      </div>
    </div>
  );
}

function EntryLabel({ num, title }) {
  return (
    <div className="pf-entry-label">
      <span className="pf-entry-num">{num}</span>
      <span className="pf-entry-title">{title}</span>
      <span className="pf-entry-line" />
    </div>
  );
}
