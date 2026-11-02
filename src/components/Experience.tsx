import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import { experience } from '../data/experience'

/* Career line: transit-map tabs with a detailed panel and stickers */
export function Experience() {
  const [active, setActive] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const panelsRef = useRef<HTMLDivElement>(null)

  // Inactive panels stay findable with Ctrl+F; switch tabs when the browser reveals one.
  useEffect(() => {
    const root = panelsRef.current
    if (!root) return
    root.querySelectorAll<HTMLElement>('[role="tabpanel"]').forEach((panel, i) => {
      if (i === active) panel.removeAttribute('hidden')
      else panel.setAttribute('hidden', 'until-found')
    })
    const onBeforeMatch = (e: Event) => {
      const i = Number((e.target as HTMLElement).dataset.index)
      if (!Number.isNaN(i)) setActive(i)
    }
    root.addEventListener('beforematch', onBeforeMatch)
    return () => root.removeEventListener('beforematch', onBeforeMatch)
  }, [active])

  const onKeyDown = (e: KeyboardEvent) => {
    const last = experience.length - 1
    const next =
      e.key === 'ArrowRight' ? (active === last ? 0 : active + 1)
      : e.key === 'ArrowLeft' ? (active === 0 ? last : active - 1)
      : e.key === 'Home' ? 0
      : e.key === 'End' ? last
      : null
    if (next === null) return
    e.preventDefault()
    setActive(next)
    tabs.current[next]?.focus()
  }

  // Show the line oldest → newest, left to right.
  const ordered = experience.map((role, i) => ({ role, i })).reverse()

  return (
    <section className="section section--experience" id="experience" aria-labelledby="experience-heading">
      <div className="container">
        <h2 id="experience-heading" className="section-title">
          Experience
        </h2>
        <div className="career-line" role="tablist" aria-label="Career stops" onKeyDown={onKeyDown}>
          {ordered.map(({ role, i }) => (
            <button
              key={role.id}
              ref={(el) => {
                tabs.current[i] = el
              }}
              type="button"
              role="tab"
              id={`career-tab-${role.id}`}
              aria-selected={active === i}
              aria-controls={`career-panel-${role.id}`}
              tabIndex={active === i ? 0 : -1}
              className="career-stop"
              onClick={() => setActive(i)}
            >
              <span className="career-dot" aria-hidden="true" />
              <span className="career-stop-name">{role.company}</span>
              <span className="career-stop-year">{role.dates.split(' – ')[0].split(' ')[1]}</span>
            </button>
          ))}
        </div>
        <div ref={panelsRef}>
          {experience.map((role, i) => (
            <div
              key={role.id}
              role="tabpanel"
              id={`career-panel-${role.id}`}
              aria-labelledby={`career-tab-${role.id}`}
              data-index={i}
              className="career-panel"
            >
              <div className="career-panel-inner">
                <header className="career-head">
                  <h3>
                    {role.title} <span>@ {role.company}</span>
                  </h3>
                  <p>
                    {role.dates} · {role.location}
                  </p>
                </header>
                <div className="stat-tiles career-stats">
                  {role.stats.map((s) => (
                    <p key={s.label}>
                      <strong>{s.value}</strong>
                      {s.label}
                    </p>
                  ))}
                </div>
                <div className="career-body">
                  <ul className="sparkle-list career-highlights">
                    {role.highlights.map((h) => (
                      <li key={h.label}>
                        <strong>{h.label}</strong>
                        {h.text}
                      </li>
                    ))}
                  </ul>
                  <ul className="career-stickers" aria-label="Tech stack">
                    {role.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
