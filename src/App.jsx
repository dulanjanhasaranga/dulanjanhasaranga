
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="layout">
      <Navbar />
      <main>
        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="projects"><Projects /></div>
        <div id="contact"><Contact /></div>
      </main>
    </div>
  );
}

export default App;
