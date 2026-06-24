
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
                    <Route path= "/" element={<About/>} />
                    {/* -------------Info Page---------------- */}
                    <Route path= "/info" element={
                        <Info 
                          favorites={favorites}
                          setFavorites={setFavorites}
                        />}
                    />
                    {/* -------------Favorites Page---------------- */}
                    <Route path= "/favorite" element={
                        <Favorites 
                          favorites={favorites}
                          setFavorites={setFavorites}
                        />}
                    />
                    {/* -------------Daily Tracker Page------------ */}
                    <Route path="/dailytracker" element={
                        <DailyTracker 

                        />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    </>
  )
}

export default App
