import './App.css';
import About from './pages/About/about';
import './pages/Home/home'
import Home from './pages/Home/home';
import Projetos from './pages/Projetos/projetos';
import './styles/globals.css'
import Design from './pages/Designs/design';
import Habilidades from './pages/Habilidades/habilidades';
import ComputerScience from './pages/Courses/ComputerScience/computer-science';
import Certificates from './pages/Courses/Certificates/certificates';
import Footer from './pages/Footer/footer';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Projetos/>
      <Design/>
      <Habilidades/>
      <ComputerScience/>
      <Certificates/>
      <Footer/>
    </div>
  );
}

export default App;
