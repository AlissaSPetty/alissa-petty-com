import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { LegalPage } from './pages/LegalPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/privacy"
        element={
          <LegalPage title="Privacy policy">
            <p>
              This is a placeholder privacy policy for the rebuilt portfolio site.
              Replace this text with your real policy before publishing.
            </p>
            <p>
              If you have questions, contact{' '}
              <a href="mailto:alissa@petty.io">alissa@petty.io</a>.
            </p>
          </LegalPage>
        }
      />
      <Route
        path="/legal-notice"
        element={
          <LegalPage title="Legal notice">
            <p>
              This is a placeholder legal notice / imprint for the rebuilt portfolio
              site. Replace with jurisdiction-appropriate legal text before publishing.
            </p>
            <p>
              Contact: <a href="mailto:alissa@petty.io">alissa@petty.io</a>
            </p>
          </LegalPage>
        }
      />
    </Routes>
  )
}
