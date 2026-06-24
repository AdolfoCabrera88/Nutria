import { BrowserRouter, Routes, Route } from 'react-router-dom';
// page modifications
import Navbar from './components/Navbar';
// import each page below
import About from './pages/About';
import Info from './pages/Info';

function App() {
  

  return (
    <>
      <BrowserRouter>
        {/* Links to other pages */}
        <div className="container">
            <Navbar />

          {/* App Header */}
          <header className="app-header">
            <h1>Nutria</h1>
            <p>Healthy meals tailored to your culture</p>
          </header>

            {/* Sets paths to other pages */}
            <Routes>
              {/* -------------About Page---------------- */}
              <Route path="/" element={<About />} />
              <Route path="/info" element={<Info />} />
              
            </Routes>
          </div>
        </BrowserRouter>
      </>
  )
}

export default App
