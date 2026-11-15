import { HashRouter, Route, Routes } from 'react-router-dom'
import { Footer, Navbar, ScrollToTop } from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <section className="section not-found">
                <div className="container">
                  <span className="eyebrow">404</span>
                  <h1>This route has no delivery address.</h1>
                  <p>The page you were looking for is not here — but your parcel is still on track.</p>
                  <a className="btn btn--primary" href="#/">
                    Back to home
                  </a>
                </div>
              </section>
            }
          />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  )
}
