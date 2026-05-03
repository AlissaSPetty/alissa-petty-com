import { IconGitHub, IconLinkedIn } from '../components/Icons'
import { Link } from 'react-router-dom'

const GITHUB = 'https://github.com/AlissaSPetty'
const LINKEDIN = 'https://www.linkedin.com/in/alissa-petty/'
const EMAIL = 'mailto:alissa@petty.io'

export function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className="hero" aria-label="Introduction">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1>Hiya! My name is Alissa Petty.</h1>
            <p className="lead">
              I am a Senior Software Engineer with over 9 years of experience at
              companies like Mailchimp, Intuit, and Hi-Rez Studios. I am actively
              looking for my next role where I can hit the ground running and make
              a meaningful impact in the industry.
            </p>
            <div className="hero-actions">
              <a className="btn btn-outline" href="#skills">
                Skills
              </a>
              <a className="btn btn-primary" href={EMAIL}>
                Contact me
              </a>
            </div>
            <div className="hero-social" aria-label="Social links">
              <a href={GITHUB} target="_blank" rel="noreferrer" title="GitHub">
                <IconGitHub className="social-svg" />
                <span className="visually-hidden">GitHub</span>
              </a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" title="LinkedIn">
                <IconLinkedIn className="social-svg" />
                <span className="visually-hidden">LinkedIn</span>
              </a>
            </div>
          </div>
          <figure className="hero-photo">
            <img
              src="src/assets/Alissa-Petty.png"
              alt="Alissa Petty"
              width={600}
              height={600}
            />
          </figure>
        </div>
      </header>

      <main id="main-content">
        <section className="section section--dark" aria-labelledby="about-heading">
          <div className="container">
            <h2 id="about-heading" className="section-title section-title--on-dark">
              About me
            </h2>
            <div className="about-grid">
              <article className="card card--about">
                <h3>Hey there!</h3>
                <p>
                  I&apos;m Alissa Petty, a Senior Software Engineer who lives in the
                  Atlanta area. Over the past eight years I&apos;ve dived deep into
                  React, TypeScript, and modern front-end architecture, building
                  everything from reusable component libraries to high-traffic
                  marketplaces. I love the blend of creativity and precision that
                  software engineering demands.
                </p>
              </article>
              <article className="card card--about">
                <h3>Highlights</h3>
                <p>
                  My career has taken me from revamping legacy LEMP sites at Hi-Rez
                  Studios to leading accessibility-first initiatives at Mailchimp,
                  where I helped cut engineering setup time by 40% with a
                  Storybook-driven workflow. Most recently I founded The Grail Club,
                  a niche online marketplace where I have introduced data-driven A/B
                  testing, and built dashboards in Looker Studio to keep the business
                  humming. Along the way I&apos;ve embraced AI tools like GitHub
                  Copilot, Claude, and Lumo to turbocharge code generation and
                  testing—often shaving hours off a typical development cycle.
                </p>
              </article>
              <article className="card card--about">
                <h3>Hobbies</h3>
                <p>
                  When I&apos;m not glued to a keyboard, you&apos;ll find me exploring
                  the latest UI/UX trends, tinkering with performance-optimizing tricks,
                  or mentoring the next wave of front-end talent. I&apos;m passionate
                  about building inclusive digital products that work for everyone,
                  and I&apos;m always on the lookout for fresh challenges where I can
                  blend solid engineering fundamentals with a dash of AI-enhanced
                  creativity. Feel free to reach out—let&apos;s build something awesome
                  together!
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--skills" id="skills" aria-labelledby="skills-heading">
          <div className="container skills-layout">
            <div className="skills-panel">
              <h2 id="skills-heading" className="section-title">
                Skills
              </h2>
              <h4>Technical skills</h4>
              <ul>
                <li>SaaS development</li>
                <li>React, Next.js, Redux Toolkit, TypeScript, JavaScript (ES6+)</li>
                <li>CSS, Storybook, Material UI, Styled Components, Tailwind</li>
                <li>JAMstack architecture, HTML5, CSS3, responsive design</li>
                <li>Relational databases &amp; APIs (MongoDB, SQL)</li>
              </ul>
              <h4>Testing and quality assurance</h4>
              <ul>
                <li>Test-driven development (TDD)</li>
                <li>Visual regression testing with Chromatic &amp; Storybook</li>
                <li>WCAG 2.1 AA compliance, automated accessibility audits</li>
                <li>GDPR compliance</li>
              </ul>
              <h4>Team leadership &amp; talent development</h4>
              <ul>
                <li>
                  Mentoring junior engineers using regular code reviews,
                  pair-programming sessions, and constructive feedback loops.
                </li>
                <li>
                  Leading cross-functional squads through translating requirements into
                  technical specs, championing accessibility standards, and using async
                  communication tools to keep remote teams aligned and productive.
                </li>
                <li>
                  Evaluating candidates on both technical and soft skills, conducting
                  hands-on interviews to gauge real-world teamwork potential.
                </li>
              </ul>
            </div>
            <div className="skills-panel skills-panel--accent">
              <h2 className="section-title">Expertise</h2>
              <p className="degree">Auburn University graduate</p>
              <h4>Analytics &amp; monitoring</h4>
              <ul>
                <li>
                  Google Analytics 4 (GA4), Looker Studio, Grafana dashboards, FullStory
                </li>
              </ul>
              <h4>AI-assisted development</h4>
              <ul>
                <li>GitHub Copilot, Claude, Lumo (component generation)</li>
              </ul>
              <h4>Collaboration &amp; documentation</h4>
              <ul>
                <li>
                  Storybook, Chromatic, design system documentation, async remote teamwork
                </li>
              </ul>
              <h4>Performance &amp; observation</h4>
              <ul>
                <li>
                  Lighthouse, Web Vitals, code-splitting, lazy loading, caching strategies
                </li>
              </ul>
              <h4>State management &amp; data</h4>
              <ul>
                <li>GraphQL, RESTful APIs, Apollo Client, Redux Toolkit</li>
              </ul>
            </div>
          </div>
        </section>

{/* uncomment when you find the assets */}
        {/* <section className="section" aria-labelledby="work-heading">
          <div className="container">
            <h2 id="work-heading" className="section-title">
              Selected design-heavy work
            </h2>
            <div className="work-grid">
              <figure>
                <img src="/assets/hou-yi.svg" alt="" loading="lazy" />
                <figcaption>Hou-Yi · God reveal</figcaption>
              </figure>
              <figure>
                <img src="/assets/stranger-things.svg" alt="" loading="lazy" />
                <figcaption>Stranger Things · Battle pass</figcaption>
              </figure>
              <figure>
                <img src="/assets/ah-puch.svg" alt="" loading="lazy" />
                <figcaption>Ah Puch · God reveal</figcaption>
              </figure>
            </div>
          </div>
        </section> */}

        <section className="section section--muted" aria-labelledby="pub-heading">
          <div className="container">
            <h2 id="pub-heading" className="section-title">
              Featured publications
            </h2>
            <div className="pub-grid">
              <article className="pub-card">
                <h3>Getting into gaming featuring women at Hi-Rez Studios</h3>
                <img
                  src="src/assets/gmg.jpeg"
                  alt=""
                  className="pub-logo"
                  width={186}
                  height={187}
                />
                <a
                  className="btn btn-outline btn-block"
                  href="https://www.girlsmakegames.com/hi-rez-panel"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read the article
                </a>
              </article>
              <article className="pub-card">
                <h3>How Hi-Rez Studios built their web infra on Gatsby &amp; WordPress</h3>
                <img
                  src="src/assets/gatsby.jpg"
                  alt=""
                  className="pub-logo"
                  width={249}
                  height={187}
                />
                <a
                  className="btn btn-outline btn-block"
                  href="https://www.gatsbyjs.com/blog/case-study-hi-rez-studios/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read the article
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--cta" aria-labelledby="help-heading">
          <div className="container">
            <h2 id="help-heading" className="section-title section-title--on-primary">
              How can I help?
            </h2>
            <p className="cta-lead">
              I am actively looking for my next opportunity to commit great code and
              build lasting relationships. Want to chat? Reach out!
            </p>
            <div className="services-grid">
              <article className="card card--service">
                <h3>Coding</h3>
                <p>
                  I craft clean, high-performance test-driven code that turns your ideas
                  into fast, accessible web experiences you can rely on—and I&apos;m
                  ready to hit the ground running from day one.
                </p>
              </article>
              <article className="card card--service">
                <h3>Marketing &amp; analytics</h3>
                <p>
                  I combine data-driven marketing insights with robust analytics—using
                  tools like GA4, Looker Studio, and custom dashboards—to optimize
                  campaigns, boost ROI, and turn audience behavior into actionable
                  growth strategies.
                </p>
              </article>
              <article className="card card--service">
                <h3>Problem solving</h3>
                <p>
                  Not sure exactly what you need, but want an extremely experienced and
                  fast-thinking person to help champion your ideas? I would love to help
                  craft a custom solution by listening and deeply understanding the needs
                  of your business so you can move forward with confidence.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <h2 className="footer-name">Alissa Petty</h2>
          <div className="footer-social" aria-label="Social links">
            <a href={GITHUB} target="_blank" rel="noreferrer" title="GitHub">
              <IconGitHub className="social-svg social-svg--footer" />
              <span className="visually-hidden">GitHub</span>
            </a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" title="LinkedIn">
              <IconLinkedIn className="social-svg social-svg--footer" />
              <span className="visually-hidden">LinkedIn</span>
            </a>
          </div>
          <p className="footer-copy">© {new Date().getFullYear()} Alissa Petty. All rights reserved.</p>
          <p className="footer-legal">
            <Link to="/privacy">Privacy policy</Link>
            <span aria-hidden="true"> | </span>
            <Link to="/legal-notice">Legal notice</Link>
          </p>
        </div>
      </footer>
    </>
  )
}
