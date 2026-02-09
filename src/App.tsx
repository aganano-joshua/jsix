import { Routes, Route } from 'react-router-dom'
import Header from './components/shared/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div className="container py-8">404 — Not Found</div>} />
        </Routes>
      </main>
    </div>
  )
}

export default App
