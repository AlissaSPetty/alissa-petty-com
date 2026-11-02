import { Experience } from '../components/Experience'
import { IconGitHub, IconLinkedIn } from '../components/Icons'
import alissaPhoto from '../assets/Alissa-Petty.png'
import gatsbyLogo from '../assets/gatsby.jpg'
import girlsMakeGamesLogo from '../assets/gmg.jpeg'

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
              I am a Senior Software Engineer with over 10 years of experience at
              companies like Mailchimp, Intuit, and Hi-Rez Studios, and I currently
              work at Soltech.
            </p>
            <div className="stat-tiles hero-stats">
              <p>
                <strong>10+</strong>
                years shipping
              </p>
              <p>
                <strong>10M+</strong>
                daily API calls served
              </p>
              <p>
                <strong>~90%</strong>
                test coverage standards
              </p>
            </div>
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
              src={alissaPhoto}
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
                  Atlanta area. Over the past 10 years I&apos;ve dived deep into
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
                  Storybook-driven workflow. I also founded The Grail Club,
                  a niche online marketplace where I have introduced data-driven A/B
                  testing, and built dashboards in Looker Studio to keep the business
                  humming. Since May 2026 I&apos;ve been at Soltech,
                  where I&apos;m helping build a greenfield contract system
                  of record on React, TypeScript, and Supabase, and leading the
                  team&apos;s AI adoption with shared Claude Code conventions and an
                  AI code-review skill that checks pull requests against company
                  standards. Along the way I&apos;ve embraced AI tools like GitHub
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

        <Experience />

        <section className="section section--skills" id="skills" aria-labelledby="skills-heading">
          <div className="container skills-layout">
            <div className="skills-panel">
              <h2 id="skills-heading" className="section-title">
                Skills
              </h2>
              <h4>Languages &amp; frameworks</h4>
              <ul className="sparkle-list">
                <li>TypeScript, JavaScript (ES6+)</li>
                <li>React 19, Gatsby, Vite</li>
                <li>Node.js (Fastify, Express)</li>
              </ul>
              <h4>APIs &amp; architecture</h4>
              <ul className="sparkle-list">
                <li>RESTful API design, GraphQL, schema-driven UIs</li>
                <li>Multi-tenant systems, serverless &amp; edge functions</li>
                <li>Caching &amp; read-path optimization, async job pipelines</li>
              </ul>
              <h4>Data stores</h4>
              <ul className="sparkle-list">
                <li>Supabase (Postgres, Auth, RLS, Edge Functions, Realtime)</li>
                <li>Postgres 15 (pg_cron, migrations, query tuning), MySQL</li>
                <li>MongoDB, DynamoDB</li>
              </ul>
              <h4>Cloud &amp; DevOps</h4>
              <ul className="sparkle-list">
                <li>AWS (Lambda, S3, CloudFront), GCP, Azure Static Web Apps, Vercel</li>
                <li>Docker, Git &amp; GitHub</li>
                <li>
                  GitHub Actions CI/CD, protected-branch policies with automated lint
                  &amp; test gates
                </li>
              </ul>
              <h4>Testing &amp; quality</h4>
              <ul className="sparkle-list">
                <li>Test-driven development (TDD) &amp; shift-left testing</li>
                <li>Playwright, Cypress, Jest, Vitest</li>
                <li>Code review, ~90% coverage standards</li>
                <li>WCAG 2.1–aligned, accessible UIs</li>
              </ul>
            </div>
            <div className="skills-panel skills-panel--accent">
              <h2 className="section-title">Expertise</h2>
              <p className="degree">Auburn University graduate (B.S., 2012, honors)</p>
              <h4>Identity &amp; access control</h4>
              <ul className="sparkle-list">
                <li>Okta (enterprise SSO), OAuth 2.0, third-party account linking</li>
                <li>JWT &amp; signed state, session management, Supabase Auth</li>
                <li>
                  Row-level &amp; tenant isolation, AES-256-GCM token encryption at rest
                </li>
              </ul>
              <h4>AI-assisted engineering</h4>
              <ul className="sparkle-list">
                <li>Claude Code, Cursor, ChatGPT, GitHub Copilot, Lumo</li>
                <li>
                  Team AI conventions (CLAUDE.md, rules files, shared prompts) and an AI
                  code-review skill enforcing company standards
                </li>
                <li>
                  LLM integration (Google Gemini multimodal, structured JSON output,
                  prompt engineering)
                </li>
              </ul>
              <h4>Reliability &amp; observability</h4>
              <ul className="sparkle-list">
                <li>On-call &amp; SLA ownership, production troubleshooting</li>
                <li>
                  FullStory session replay, funnel &amp; frustration-signal analysis
                </li>
                <li>Alerting &amp; health digests, retry/backoff</li>
              </ul>
              <h4>Leadership</h4>
              <ul className="sparkle-list">
                <li>Tech lead on multiple projects, cross-team coordination</li>
                <li>Mentoring, technical hiring (technical &amp; behavioral interviews)</li>
                <li>
                  Engineering workshops &amp; playbooks, Agile/Scrum, cross-org
                  collaboration with Product
                </li>
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
                  src={girlsMakeGamesLogo}
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
                  src={gatsbyLogo}
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
              I love committing great code and building lasting relationships.
              Want to chat? Reach out!
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
        </div>
      </footer>
    </>
  )
}
