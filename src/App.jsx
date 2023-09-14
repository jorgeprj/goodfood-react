import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Ranking from './pages/Ranking';
import Settings from './pages/Settings';


function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <div className='container main'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App
