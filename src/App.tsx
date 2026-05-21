import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Store from './pages/Store'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import About from './pages/About'
import Clients from './pages/Clients'
import Contact from './pages/Contact'

function App() {
  // Determine base path from WordPress or default to '/'
  const basePath =
    typeof window !== 'undefined' && (window as Window & { wpData?: { sitePath?: string } }).wpData?.sitePath
      ? (window as Window & { wpData?: { sitePath?: string } }).wpData!.sitePath!
      : '/'

  return (
    <Router basename={basePath}>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/store" element={<Store />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
