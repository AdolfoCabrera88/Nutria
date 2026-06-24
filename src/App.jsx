import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import each page below
import About from './pages/About';

function App() {
  

  return (
    <>
      <BrowserRouter>

        {/* App Header */}
        <header className="app-header">
          <h1>Nutria</h1>
          <p>Healthy meals tailored to your culture</p>
        </header>

          {/* Sets paths to other pages */}
          <Routes>
            {/* -------------About Page---------------- */}
            <Route path="/about" element={<About />} />
            
          </Routes>
        </BrowserRouter>
      </>
  )
}

export default App
