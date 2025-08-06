import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Formations from './pages/Formations'
import Prestations from './pages/Prestations'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formations" element={<Formations />} />
          <Route path="/prestations" element={<Prestations />} />
          <Route path="/qui-sommes-nous" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
