import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { GithubCorner } from './components/GithubCorner/GithubCorner';
import { Navbar } from './components/Navbar/Navbar';
import { Curintia } from './pages/Curintia';
import { Home } from './pages/Home';
import { Perdeu } from './pages/Perdeu';

function App() {
  return (
    <div className="flex flex-col h-dvh">
      <GithubCorner />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curintia" element={<Curintia />} />
        <Route path="/perdeu" element={<Perdeu />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
