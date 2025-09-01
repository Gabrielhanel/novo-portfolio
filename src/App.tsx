import "./App.css";
import "./styles/globals.css";

import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Projetos from "./pages/Projetos/projetos";
import Design from "./pages/Designs/design";
import Habilidades from "./pages/Habilidades/habilidades";
import ComputerScience from "./pages/Courses/ComputerScience/computer-science";
import Certificates from "./pages/Courses/Certificates/certificates";
import Contacts from "./pages/Contacts/contacts";
import Footer from "./pages/Footer/footer";

function App() {
  return (
    <div className="App">
      <Home />

      <div id="about"><About /></div>
      <div id="projects"><Projetos /></div>
      <div id="designs"><Design /></div>
      <div id="skills"><Habilidades /></div>
      <div id="cs"><ComputerScience /></div>
      <div id="certificates"><Certificates /></div>
      <div id="contact"><Contacts /></div>
      <Footer />
    </div>
  );
}

export default App;