import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import MovieList from './components/MovieList.jsx'
import CreaterMovie from './components/CreaterMovie.jsx'
import EditMovie from './components/EditMovie.jsx'
import DetailMovie from './components/DetailMovie.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />
      <section className='bg-gray-700 h-auto '>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path='/create-movie' element={<CreaterMovie />} />
          <Route path="/edit-movie/:id" element={<EditMovie />} />
          <Route path="/detail-movie/:id" element={<DetailMovie />} />
        </Routes>
      </section>
      <Footer />
    </div>
  );
}

export default App;
