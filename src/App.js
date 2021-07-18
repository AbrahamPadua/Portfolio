// COMPONENTS
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import { BrowserRouter as Router } from "react-router-dom";
// STYLING
import "./styles/App.scss";
import Loader from "./components/Loader";
// import logo from './logo.svg';

function App() {
  return (
    <Router>
      <Loader />
      <div className="container">
        <NavBar />
        <main>
          <About />
          <Projects />
          <Technologies />
          <Contact />
        </main>
      </div>
    </Router>
  );
}

export default App;
