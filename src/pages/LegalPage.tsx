import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import '../legal.css'

type LegalPageProps = {
  title: string
  children: ReactNode
}

export function LegalPage({ title, children }: LegalPageProps) {
  return (
    <div className="legal-page">
      <header className="legal-header">
        <Link to="/" className="legal-back">
          ← Back to home
        </Link>
        <h1>{title}</h1>
      </header>
      <main className="legal-main">{children}</main>
    </div>
  )
}
