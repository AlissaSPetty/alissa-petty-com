export type Stat = { value: string; label: string }

export type Role = {
  id: string
  company: string
  title: string
  location: string
  dates: string
  summary: string
  stats: Stat[]
  highlights: { label: string; text: string }[]
  tags: string[]
}

export const experience: Role[] = [
  {
    id: 'soltech',
    company: 'Soltech',
    title: 'Software Engineer',
    location: 'Remote',
    dates: 'May 2026 – Present',
    summary:
      'Building a greenfield contract system of record and leading the team’s AI-assisted engineering adoption.',
    stats: [
      { value: '0→1', label: 'greenfield system of record' },
      { value: '2', label: 'engineer team' },
      { value: '100%', label: 'stories delivered test-first' },
    ],
    highlights: [
      {
        label: 'Greenfield system of record',
        text: 'Built from scratch a multi-user, always-available contract system that replaced a single-owner spreadsheet — eliminating a single point of failure.',
      },
      {
        label: 'Led team AI adoption',
        text: 'Established shared CLAUDE.md standards, rules files, and prompts, and co-authored an AI code-review skill that checks pull requests against company standards.',
      },
      {
        label: 'Access control by design',
        text: 'Supabase (Postgres) data layer with Auth and row-level security enforcing per-user and per-client isolation, plus Edge Functions and Realtime.',
      },
      {
        label: 'Shift-left testing',
        text: 'Delivered every user story test-first with Jest unit tests and a Playwright end-to-end suite built from the ground up.',
      },
    ],
    tags: ['React', 'TypeScript', 'Supabase', 'Postgres RLS', 'Playwright', 'Jest', 'Claude Code', 'Cursor'],
  },
  {
    id: 'mailchimp',
    company: 'Intuit (Mailchimp)',
    title: 'Senior Software Engineer',
    location: 'Remote',
    dates: 'Aug 2021 – Oct 2025',
    summary:
      'Tech lead on multiple projects, including a mission-critical, multi-tenant form builder built from the ground up.',
    stats: [
      { value: '~90%', label: 'test coverage' },
      { value: '~20%', label: 'faster LCP' },
      { value: 'Tech lead', label: 'on multiple projects' },
    ],
    highlights: [
      {
        label: 'Greenfield form builder',
        text: 'Led design and build of a multi-tenant form builder — React front ends, Node.js services, and a GraphQL API powering schema-driven UIs.',
      },
      {
        label: 'Production ownership',
        text: 'Owned on-call and SLA-aligned incident response, leading troubleshooting and coordinating fixes across teams.',
      },
      {
        label: 'Org-wide FullStory rollout',
        text: 'Led adoption end-to-end with playbooks, documentation, and workshops; used session replay and frustration signals to speed issue resolution.',
      },
      {
        label: 'Mentoring & hiring',
        text: 'Mentored engineers through code review and served on the hiring committee for technical and behavioral interviews.',
      },
    ],
    tags: ['React', 'Node.js', 'GraphQL', 'Jest', 'Cypress', 'FullStory', 'WCAG 2.1'],
  },
  {
    id: 'hirez',
    company: 'Hi-Rez Studios',
    title: 'Web Developer',
    location: 'Alpharetta, GA',
    dates: 'Sep 2014 – Aug 2021',
    summary:
      'Built esports and portal experiences for a game studio serving millions of players.',
    stats: [
      { value: '10M+', label: 'daily API calls' },
      { value: '1M+', label: 'active users tracked' },
      { value: '~30%', label: 'faster localization' },
    ],
    highlights: [
      {
        label: 'High-traffic APIs',
        text: 'Gatsby and Node.js experiences serving 10M+ daily API calls at sub-second latency through caching and database tuning.',
      },
      {
        label: 'Identity integrations',
        text: 'Twitch, Facebook, YouTube, and Twitter OAuth so players could link accounts and earn verified in-game rewards.',
      },
      {
        label: 'Internal tooling',
        text: 'MongoDB + Node.js localization app that cut localization time-to-market by ~30%.',
      },
      {
        label: 'CI/CD standards',
        text: 'Established protected branches with automated lint and test gates for safer merges and releases.',
      },
    ],
    tags: ['Gatsby', 'Node.js', 'MongoDB', 'OAuth', 'GitHub Actions', 'Google Analytics'],
  },
]
