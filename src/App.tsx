import './App.css';
import About from './pages/About/about';
import './pages/Home/home'
import Home from './pages/Home/home';
import Projetos from './pages/Projetos/projetos';
import './styles/globals.css'
import Design from './pages/Designs/design';
import Habilidades from './pages/Habilidades/habilidades';
function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Projetos/>
      <Design/>
      <Habilidades/>
    </div>
  );
}

export default App;
